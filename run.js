const liveServer = require("live-server");

const params = {
  port: 3333,
  root: "./public",
  open: true,
  wait: 300,
};

liveServer.start(params);
