const gamesRouter = require("express").Router();

const {
	findAllGames,
	findGameById,
	createGame,
	updateGame,
} = require("../middlewares/games");

const {
	sendAllGames,
	sendGameById,
	sendGameCreated,
	sendGameUpdated,
} = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.put(
	"/games/:id",
	findGameById,
	// Шаг 2. Проверки, если нужны
	updateGame,
	sendGameUpdated
);

module.exports = gamesRouter;
