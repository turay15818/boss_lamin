const express = require("express");
// const userController = require("./Controller/UserController");
const dataDetailsController = require("./Controller/MainAPIController");
const AuthController = require("./Controller/AuthController");

const app = express();
const port = 2401;

app.use(express.json());

// app.use(userController);
app.use(dataDetailsController);
app.use(AuthController);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
