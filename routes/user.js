const router = require("express").Router();
const User = require("./../models/User.model");
const jwt = require("jsonwebtoken");

router.patch("/user/:id", (req, res, next) => {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((newUser) => {
			const user = newUser.toObject();
			delete user.password;
			const newAuthToken = jwt.sign(user, process.env.TOKEN_SECRET, {
				algorithm: "HS256",
				expiresIn: "2d",
			});

			res.status(200).json({ newAuthToken });
		})
		.catch((e) => res.status(500).json({ message: "Error." }));
});

module.exports = router;
