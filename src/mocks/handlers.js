import { rest } from "msw";

export const handlers = [
  rest.post("http://localhost:3030/upload", (req, res, ctx) => {
    return res(ctx.json("success"));
  }),
];
