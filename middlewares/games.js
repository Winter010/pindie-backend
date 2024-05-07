const games = require("../models/game");

const findAllGames = async (req, res, next) => {
	console.log("GET /games");
	req.gamesArray = await games.find({}).populate("categories").populate({
		path: "users",
		select: "-password",
	});
	next();
};

const findGameById = async (req, res, next) => {
	try {
		req.game = await games
			.findById(req.params.id)
			.populate("categories")
			.populate({
				path: "users",
				select: "-password",
			});

		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
	}
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

module.exports = { findAllGames, findGameById, createGame };
