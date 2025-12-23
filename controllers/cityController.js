const cities = require('../data/cityData');

// Get all cities
exports.getAllCities = (req, res) => {
    res.json(cities);
};

// Get city by ID
exports.getCityById = (req, res) => {
    const id = parseInt(req.params.id);
    const city = cities.find(c => c.id === id);
    if (!city) return res.status(404).json({ message: 'City not found' });
    res.json(city);
};

// Create a new city
exports.createCity = (req, res) => {
    const { name, country } = req.body;
    const newCity = { id: cities.length + 1, name, country };
    cities.push(newCity);
    res.status(201).json(newCity);
};

// Update a city
exports.updateCity = (req, res) => {
    const id = parseInt(req.params.id);
    const city = cities.find(c => c.id === id);
    if (!city) return res.status(404).json({ message: 'City not found' });

    const { name, country } = req.body;
    if (name) city.name = name;
    if (country) city.country = country;

    res.json(city);
};

// Delete a city
exports.deleteCity = (req, res) => {
    const id = parseInt(req.params.id);
    const index = cities.findIndex(c => c.id === id);
    if (index === -1) return res.status(404).json({ message: 'City not found' });

    const deletedCity = cities.splice(index, 1);
    res.json(deletedCity[0]);
};
