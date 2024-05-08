const categories = require("../models/category");

const findAllCategories = async (req, res, next) => {
	req.categoriesArray = await categories.find({});
	next();
};

const findCategoryById = async (req, res, next) => {
	console.log("GET /categories/:id");
	try {
		req.category = await categories.findById(req.params.id);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res.status(404).send(JSON.stringify({ message: "Category not found" }));
	}
};

const createCategory = async (req, res, next) => {
	console.log("POST /categories");
	try {
		console.log(req.body);
		req.category = await categories.create(req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res
			.status(400)
			.send(JSON.stringify({ message: "Error creating category" }));
	}
};

const updateCategory = async (req, res, next) => {
	try {
		req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res
			.status(400)
			.send(JSON.stringify({ message: "Error updating category" }));
	}
};

const deleteCategory = async (req, res, next) => {
	try {
		req.game = await games.findByIdAndDelete(req.params.id);
		next();
	} catch (error) {
		res.setHeader("Content-Type", "application/json");
		res
			.status(400)
			.send(JSON.stringify({ message: "Error deleting category" }));
	}
};

module.exports = {
	findAllCategories,
	findCategoryById,
	createCategory,
	updateCategory,
	deleteCategory,
};
