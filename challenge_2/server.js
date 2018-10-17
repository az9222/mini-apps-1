const express = require('express');
const app = express();
const port = process.env.port || 3000;
const bodyParser = require('body-parser');
const testFunc = require('./client/app.js');

//point express to client folder and it will automatically start serving up those files (these files in this folder are static assets). Now by default, express will look for a file called index.html and serve that file whenever you browse to the root '/' route
app.use(express.static('./client'));

//function to invoke in middleware to parse our posted data. The data we get from forms is url data so we parse it. 
app.use(bodyParser.urlencoded())

app.post('/post', (req, res) => {
    if (!req.body) {
        return res.status(404).send(err);
    } 
    // return res.send(results);
    console.log('response', req.body);
    res.send(testFunc.testFunc(req.body['JSON DATA'])); 
});

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