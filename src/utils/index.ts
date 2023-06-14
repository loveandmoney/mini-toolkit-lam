export const remToPx = (rem: number) => {
  if (typeof window === `undefined`) {
    return rem;
  }

  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export const hexToRGB = (hex: string) => {
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return rgb
    ? {
        r: parseInt(rgb[1], 16),
        g: parseInt(rgb[2], 16),
        b: parseInt(rgb[3], 16)
      }
    : null;
};

export const capitalizeString = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const spliceFromStateArray = (array: any[], item: any) => {
  if (!array?.[0] || !array?.includes(item)) {
    return array;
  }

  const arrayClone = JSON.parse(JSON.stringify(array));

  arrayClone.splice(array.indexOf(item), 1);

  return arrayClone;
};

export const spliceFromStateArrayByProperty = (
  array: any[],
  key: string,
  value: any
) => {
  if (!array?.[0]) {
    return array;
  }

  const item = array?.find((arrayItem) => arrayItem?.[key] === value);

  if (!item) {
    return array;
  }

  return spliceFromStateArray(array, item);
};

export const spliceFromStateArrayByIndex = (array: any[], index: number) => {
  if (!array?.[0] || !array?.[index]) {
    return array;
  }

  const arrayClone = JSON.parse(JSON.stringify(array));

  arrayClone.splice(index, 1);

  return arrayClone;
};

export const getRandomIntByRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

export const shuffleArray = (array: any[]) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const sortArrayByNumberProperty = (array: any[], property: string) => {
  if (!array?.[0]?.[property]) {
    return array;
  }

  return array.sort((a, b) => {
    const itemA = a?.[property] || 9999999999;
    const itemB = b?.[property] || 9999999999;

    if (itemA < itemB) {
      return -1;
    }

    if (itemA > itemB) {
      return 1;
    }

    return 0;
  });
};

export const splitCamelCase = (word: string) =>
  word.replace(/([A-Z])/g, ` $1`).replace(/^./, (str) => str.toUpperCase());

export const getCurrentLink = (pathname: string) => pathname;

export const rotisserieCamel = (camel: string) =>
  camel.replace(/([A-Z0-9])/g, `-$1`).toLowerCase();

export const camelCaseToTitleCase = (camelCase: string) => {
  const splitToWords = camelCase.replace(/([A-Z])/g, ` $1`);
  const capitalise =
    splitToWords.charAt(0).toUpperCase() + splitToWords.slice(1);
  return capitalise;
};
export const dashToCamel = (dashStr: string) =>
  dashStr.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
