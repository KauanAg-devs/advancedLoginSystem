import app from "../app/app";
const port = process.env.PORT || '3000';

class Server {
  constructor() {}

  startServer() {
    app.listen(port, () => {
      console.log(`server listening at PORT ${port}`);
    });
  }
}

new Server().startServer()
