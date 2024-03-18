import express from "express";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import authController from "./6-controllers/auth-controller";
import productsController from "./6-controllers/products-controller";
import forumController from "./6-controllers/forum-controller";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", authController);
server.use("/api", productsController);
server.use("/api", forumController);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));

