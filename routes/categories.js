const categoriesRouter = require("express").Router();

const {
	findAllCategories,
	createCategory,
} = require("../middlewares/categories");
const {
	sendAllCategories,
	sendCategoryCreated,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);

categoriesRouter.post(
	"/categories",
	findAllCategories,
	createCategory,
	sendCategoryCreated
);

module.exports = categoriesRouter;
