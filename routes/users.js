const usersRouter = require("express").Router();

const {
	findAllUsers,
	findUserById,
	createUser,
} = require("../middlewares/users");

const {
	sendAllUsers,
	sendUserById,
	sendUserCreated,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users:id", findUserById, sendUserById);

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);

module.exports = usersRouter;
