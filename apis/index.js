const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
	console.log("Connected to DB");
});

//Import Routes
const authRoute = require("./routes/auth");

// CORS Resolution
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-type, Accept, X-Custom-Information, Authorization, auth-token",
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});

//Middleware
app.use(express.json());

//Route Middleware
app.use("/api/user", authRoute);

app.listen(8000, () => {
	console.log("Server is running on port 8000");
});
