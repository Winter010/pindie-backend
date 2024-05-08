const usersRouter = require("express").Router();

const {
	findAllUsers,
	findUserById,
	createUser,
	updateUser,
	deleteUser,
} = require("../middlewares/users");

const {
	sendAllUsers,
	sendUserById,
	sendUserCreated,
	sendUserUpdated,
	sendUserDeleted,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users:id", findUserById, sendUserById);

usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);

usersRouter.put("/users/:id", updateUser, sendUserUpdated);

usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
