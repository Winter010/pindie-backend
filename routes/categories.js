const categoriesRouter = require("express").Router();

const {
	findAllCategories,
	findCategoryById,
	createCategory,
	updateCategory,
} = require("../middlewares/categories");

const {
	sendAllCategories,
	sendCategoryById,
	sendCategoryCreated,
	sendCategoryUpdated,
} = require("../controllers/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);

categoriesRouter.post(
	"/categories",
	findAllCategories,
	createCategory,
	sendCategoryCreated
);

categoriesRouter.put("/categories/:id", updateCategory, sendCategoryUpdated);

module.exports = categoriesRouter;
