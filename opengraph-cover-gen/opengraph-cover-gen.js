// ERROR	Error: libuuid.so.1: cannot open shared object file: No such file or directory
// https://github.com/Automattic/node-canvas/issues/1448
// Erro, tentando com node 12
// https://github.com/Automattic/node-canvas/issues/1779
import { createCanvas, loadImage } from "canvas";
import fs from "fs";
import path from "path";
// import getConfig from "next/config";
// const { serverRuntimeConfig } = getConfig();

async function run() {
  // https://flaviocopes.com/canvas-node-generate-image/
  const width = 1200;
  const height = 600;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, width, height);

  const text = "Hello, World!";

  context.textBaseline = "top";
  context.fillStyle = "#3574d4";
  const textWidth = context.measureText(text).width;
  context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
  context.fillStyle = "#fff";
  context.fillText(text, 600, 170);

  context.fillStyle = "#fff";
  context.font = "bold 30pt Menlo";
  context.fillText("flaviocopes.com", 600, 530);

  // https://github.com/vercel/next.js/issues/8251#issuecomment-547702744
  // https://medium.com/@boris.poehland.business/next-js-api-routes-how-to-read-files-from-directory-compatible-with-vercel-5fb5837694b9
  // fs.readFile(path.join(serverRuntimeConfig.PROJECT_ROOT, './path/to/file.json'))
  // console.log(
  //   "teste->",
  //   path.join(
  //     serverRuntimeConfig.PROJECT_ROOT,
  //     "./public/images/custom-cover-logo-bg.png"
  //   )
  // );
  const customCover = path.resolve("./public/images/custom-cover-logo-bg.png");
  console.log(
    "teste->",
    path.resolve("./public/images/custom-cover-logo-bg.png")
  );

  // loadImage(coverLogoBg.src).then((image) => {
  // try {
  //   const image = await loadImage(customCover);
  //   context.drawImage(image, 340, 515, 70, 70);
  //   const buffer = canvas.toBuffer("image/png");
  //   fs.writeFileSync("./image.png", buffer);
  //   console.log("Sucesso!");
  // } catch (error) {
  //   console.error("loadImage err: ", error);
  //   throw error;
  // }
}

export default {
  run,
};
