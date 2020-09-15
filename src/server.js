import { join } from "path";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { App } from "./app";
import template from "./template";
import * as md5 from "md5";

const server = express();

server.get("/", (req, res) => {
  res.send(template({
    body: renderToString(<App/>),
    title: "Hello World from the server"
  }));
});

server.use("/", express.static(join(__dirname, ".")));

server.listen(3000);