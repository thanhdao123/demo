const https = require("https");
const fs = require("fs");
const path = require("path");

function saveImageFromUrl({ url, hash }) {
  const dest = createImageDest({ url, hash });
  return download({ url, dest });
}

function createImageDest({ url, hash }) {
  const baseDir = "/home/thanhdn/Desktop/web/demo/worker/images/input";
  const extName = path.extname(url);
  return `${baseDir}/${hash}${extName}`;
}

function download({ url, dest }) {
  return new Promise((resolve, reject) => {
    const file = fs
      .createWriteStream(dest)
      .on("finish", () => file.close(resolve));

    https
      .get(url, response => response.pipe(file))
      .on("error", error => {
        fs.unlink(dest);
        file.close(() => reject(error));
      });
  });
}

function testSharp() {
  console.log("TEST Sharp");
}

const sharpServices = Object.freeze({ testSharp, saveImageFromUrl });

module.exports = sharpServices;
