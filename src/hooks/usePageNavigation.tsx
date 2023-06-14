import { graphql, useStaticQuery } from "gatsby";

export type TPage = {
  title: string;
  id: string;
  slug: {
    current: string;
  };
  disabled: boolean;
};

export type TCategory = {
  id: string;
  pages: TPage[];
  title: string;
};

interface IPageNavigation {
  allSanityCategory: {
    nodes: TCategory[];
  };
}

export const usePageNavigation = () => {
  const {
    allSanityCategory: { nodes: pageCategories }
  }: IPageNavigation = useStaticQuery(
    graphql`
      query PageNavigation {
        allSanityCategory(sort: { orderRank: ASC }) {
          nodes {
            id
            orderRank
            slug {
              current
            }
            title
            pages {
              title
              slug {
                current
              }
              id
              disabled
            }
          }
        }
      }
    `
  );

  const getPageCategory: (pageSlug: string) => TCategory | null = (
    pageSlug
  ) => {
    for (let i = 0; i < pageCategories.length; i++) {
      const category = pageCategories[i];
      for (let j = 0; j < category.pages.length; j++) {
        const page = category.pages[j];
        if (pageSlug?.includes(page.slug.current)) {
          return category;
        }
      }
    }

    return null;
  };

  const getPageIndexInCategory: (
    currentSlug: string,
    currentCategory: TCategory
  ) => number = (currentSlug, currentCategory) => {
    const currentPageIndex = currentCategory?.pages.findIndex((page) =>
      currentSlug.includes(page.slug.current)
    );

    return currentPageIndex;
  };

  const getCategoryIndex: (categoryId: string) => number = (categoryId) =>
    pageCategories.findIndex(
      (category: TCategory) => category.id === categoryId
    );

  // The below functions could be refactored to be more concise, but I wanted to make them as readable as possible.
  // e.g. getNextValidPage could be recursive and just call itself with the next category/page index.
  const getFirstValidPage: () => TPage | null = () => {
    for (let i = 0; i < pageCategories.length; i++) {
      const category = pageCategories[i];
      for (let j = 0; j < category.pages.length; j++) {
        const page = category.pages[j];
        if (!page.disabled) {
          return page;
        }
      }
    }
    return null;
  };

  const getPrevValidCategory: (
    currentCategory: TCategory
  ) => TCategory | null = (currentCategory) => {
    const currentCategoryIndex = getCategoryIndex(currentCategory?.id);

    for (let i = currentCategoryIndex - 1; i >= 0; i--) {
      const category = pageCategories[i];

      if (category.pages.some((page: TPage) => !page.disabled)) {
        return category;
      }
    }

    return null;
  };

  const getNextValidCategory: (
    currentCategory?: TCategory
  ) => TCategory | null = (currentCategory) => {
    if (!currentCategory) {
      return (
        pageCategories.find((category) =>
          category.pages.some((page: TPage) => !page.disabled)
        ) || null
      );
    }

    const currentCategoryIndex = getCategoryIndex(currentCategory?.id);

    for (let i = currentCategoryIndex + 1; i < pageCategories.length; i++) {
      const category = pageCategories[i];

      if (category.pages.some((page: TPage) => !page.disabled)) {
        return category;
      }
    }

    return null;
  };

  const getPrevValidPageInCategory: (
    category: TCategory,
    startingIndex: number
  ) => TPage | null = (category, startingIndex) => {
    for (let i = startingIndex; i >= 0; i--) {
      const page = category.pages[i];
      if (!page.disabled) {
        return page;
      }
    }
    return null;
  };

  const getNextValidPageInCategory: (
    category: TCategory,
    startingIndex: number
  ) => TPage | null = (category, startingIndex) => {
    for (let i = startingIndex; i < category?.pages.length; i++) {
      const page = category.pages[i];
      if (!page.disabled) {
        return page;
      }
    }
    return null;
  };

  const getPrevPage: (currentSlug: string) => TPage | null = (currentSlug) => {
    const currentPageCategory = getPageCategory(currentSlug);

    // Only valid page without a category is homepage
    if (!currentPageCategory) return null;

    const currentPageIndex = getPageIndexInCategory(
      currentSlug,
      currentPageCategory
    );

    const prevValidPageInCategory = getPrevValidPageInCategory(
      currentPageCategory,
      currentPageIndex - 1
    );

    if (prevValidPageInCategory) {
      return prevValidPageInCategory;
    }

    const prevValidCategory = getPrevValidCategory(currentPageCategory);

    if (!prevValidCategory) {
      return null;
    }

    return getPrevValidPageInCategory(
      prevValidCategory,
      prevValidCategory.pages.length - 1
    );
  };

  const getNextPage: (currentSlug: string) => TPage | null = (currentSlug) => {
    const currentPageCategory = getPageCategory(currentSlug);

    // Only valid page without a category is homepage
    // so we find the first valid category and return the first valid page in that category
    if (!currentPageCategory) {
      return getFirstValidPage();
    }

    const currentPageIndex = getPageIndexInCategory(
      currentSlug,
      currentPageCategory
    );

    const nextValidPageInCategory = getNextValidPageInCategory(
      currentPageCategory,
      currentPageIndex + 1
    );

    if (nextValidPageInCategory) {
      return nextValidPageInCategory;
    }

    const nextValidCategory = getNextValidCategory(currentPageCategory);

    if (!nextValidCategory) {
      return null;
    }

    return getNextValidPageInCategory(nextValidCategory, 0);
  };

  const getOverallPagePosition = (page: TPage) => {
    const pageCategory = getPageCategory(page.slug.current);
    if (!pageCategory) return 0;

    const categoryIndex = getCategoryIndex(pageCategory.id);

    let pagesInPreviousCategories = 0;

    for (let i = 0; i < categoryIndex; i++) {
      pagesInPreviousCategories += pageCategories[i].pages.length;
    }

    const pageIndexInCategory = getPageIndexInCategory(
      page.slug.current,
      pageCategory
    );

    const overallPagePosition = pagesInPreviousCategories + pageIndexInCategory;
    return overallPagePosition;
  };

  return {
    pageCategories,
    getPrevPage,
    getNextPage,
    getOverallPagePosition
  };
};

export default usePageNavigation;
