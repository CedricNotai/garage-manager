const express = require('express');

const router = express.Router();

// Load Car model
const Car = require('../../models/car');

// @route GET api/cars/test
// @description tests cars route
// @access Public
router.get('/test', (req, res) => res.send('cars route testing!'));

// @route GET api/cars
// @description Get all cars
// @access Public
router.get('/', (req, res) => {
	Car.find()
		.then((cars) => res.json(cars));
});

// @route GET api/cars/:id
// @description Get single car by id
// @access Public
router.get('/:id', (req, res) => {
	Car.findById(req.params.id)
		.then((car) => res.json(car))
		.catch(() => res.status(404).json({ nocarfound: 'No Car found' }));
});

// @route GET api/cars
// @description add/save car
// @access Public
router.post('/', (req, res) => {
	Car.create(req.body)
		.then(() => res.json({ msg: 'Car added successfully' }))
		.catch(() => res.status(400).json({ error: 'Unable to add this car' }));
});

// @route GET api/cars/:id
// @description Update car
// @access Public
router.put('/:id', (req, res) => {
	Car.findByIdAndUpdate(req.params.id, req.body)
		.then(() => res.json({ msg: 'Updated successfully' }))
		.catch(() => res.status(400).json({ error: 'Unable to update the Database' }));
});

// @route GET api/cars/:id
// @description Delete car by id
// @access Public
router.delete('/:id', (req, res) => {
	Car.findByIdAndRemove(req.params.id, req.body)
		.then(() => res.json({ mgs: 'Car deleted successfully' }))
		.catch(() => res.status(404).json({ error: 'No such a car' }));
});

module.exports = router;
