const { even, Random, Fibanacci, prime } = require("../controller/cal");
const route = require("express").Router();
route.post("/e", even);
route.post("/f", Fibanacci);
route.post("/p", prime);
route.post("/r", Random);
module.exports = route;
