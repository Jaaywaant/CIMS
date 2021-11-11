const mongoose = require("mongoose");

const attSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	inTime: {
		type: Date,
		required: true,
		min: 6,
		max: 1024,
	},
	mis: {
		type: Number,
		required: true,
	},
	dateRegistered: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Attendence", attSchema);
