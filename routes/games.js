const gamesRouter = require("express").Router();

const {
	findAllGames,
	findGameById,
	createGame,
} = require("../middlewares/games");

const {
	sendAllGames,
	sendGameById,
	sendGameCreated,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

module.exports = gamesRouter;
