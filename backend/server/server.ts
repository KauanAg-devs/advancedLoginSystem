import { NextFunction, Request, Response } from "express";
import app from "../app/app";
const port = process.env.PORT || "3000";

class Server {
  constructor() {
    this.errorHandler();
    this.startServer();
  }

  private errorHandler() {
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(error)
    });
  }

  startServer() {
    app.listen(port, () => {
      console.log(`server listening at PORT ${port}`);
    });
  }
}

new Server();
