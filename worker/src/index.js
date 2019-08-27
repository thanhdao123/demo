const imageServices = require("image.services");

async function startServer() {
  const url =
    "https:////mktimg2.com/2/3266/__AMykjN2IzM/__AO4YTMykTMa7f65e01aa326cebbaad4c69f83083257a0aeacee3cb822049b13e8ac4fac43685329.jpg";
  const hash =
    "32810e9669e8d5e8ea9a86d5e48afa1c22ce2ab45db079c383e5e5c017e1c845";

  imageServices
    .saveImageFromUrl({ url, hash })
    .then(() => console.log("Save image Success with hash: %s", hash))
    .catch(console.log);
}

startServer();
