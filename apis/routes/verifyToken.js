const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
	const token = req.headers("auth-token");
	if (!token)
		return res.status(401).json({
			message: "Access denied. No token provided.",
		});
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).json({
			message: "Invalid token.",
		});
	}
};

module.exports = verify;
