import express, { Application } from "express";
import cors from "cors";
import helmet from 'helmet'

class App {
  constructor(public app: Application) {
    this.app = app;
    this.appMiddlewares();
  }

  private appMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(helmet());
  }
}

const app = express()
export default new App(app).app;
