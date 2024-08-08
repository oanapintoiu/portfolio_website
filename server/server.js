const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../'))); 

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('https://api.web3forms.com/submit', {
            ...req.body,
            access_key: process.env.WEB3FORMS_API_KEY
        });
        res.redirect('/redirect-success');
    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            response: error.response ? error.response.data : 'No response data',
            config: error.config
        });
        res.redirect('/redirect-error');
    }
});

// Route for successful redirection
app.get('/redirect-success', (req, res) => {
    res.status(200).send(`
        <html>
            <head>
                <title>Submission Successful</title>
            </head>
            <body>
                <p>Form Submitted Successfully. You will be redirected shortly.</p>
                <script>
                    setTimeout(function() {
                        window.location.href = '/';
                    }, 3000);
                </script>
            </body>
        </html>
    `);
});

// Route for error redirection
app.get('/redirect-error', (req, res) => {
    res.status(500).send(`
        <html>
            <head>
                <title>Error</title>
            </head>
            <body>
                <p>Oops! Something went wrong. Please try again.</p>
                <script>
                    setTimeout(function() {
                        window.history.back();
                    }, 3000);
                </script>
            </body>
        </html>
    `);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
