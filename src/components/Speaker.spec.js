import React from "react";
import { render, fireEvent } from "react-testing-library";

import Speaker from "./Speaker";

describe("<Speaker />", () => {
  it("should call the speaker function passed as props", () => {
    const speak = jest.fn();

    const { getByText } = render(<Speaker speak={speak} />);

    fireEvent.click(getByText(/speak/i));

    expect(speak).toHaveBeenCalled();
  });
});
