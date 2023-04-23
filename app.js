const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const cors = require('cors');
const connectToDatabase = require('./config/database');
const cars = require('./routes/api/cars');

const app = express();
const port = process.env.PORT || 8093;

connectToDatabase();

// cors
app.use(cors({
	origin: true,
	credentials: true,
}));

// allows Express to read data sent using a POST or PUT request
app.use(express.json({
	extended: false,
}));

app.get('/', (req, res) => {
	res.send('Hello World');
});

// use Routes
app.use('/api/cars', cars);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
