//Use Express to serve up an index.html file 
//Use MongoDB or MySQL to store your user data

const express = require('express');
const port = process.env.port || 3000;
const app = express();

app.use(express.static('./index.html'));

app.listen(port, () => {console.log(`Listening to port ${port}`)})