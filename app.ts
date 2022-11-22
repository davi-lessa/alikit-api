import express, { ErrorRequestHandler, Express, NextFunction, Request, Response } from "express";
import router from "./src/routes/router";
const port = 3000;

const app: Express = express();

app.use(router);

app.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  console.log("Error middleware", error);
  res.status(500).send("Error");
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
