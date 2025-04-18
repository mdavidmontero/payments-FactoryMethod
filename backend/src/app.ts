import { AppRoutes } from "./presentation/route";
import { Server } from "./presentation/server";
(async () => {
  main();
})();

function main() {
  const server = new Server({
    port: 3001,
    routes: AppRoutes.routes,
  });

  server.start();
}
