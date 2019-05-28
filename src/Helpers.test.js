const helpers = require("./Helpers");
import axios from "./__mocks__/axios";

jest.mock("uuid", () => {
  return () => "1234";
});

describe("helpers", () => {
  describe("makePerson()", () => {
    it("should create a person", () => {
      const expected = { id: "1234", name: "Frodo Baggins" };

      const actual = helpers.makePerson("Frodo", "Baggins");

      expect(actual).toEqual(expected);
    });
  });
  describe("forEvenOnly()", () => {
    it("should invoke callback using the number provided when given an even number", () => {
      // let ran = false;

      // helpers.forEvenOnly(2, () => {
      //   ran = true;
      // });
      // expect(ran).toBe(true);
      const spy = jest.fn();
      helpers.forEvenOnly(1, spy);
      helpers.forEvenOnly(2, spy);
      helpers.forEvenOnly(4, spy);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, 2);
      expect(spy).toHaveBeenNthCalledWith(2, 4);
    });

    it("should NOT invoke callback when given an odd number", () => {
      const spy = jest.fn();

      helpers.forEvenOnly(1, spy);

      expect(spy).not.toHaveBeenCalled();
    });

    it("returns a smile", () => {
      const spy = jest.fn(() => "smile");

      const greeting = helpers.greeter(spy);

      expect(greeting).toBe("smile");
    });
  });
  describe("some API", () => {
    it("succeeds with correct passworD", done => {
      const url = "https//anyapi/";
      const payload = { password: "mellon" };

      axios.post(url, payload).then(res => {
        expect(res.statusCode).toBe(201);
        expect(res.success).toBe(true);
        done();
      });
    });
    it("fails with incorrect password", done => {
      const url = "https//anyapi/";
      const payload = { password: "mellons" };

      axios.post(url, payload).catch(res => {
        expect(res.statusCode).toBe(400);
        expect(res.success).toBe(false);
        done();
      });
    });
  });
});
