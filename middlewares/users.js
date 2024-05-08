const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
	req.usersArray = await users.find({});
	next();
};

const findUserById = async (req, res, next) => {
	console.log("GET /users/:id");
	try {
		req.user = await users.findById(req.params.id);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(404).send(JSON.stringify({ message: "User not found" }));
	}
};

const createUser = async (req, res, next) => {
	console.log("POST /users");
	try {
		console.log(req.body);
		req.user = await users.create(req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Error creating user" }));
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

module.exports = { findAllUsers, findUserById, createUser, updateUser };
