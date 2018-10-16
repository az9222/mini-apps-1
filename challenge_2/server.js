const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// import $ from 'jquery';

//point express to client folder and it will automatically start serving up those files (these files in this folder are static assets). Now by default, express will look for a file called index.html and serve that file whenever you browse to the root '/' route
app.use(express.static('./client'));

//function to invoke in middleware to parse our posted data
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded())

app.post('/post', (req, res) => {
    if (!req.body) {
        return res.status(404).send(err);
    } 
    console.log('response', req.body);
    // res.send('response', req.body);
    // res.send('contact-success', {data: req.body});
})


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