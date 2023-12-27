import { blocks } from "./blocks.js";

const mainBlock = document.querySelector(".main-container");
const blockMarkup = createBlocksMarkup();
console.log(mainBlock);
console.log(blocks);

function createBlocksMarkup() {
  return blocks
    .map(({ width, height }) => {
      return ` <div class="block" style="width:${width}px; height:${height}px; background-color:${getRandomHexColor()} ">block</div>`;
    })
    .join("");
}
mainBlock.insertAdjacentHTML("beforeend", blockMarkup);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function countPostion() {
  const freePlace = { width: 1200, height: 600 };
  blocks.forEach(({ width, height }) => {
    freePlace.width -= width;
    freePlace.height -= height;
  });
}
