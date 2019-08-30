process.env.NODE_ENV = "TEST";
console.log = () => {};

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("server");
const BookModel = require("db/models/book.model");

chai.use(chaiHttp);
const should = chai.should();

describe("Books", () => {
  beforeEach(done => {
    BookModel.deleteMany({}).then(() => done());
  });

  describe("GET /book", () => {
    it("it should GET all the books", done => {
      chai
        .request(server)
        .get("/book")
        .end((error, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("POST /book", () => {
    it("it should not POST a book without pages field", done => {
      const book = {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954
      };
      chai
        .request(server)
        .post("/book")
        .send(book)
        .end((error, res) => {
          res.should.have.status(500);
          res.body.should.have.property("error");
          done();
        });
    });

    it("it should POST a book ", done => {
      const book = {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        pages: 1170
      };
      chai
        .request(server)
        .post("/book")
        .send(book)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have
            .property("message")
            .eql("Book successfully added!");
          res.body.book.should.have.property("title");
          res.body.book.should.have.property("author");
          res.body.book.should.have.property("pages");
          res.body.book.should.have.property("year");
          done();
        });
    });
  });

  describe("GET /book/:id", () => {
    it("it should GET a book by the given id", done => {
      const book = new BookModel({
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        pages: 1170
      });
      book.save((err, book) => {
        chai
          .request(server)
          .get("/book/" + book.id)
          .send(book)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("title");
            res.body.should.have.property("author");
            res.body.should.have.property("pages");
            res.body.should.have.property("year");
            res.body.should.have.property("_id").eql(book.id);
            done();
          });
      });
    });

    it("it should GET no book by the given a wrong id", done => {
      const book = new BookModel({
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1954,
        pages: 1170
      });

      book.save((err, book) => {
        chai
          .request(server)
          .get("/book/" + "5d68d83c93c554036294c78e")
          .send(book)
          .end((err, res) => {
            res.should.have.status(200);
            res.should.have.property("body").eql(null);
            done();
          });
      });
    });
  });
});
