const express = require('express');
const router = express.Router();
const { getCountries,getCountryCities  } = require('../controller/countryController');
const userAuth = require('../middleware/userAuth');

router.get('/countries', userAuth, getCountries);
router.get('/countries/:countryName/cities', userAuth, getCountryCities);
module.exports = router;
