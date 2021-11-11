const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

// REGISTER
router.post("/register", async (req, res) => {
	// validation
	const { error } = registerValidation(req.body);
	if (error) return res.status(401).send(error.details[0].message);

	// check if user already exists
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send("User Already Registered");

	// hashing password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// Creating a new user
	const user = new User({
		email: req.body.email,
		password: hashedPassword,
		mis: req.body.mis,
	});

	try {
		const savedUser = await user.save();
		res.status(201).send({ user: user._id });
	} catch (err) {
		res.status(402).send(err);
	}
});

// LOGIN
router.post("/login", async (req, res) => {
	// validation
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// check if user already exists
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(402).send("User not Registered");

	// check if password is correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(401).send("Invalid Password");

	// create and assign a token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header("auth-token", token).status(200).send(token);
});

// get user data using token
router.get("/", async (req, res) => {
	const token = req.header("auth-token");
	if (!token) return res.status(401).send("Access Denied");

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		const user = await User.findById(verified._id);
		res.status(200).send({ user, verified });
	} catch (err) {
		res.status(400).send("Invalid Token");
	}
});

module.exports = router;
