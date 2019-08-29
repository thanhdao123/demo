const path = require("path");
const { fileLoader, mergeTypes } = require("merge-graphql-schemas");

const typesArray = fileLoader(path.join(__dirname, "../modules/**/*.graphql"));

module.exports = mergeTypes(typesArray, { all: true });
