var express = require('express');
var app = express();
const port = 3000;
// var path = require('path');

//point express to client folder and it will automatically start serving up those files (these files in this folder are static assets). Now by default, express will look for a file called index.html and serve that file whenever you browse to the root '/' route
app.use(express.static('./client'));

//Example Express Route: `app.post('/upload_json', (req, res) => { ... })`
// HTML Form: `<form method="POST" action="/upload_json"></form>`
// app.get('/', (req, res) => {
//     res.sendFile(express);
// })

//submitting data via ajax:
//initiate an ajax request to a url on your server
// Express Route: `app.post('/upload_json', (req, res) => { ... })`
// AJAX Method: `$.ajax({method: 'POST', url: '/upload_json', ... })`

//prevent page reload
// $('form').on('submit', function(e){
//     e.preventDefault();
//     // ... more event handler code here
//   });

//listen to a port
app.listen(port, () => {console.log('listening to port', port)});