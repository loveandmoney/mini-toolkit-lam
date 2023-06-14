const basicText = /^[\s]*[\S]+[\s\S]*$/; // At least 1 non-whitespace character, leading + trailing whitespace is allowed
const email = /^\s*\S+[@]\S+[.]\S+\s*$/; // <love>@<money>.<beta>, leading + trailing whitespace is allowed

const regex = {
  name: basicText,
  email,
  enquiry: basicText,
  message: basicText
};

export default regex;
