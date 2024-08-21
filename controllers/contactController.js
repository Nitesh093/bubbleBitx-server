const Contact = require('../models/contact');

const createContact = async (req, res) => {
    try {
        const { name, email, phoneNumber, subject, message } = req.body;
        const newContact = new Contact({
            name,
            email,
            phoneNumber,
            subject,
            message
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact information submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

module.exports = { createContact };
