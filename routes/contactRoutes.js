const express = require('express');
const router = express.Router();
const { createContact } = require('../controllers/contactController');

// POST /contact-us
console.log('/api')
router.post('/contact-us', createContact);

module.exports = router;
