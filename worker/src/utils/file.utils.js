const https = require("https");
const fs = require("fs");

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

module.exports = { download };
