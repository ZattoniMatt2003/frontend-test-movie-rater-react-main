import { rest } from "msw";
import { movies } from "./fixtures/movies";

export const handlers = [
  // TODO: Task 7 - simulate random error status 500
  rest.get("/movies", (req, res, ctx) =>
    /**
     * ! NOTE TASK 7
     * La risposta andava resa randomicizzata e non statica
     *
     * const fail = Math.random() > 0.5;
     * return fail
     *  ? res(ctx.status(500), ctx.json([]))
     *  : res(ctx.status(200), ctx.json(movies));
     *
     */
    res(ctx.status(500), ctx.json(movies))
  ),

  rest.post("/vote", (req, res, ctx) => res(ctx.status(200))),
];
