const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const rotas = require("./rotas");

const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(rotas);

app.listen(port, console.log(`Server running on port ${port}`));