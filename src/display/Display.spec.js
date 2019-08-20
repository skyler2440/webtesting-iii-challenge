import React from "react";
import Display from "./Display";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

describe("<Display />", () => {
  it("is open and unlocked", () => {
    const { getByText } = render(<Display />);
    expect(getByText("Unlocked"));
    expect(getByText("Open"));
  });
  it("accepts props", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    expect(getByText("Locked"));
    expect(getByText("Closed"));
  });
});
