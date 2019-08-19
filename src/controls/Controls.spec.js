import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

describe("<Controls />", () => {
  it("open and locked work as expected", () => {
    const closeFake = jest.fn();
    const { queryByText } = render(
      <Controls locked={false} closed={false} toggleClosed={closeFake} />
    );
    const lockButton = queryByText("Lock Gate");
    const closeButton = queryByText("Close Gate");
    expect(lockButton);
    expect(closeButton);
    expect(lockButton.disabled).toBe(true);
    expect(closeButton.disabled).toBe(false);
    fireEvent.click(closeButton);
    expect(closeFake).toBeCalled();
  });
  it("closed and unlocked work as expected", () => {
    const openFake = jest.fn();
    const lockFake = jest.fn();
    const { queryByText } = render(
      <Controls
        locked={false}
        closed={true}
        toggleClosed={openFake}
        toggleLocked={lockFake}
      />
    );
    const lockButton = queryByText("Lock Gate");
    const openButton = queryByText("Open Gate");
    expect(lockButton);
    expect(openButton);
    expect(lockButton.disabled).toBe(false);
    expect(openButton.disabled).toBe(false);
    fireEvent.click(openButton);
    expect(openFake).toBeCalled();
    fireEvent.click(lockButton);
    expect(lockFake).toBeCalled();
  });
  it("closed and locked work as expected", () => {
    const unlockFake = jest.fn();
    const { queryByText } = render(
      <Controls locked={true} closed={true} toggleLocked={unlockFake} />
    );
    const unlockButton = queryByText("Unlock Gate");
    const openButton = queryByText("Open Gate");
    expect(unlockButton);
    expect(openButton);
    expect(unlockButton.disabled).toBe(false);
    expect(openButton.disabled).toBe(true);
    fireEvent.click(unlockButton);
    expect(unlockFake).toBeCalled();
  });
});
