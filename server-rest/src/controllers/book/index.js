const BookModel = require("db/models/book.model");
const { isValidObjectID } = require("utils");

exports.getBooks = () => BookModel.find({});

exports.postBook = async httpRequest => {
  const book = new BookModel(httpRequest.body);
  await book.save();
  return { message: "Book successfully added!", book };
};

exports.getBook = async httpRequest => {
  const { id } = httpRequest.params;
  if (!isValidObjectID(id)) {
    return null;
  }
  return await BookModel.findById(id);
};

exports.deleteBook = async httpRequest => {
  await BookModel.deleteOne({ _id: httpRequest.params.id });
  return { message: "Book successfully deleted!" };
};

exports.updateBook = async httpRequest => {
  const found = await BookModel.findById({ _id: httpRequest.params.id });
  await Object.assign(found, httpRequest.body).save();
  return { message: "Book updated!", found };
};
