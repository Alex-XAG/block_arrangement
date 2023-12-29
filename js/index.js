import { blocks } from "./blocks.js";

const mainBlock = document.querySelector(".main-container");
const blockMarkup = createBlocksMarkup();

// const freePlace = { width: 1200, height: 600 };

console.log(mainBlock);
console.log(blocks);

function createBlocksMarkup() {
  //   const noPlace = { top: 0, left: 0 };
  //   blocks.sort(
  //     (firstBlock, secondBlock) => secondBlock.height - firstBlock.height
  //   );
  const blocksPosition = countPosition();
  console.log(blocksPosition);
  return blocks
    .map(({ width, height, id }, i) => {
      return `<span class="block" style="top:${blocksPosition[i].top}px; left:${
        blocksPosition[i].left
      }px; width:${width}px; height:${height}px; background-color:${getRandomHexColor()} ">block ${id}</span>`;
    })
    .join("");
}
mainBlock.insertAdjacentHTML("beforeend", blockMarkup);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function countPosition() {
  const freePlace = { top: 0, left: 0, bottom: 600, right: 1200 };
  const blocksPosition = blocks.map((block, i) => {
    const { width, height } = block;
    if (!i) {
      freePlace.top = 0;
      freePlace.left = 0;
      freePlace.bottom -= height;
      freePlace.right -= width;
      return {
        top: 0,
        left: 0,
        bottom: freePlace.bottom,
        right: freePlace.right,
      };
    } else if (freePlace.right >= 0) {
      freePlace.top = 0;
      freePlace.left += blocks[i - 1].width;
      freePlace.bottom -= height;
      freePlace.right -= width;

      return {
        top: freePlace.top,
        left: freePlace.left,
        bottom: freePlace.bottom,
        right: freePlace.right,
      };
    } else if (freePlace.right <= 0) {
      freePlace.top += blocks[i - 1].height;
      freePlace.left = 0;
      freePlace.bottom -= height;
      freePlace.right -= width;

      return {
        top: freePlace.top,
        left: freePlace.left,
        bottom: freePlace.bottom,
        right: freePlace.right,
      };
    } else if (freePlace.top <= 0) {
      freePlace.top = freePlace.top;
      freePlace.left = 0;
      freePlace.bottom -= height;
      freePlace.right -= width;

      return {
        top: freePlace.top,
        left: freePlace.left,
        bottom: freePlace.bottom,
        right: freePlace.right,
      };
    }
  });
  return blocksPosition;
}
countPosition();
