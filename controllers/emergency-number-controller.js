const knex = require("knex")(require("../knexfile"));
const axios = require('axios');

const fetchNumber = async (req, res) => {
    const { countryName } = req.params;

    try {
        const country = await knex('countries')
            .select('ambulance_phone')
            .where('country_name', 'like', `%${countryName}%`)
            .first();

        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }

        res.json({ ambulance_phone: country.ambulance_phone });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const fetchCountries = async (req, res) => {
    try {
        const countries = await knex('countries')
            .select('country_name')
        const countryNames = countries.map(country => country.country_name);
        res.json({ countries: countryNames });
    } catch (error) {
        console.error('Error fetching countries:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { 
    fetchNumber,
    fetchCountries
};