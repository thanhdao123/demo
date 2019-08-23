const sharp = require("sharp");
const request = require("request");

function run() {
  console.log("TEST Sharp");
  // const url =
  //   "https://mktimg2.com/2/3266/__AMykjN2IzM/__AO4YTMykTMa7f65e01aa326cebbaad4c69f83083257a0aeacee3cb822049b13e8ac4fac43685329.jpg";
  // request.get({ uri: url, encoding: null }, (error, res, buffer) => {
  //   sharp(buffer)
  //     .toFile("/home/thanhdn/Desktop/web/demo/worker/images/output/1.jpg")
  //     .catch(console.log);
  // });
}

const sharpServices = Object.freeze({ run });

module.exports = sharpServices;
