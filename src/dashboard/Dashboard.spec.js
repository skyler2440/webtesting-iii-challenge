import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("should default to open and unlocked", () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText("Unlocked"));
    expect(getByText("Open"));
    expect(getByText("Lock Gate"));
    expect(getByText("Close Gate"));
  });
  it("tests button and display state", () => {
    const { queryByText, getByText } = render(<Dashboard />);
    const closeButton = queryByText("Close Gate");
    const lockButton = queryByText("Lock Gate");
    expect(closeButton);
    expect(lockButton);
    fireEvent.click(closeButton);
    expect(getByText("Unlocked"));
    expect(getByText("Closed"));
    expect(getByText("Lock Gate"));
    expect(getByText("Open Gate"));
    fireEvent.click(lockButton);
    expect(getByText("Locked"));
    expect(getByText("Closed"));
    expect(getByText("Unlock Gate"));
    expect(getByText("Open Gate"));
    const unlockButton = queryByText("Unlock Gate");
    const openButton = queryByText("Open Gate");
    expect(unlockButton);
    expect(openButton);
    fireEvent.click(unlockButton);
    expect(getByText("Unlocked"));
    expect(getByText("Closed"));
    expect(getByText("Lock Gate"));
    expect(getByText("Open Gate"));
    fireEvent.click(openButton);
    expect(getByText("Unlocked"));
    expect(getByText("Open"));
    expect(getByText("Lock Gate"));
    expect(getByText("Close Gate"));
  });
});
