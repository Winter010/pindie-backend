const categories = require("../models/category");

const findAllCategories = async (req, res, next) => {
	console.log("GET /categories");
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

const checkIsCategoryExists = async (req, res, next) => {
	const isInArray = req.categoriesArray.find(category => {
		return req.body.name === category.name;
	});
	if (isInArray) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(
			JSON.stringify({
				message: "Category with this name already exists",
			})
		);
	} else {
		next();
	}
};

const checkEmptyName = async (req, res, next) => {
	if (!req.body.name) {
		res.setHeader("Content-Type", "application/json");
		res.status(400).send(JSON.stringify({ message: "Enter category name" }));
	} else {
		next();
	}
};

const checkIfCategoriesAvaliable = async (req, res, next) => {
	if (!req.body.categories || req.body.categories.length === 0) {
		res.setHeader("Content-Type", "application/json");
		res
			.status(400)
			.send(JSON.stringify({ message: "Select at least one category" }));
	} else {
		next();
	}
};

module.exports = {
	findAllCategories,
	findCategoryById,
	createCategory,
	updateCategory,
	deleteCategory,
	checkIsCategoryExists,
	checkEmptyName,
	checkIfCategoriesAvaliable,
};
