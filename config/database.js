const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const mongoConnection = process.env.MONGO_CONNECTION;

const connectToDatabase = async () => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(mongoConnection, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Successfully connected to MongoDB');
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

module.exports = connectToDatabase;
