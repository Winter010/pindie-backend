const usersRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");
const { sendMe } = require("../controllers/users.js");

const {
	findAllUsers,
	findUserById,
	createUser,
	updateUser,
	deleteUser,
	checkEmptyNameAndEmailAndPassword,
	checkEmptyNameAndEmail,
	checkIsUserExists,
	hashPassword,
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
usersRouter.get("/me", checkAuth, sendMe);

usersRouter.post(
	"/users",
	findAllUsers,
	checkIsUserExists,
	checkEmptyNameAndEmailAndPassword,
	checkAuth,
	hashPassword,
	createUser,
	sendUserCreated
);

usersRouter.put(
	"/users/:id",
	checkEmptyNameAndEmail,
	checkAuth,
	updateUser,
	sendUserUpdated
);

usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
