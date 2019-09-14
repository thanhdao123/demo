const sharpServices = require("utils/sharp.utils");

async function startServer() {
  console.log("Worker is running ....");
  const hash =
    "32810e9669e8d5e8ea9a86d5e48afa1c22ce2ab45db079c383e5e5c017e1c845";
  sharpServices
    .crop(hash)
    .then(() => console.log("Done!"))
    .catch(error => console.log(error));
}

startServer();
