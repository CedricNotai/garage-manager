const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
	brandName: { type: String, required: true },
	modelName: { type: String, required: true },
	modelPrice: { type: mongoose.Schema.Types.Decimal128, required: true },
	modelEnergy: { type: String, required: true },
	dateBuy: { type: Date, required: true },
});

module.exports = mongoose.model('Car', carSchema);
