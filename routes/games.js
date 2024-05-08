const gamesRouter = require("express").Router();

const {
	findAllGames,
	findGameById,
	createGame,
	updateGame,
	deleteGame,
} = require("../middlewares/games");

const {
	sendAllGames,
	sendGameById,
	sendGameCreated,
	sendGameUpdated,
	sendGameDeleted,
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

gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;
