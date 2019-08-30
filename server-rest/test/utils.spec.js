const chai = require("chai");

const should = chai.should();

const { isValidObjectID } = require("utils");

describe("Test utility functions", () => {
  describe("isValidObjectID", () => {
    it("@param=aaabssadad should return false", done => {
      isValidObjectID("aaabssadad").should.false;
      done();
    });

    it("@param=5d6891755322800099eadf38 should return true", done => {
      isValidObjectID("5d6891755322800099eadf38").should.true;
      done();
    });
  });
});
