const router = require("express").Router();
const protectedRoute = require("../middlewares/PortectedRoutes");

router.get("/", protectedRoute, (req, res, next) => {
	console.log("User id coming from headers: ", req.currentUserId);

	res.send("Server is running... 🏃‍♂️");
});

module.exports = router;
