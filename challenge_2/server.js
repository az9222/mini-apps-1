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
    console.log('response', req.body);
    res.send(testFunc.testFunc(req.body['JSON DATA'])); 
});

//ajax call alternative
// $( "#userForm" ).submit(function( event ) {
//     // Stop form from submitting normally
//     event.preventDefault();
//     // Get some values from elements on the page:
//     var $form = $( this ),
//       username = $form.find( "input[name='username']" ).val(),
//       url = "https://api.github.com/users/"+username+"/repos";
//     // Send the data using post
//     var posting = $.post( url, { s: term } );
//     //Ajax Function to send a get request
//     $.ajax({
//       type: "GET",
//       url: url,
//       dataType:"jsonp"
//       success: function(response){
//           //if request if made successfully then the response represent the data
//           $( "#result" ).empty().append( response );
//       }
//     });
// });
    
app.listen(port, () => {console.log(`listening to port ${port}...`)});