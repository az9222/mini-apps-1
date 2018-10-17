const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
//import the function from app.js

//point express to client folder and it will automatically start serving up those files (these files in this folder are static assets). Now by default, express will look for a file called index.html and serve that file whenever you browse to the root '/' route
app.use(express.static('./client'));

//function to invoke in middleware to parse our posted data
app.use(bodyParser.urlencoded())
// parse application/json
// app.use(bodyParser.text())

app.post('/post', (req, res) => {
    if (!req.body) {
        return res.status(404).send(err);
    } 
    // return res.send(results);
    console.log('response', req.body);
    //take the req.body, pass it as input into the function and then res.send back
})

app.post('/', (req, res) )

// var searchYouTube = (options, callback) => {
//     $.ajax ({
//       url: 'https://www.googleapis.com/youtube/v3/search',
//       type: 'GET',
//       data: {
//         part: 'snippet',
//         type: 'video',
//         q: options.query,
//         maxResults: options.max,
//         key: options.key
//       },
//       contentType: 'application/json'
//     }).done((response) => {
//       callback(response.items);
//     })
//   };

app.listen(port, () => {console.log(`listening to port ${port}...`)});