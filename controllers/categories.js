const sendAllCategories = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.categoriesArray));
};

const sendCategoryById = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.category));
};

const sendCategoryCreated = (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(req.category));
};

module.exports = { sendAllCategories, sendCategoryById, sendCategoryCreated };
