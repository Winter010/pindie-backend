const usersRouter = require("express").Router();

const {
	findAllUsers,
	findUserById,
	createUser,
	updateUser,
} = require("../middlewares/users");

const {
	sendAllUsers,
	sendUserById,
	sendUserCreated,
	sendUserUpdated,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users:id", findUserById, sendUserById);

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);

usersRouter.put("/users/:id", updateUser, sendUserUpdated);

module.exports = usersRouter;
