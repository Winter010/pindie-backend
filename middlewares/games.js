const games = require("../models/game");

const findAllGames = async (req, res, next) => {
	req.gamesArray = await games
		.find({})
		.populate("categories")
		.populate("users");
	next();
};

const createGame = async (req, res, next) => {
	console.log("POST /games");
	try {
		console.log(req.body);
		req.game = await games.create(req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Error creating game" }));
	}
};

module.exports = { findAllGames, createGame };
