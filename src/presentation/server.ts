import express, { Router } from "express";
import cors from "cors";
import colors from "colors";

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly routes: Router;
  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }
JJ
  async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(
      cors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      })
    );
    this.app.use(this.routes);

    this.app.listen(this.port, () => {
      console.log(
        colors.cyan.bold(`Servidor corriendo en el puerto ${this.port}`)
      );
    });
  }
}
