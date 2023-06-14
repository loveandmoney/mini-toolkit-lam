import React, { useEffect, useState } from "react";
import { DesignPrincipleBlock } from "~components";
import { IDesignPrincipleBlock } from "~schemas";

interface IProps {
  data: {
    blocks: IDesignPrincipleBlock[];
  };
}

const DesignPrincipleBlocks = ({ data: { blocks } }: IProps) => {
  // All this logic is used to calculate the active block in mobile view
  const [activeBlockIndex, setActiveBlockIndex] = useState<number | null>(null);

  const blockRefs: HTMLDivElement[] = [];

  const getAverageBlockHeight = () => {
    let combinedHeight = 0;

    blockRefs.forEach((ref) => {
      combinedHeight += ref.clientHeight;
    });

    return combinedHeight / blockRefs.length;
  };

  const getIntersectionArea = () => {
    const windowHeight = window.innerHeight;
    const averageBlockHeight = getAverageBlockHeight();

    const top = windowHeight / 2 - averageBlockHeight / 2;
    const bottom = top + averageBlockHeight;

    return { top, bottom };
  };

  const isScrolledToBottom = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const margin = 20;
    return scrollTop + clientHeight >= scrollHeight - margin;
  };

  const getPercentageWithinBounds = (element: HTMLDivElement) => {
    const intersectionArea = getIntersectionArea();
    const boundTop = intersectionArea.top;
    const boundBottom = intersectionArea.bottom;

    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top;
    const elementBottom = elementRect.bottom;

    const sharedTop = Math.max(elementTop, boundTop);
    const sharedBottom = Math.min(elementBottom, boundBottom);
    const sharedHeight = Math.max(0, sharedBottom - sharedTop);

    const tallestHeight = Math.max(
      elementTop - elementBottom,
      boundBottom - boundTop
    );

    const overlapPercentage = (sharedHeight / tallestHeight) * 100;
    return overlapPercentage;
  };

  const updateActiveBlockIndex = () => {
    if (isScrolledToBottom()) {
      setActiveBlockIndex(blockRefs.length - 1);
      return;
    }

    let currentHightestOverlapPercentage = 0;
    let currentElementIndexWithMostOverlap = null;

    for (let i = 0; i < blockRefs.length; i++) {
      const currentBlock = blockRefs[i];

      const percentageOverlap = getPercentageWithinBounds(currentBlock);

      if (
        percentageOverlap !== 0 &&
        percentageOverlap > currentHightestOverlapPercentage
      ) {
        currentHightestOverlapPercentage = percentageOverlap;
        currentElementIndexWithMostOverlap = i;
      }
    }
    setActiveBlockIndex(currentElementIndexWithMostOverlap);
  };

  useEffect(() => {
    window.addEventListener(`scroll`, updateActiveBlockIndex);
    return () => window.removeEventListener(`scroll`, updateActiveBlockIndex);
  }, []);

  return (
    <>
      {blocks.map((block, i) => (
        <DesignPrincipleBlock
          key={i}
          blockRefsArray={blockRefs}
          title={block.title}
          backgroundColor={block.backgroundColor}
          principles={block.principles}
          activeMobile={activeBlockIndex === i}
        />
      ))}
    </>
  );
};

export default DesignPrincipleBlocks;
