import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Home from "./Home";

describe("Home component", () => {
  test("First test", () => {
    render(<Home />);

    const btn = screen.getByRole("button", { name: /get user/i });
    userEvent.click(btn);
    console.log("Testing it it works");
  });

  test("second test", () => {
    render(<Home />);
    const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    const input = screen.getByPlaceholderText("upload");
    userEvent.upload(input, fakeFile);
    const btn = screen.getByRole("button", { name: /upload files/i });
    userEvent.click(btn);
  });
});
