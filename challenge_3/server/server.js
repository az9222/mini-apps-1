//Use Express to serve up an index.html file 
//Use MongoDB or MySQL to store your user data

const express = require('express');
const port = process.env.port || 3000;
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.urlencoded());

app.get('/summary', (req, res) => {
    if (!req.body) {
        return res.status(404).send(err);
    }
    //add here
})

app.listen(port, () => {console.log(`Listening to port ${port}`)})