const users = require("../models/user");
const bcrypt = require("bcryptjs");

const findAllUsers = async (req, res, next) => {
	console.log("GET /api/users");
	req.usersArray = await users.find({}, { password: 0 });
	next();
};

const findUserById = async (req, res, next) => {
	console.log("GET /api/users/:id");
	try {
		req.user = await users.findById(req.params.id, { password: 0 });
		next();
	} catch (error) {
		res.status(404).send("User not found");
	}
};
const createUser = async (req, res, next) => {
	console.log("POST /api/users");
	try {
		req.user = await users.create(req.body);
		next();
	} catch (error) {
		res.status(400).send("Error creating user");
	}
};

const updateUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Error updating user" }));
	}
};

const deleteUser = async (req, res, next) => {
	try {
		req.user = await users.findByIdAndDelete(req.params.id);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Error deleting user" }));
	}
};

const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
	if (!req.body.username || !req.body.email || !req.body.password) {
		res.setHeader("Content-Type", "application/json");
		res
			.status(400)
			.send(JSON.stringify({ message: "Enter your name, email and password" }));
	} else {
		next();
	}
};

const checkEmptyNameAndEmail = async (req, res, next) => {
	if (!req.body.username || !req.body.email) {
		res.setHeader("Content-Type", "application/json");
		res
			.status(400)
			.send(JSON.stringify({ message: "Enter your name and email" }));
	} else {
		next();
	}
};

const checkIsUserExists = async (req, res, next) => {
	const isInArray = req.usersArray.find(user => {
		return req.body.email === user.email;
	});
	if (isInArray) {
		res.setHeader("Content-Type", "application/json");
		res
			.status(400)
			.send(JSON.stringify({ message: "User with this email already exists" }));
	} else {
		next();
	}
};

const hashPassword = async (req, res, next) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(req.body.password, salt);
		req.body.password = hash;
		next();
	} catch (error) {
		res.status(400).send({ message: "Password hashing error" });
	}
};

module.exports = {
	findAllUsers,
	findUserById,
	createUser,
	updateUser,
	deleteUser,
	checkEmptyNameAndEmailAndPassword,
	checkEmptyNameAndEmail,
	checkIsUserExists,
	hashPassword,
};
