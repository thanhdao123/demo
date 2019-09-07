const sharp = require("sharp");
const fs = require("fs");

const resizeTasks = [
  { filename: "620.jpg", height: 620 },
  { filename: "300.jpg", height: 300 },
  { filename: "192.jpg", height: 192 },
  { filename: "96.jpg", height: 96 },
  { filename: "48.jpg", height: 48 }
];

const cropTasks = [
  { filename: "crop-90-120.jpg", width: 90, height: 120 },
  { filename: "crop-90-160.jpg", width: 90, height: 160 },
  { filename: "crop-75-40.jpg", width: 75, height: 40 },
  { filename: "crop-80-160.jpg", width: 80, height: 160 },
  { filename: "crop-90-94.jpg", width: 90, height: 94 }
];

const blurTasks = [
  { filename: "crop-90-120-blur.jpg", width: 90, height: 120 },
  { filename: "crop-90-160-blur.jpg", width: 90, height: 160 },
  { filename: "crop-75-40-blur.jpg", width: 75, height: 40 },
  { filename: "crop-80-160-blur.jpg", width: 80, height: 160 },
  { filename: "crop-90-94-blur.jpg", width: 90, height: 94 }
];

exports.crop = async function(hash) {
  const { getInputPath, getOutputPath } = await setup(hash);

  const resizeTaskPromises = resizeTasks.map(task =>
    sharp(getInputPath())
      .resize({ height: task.height })
      .toFile(getOutputPath(task.filename))
  );

  const cropTaskPromises = cropTasks.map(task =>
    sharp(getInputPath())
      .resize({ height: task.height, width: task.width })
      .toFile(getOutputPath(task.filename))
  );

  const blurTaskPromises = blurTasks.map(task =>
    sharp(getInputPath())
      .resize({ height: task.height, width: task.width })
      .blur(6)
      .toFile(getOutputPath(task.filename))
  );
  console.log("okok");

  await Promise.all([
    ...resizeTaskPromises,
    ...cropTaskPromises,
    ...blurTaskPromises
  ]);
};

function ensureDir(dirpath) {
  return fs.mkdir(dirpath, error => {
    if (error) {
      return error.code === "EEXIST"
        ? Promise.resolve()
        : Promise.reject(error);
    }
    return Promise.resolve();
  });
}

async function setup(hash) {
  const inputPath = `/home/thanhdn/Desktop/web/demo/worker/uploads/${hash}.jpg`;
  const outputBaseDir = `/home/thanhdn/Desktop/web/demo/worker/cropped-data/${hash}`;

  await ensureDir(outputBaseDir);

  return {
    getInputPath: () => inputPath,
    getOutputPath: filename => `${outputBaseDir}/${filename}`
  };
}
