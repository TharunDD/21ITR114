const port = 9876;
const cors = require('cors');
const express = require('express');
const parser = require('body-parser');
const route = require('./src/router/Router');
const app = express();
app.use(parser.json());
app.use(cors({
  origin: "http://localhost:9876",
  credentials:  true 
}));
app.use('/numbers', route);
app.get('/route/test', (req, res) => {
  console.log("check");
  res.send("check"); 
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
