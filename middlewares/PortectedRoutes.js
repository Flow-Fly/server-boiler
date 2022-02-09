const getId = (req, res, next) => {
	if (req.headers.authorization && req.headers.authorization.split(" ")[0]) {
		req.currentUserId = req.headers.authorization.split(" ")[1];
		next();
	}
	next("Not allowed");
};

module.exports = getId;
