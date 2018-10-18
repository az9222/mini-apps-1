//Use Express to serve up an index.html file 
//Use MongoDB or MySQL to store your user data

const express = require('express');
const port = process.env.port || 3000;
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/database');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
    if (!req.body) {
        return res.status(404).send(err);
    }
    //take the responses from the request.body() which is a json of keys of name, password etc. then we insert into database using db.insertAll. Then, send back 201 status code.
    const {nameId, email, passwordId, addressLine1, addressLine2, city, stateId, zipCode, phoneNumber, creditCardNumber, expirationDate, CVV} = req.body; //destructuring which grabs the values and assigns variables to them
    db.insertAll(nameId, email, passwordId, addressLine1, addressLine2, city, stateId, zipCode, phoneNumber, creditCardNumber, expirationDate, CVV, (error, results) => {
        if (error) {
            res.status(404).send(error);
        } else {
           res.status(201).send(results);
        }
    });
});

app.listen(port, () => {console.log(`Listening to port ${port}`)})