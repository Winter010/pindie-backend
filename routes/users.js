const usersRouter = require("express").Router();

const { findAllUsers, createUser } = require("../middlewares/users");
const { sendAllUsers, sendUserCreated } = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);

module.exports = usersRouter;
