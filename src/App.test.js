import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

describe("speak()", () => {
  it("update the message when speak button is clicked", () => {
    const { getByText, queryByText } = render(<App />);

    expect(queryByText(/not mocking me/i)).toBeFalsy();

    const button = getByText(/speak/i);
    fireEvent.click(button);

    expect(queryByText(/not mocking me/i)).toBeTruthy();
  });
});

describe("<App />", () => {
  it("should run the test", () => {
    expect(true).toBe(true);
  });
  // 2. write this test
  // we can use .skip to bypass running a test
  // we cna also use .only to only run that particular test
  // it.only("matches snapshot", () => {
  it.skip("matches snapshot", () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("mocking", () => {
  it("is mocking me", () => {
    const mock = jest.fn();

    const actual = mock("smile");

    expect(actual).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });
  it("controls the mock", () => {
    const mock = jest.fn(() => "hello");

    const actual = mock("smile");

    expect(actual).toBe("hello");
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("smile");
  });
});
