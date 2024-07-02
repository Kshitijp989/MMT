const countries = require('../utile/countries');

const getCountries = (req, res) => {
    console.log("here")
  res.json(countries.map(country => country.country));
};
const getCountryCities = (req, res) => {
    const { countryName } = req.params;
    const country = countries.find(country => country.country.toLowerCase() === countryName.toLowerCase());

    if (!country) {
        return res.status(404).json({ message: `Country '${countryName}' not found.` });
    }

    res.json(country.cities);
};
module.exports = {
  getCountries,
  getCountryCities,
};
