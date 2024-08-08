const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('https://api.web3forms.com/submit', {
            ...req.body,
            access_key: process.env.WEB3FORMS_API_KEY
        });
        res.status(200).send('Form Submitted Successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Oops! Something went wrong, please try again.');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
