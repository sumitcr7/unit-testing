import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { rest } from "msw";
import { server } from "../mocks/server";

import Home from "./Home";

describe("Home component", () => {
  test("First test", async () => {
    render(<Home />);

    const btn = screen.getByRole("button", { name: /get user/i });
    userEvent.click(btn);
    const file = await screen.findAllByText("file1");
    expect(file).toHaveLength(1);
  });

  test("Error scenario test", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/details", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<Home />);

    const btn = screen.getByRole("button", { name: /get user/i });
    userEvent.click(btn);
    const file = await screen.findByText("Something went wrong");
    expect(file).toBeInTheDocument();
  });

  test("second test", async () => {
    render(<Home />);
    const fakeFile = new File(["hello"], "hello.png", { type: "image/png" });

    const input = screen.getByPlaceholderText("upload");
    userEvent.upload(input, fakeFile);
    const btn = screen.getByRole("button", { name: /upload files/i });
    userEvent.click(btn);

    const successText = await screen.findAllByText("success");
    expect(successText).toBe(["success"]);
  });
});
