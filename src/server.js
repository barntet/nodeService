const express = require("express");
const { resolve } = require("path");
const { promisify } = require("util");

const server = express();
const port = parseInt(process.env.PORT || "9000");
const pubilcDir = resolve("public");

async function bootstrap() {
  server.use(express.static(pubilcDir));
  await promisify(server.listen.bind(server, port))();
  console.log(`> Started on port ${port}`);
}

bootstrap();
