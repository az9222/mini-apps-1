var convertJSONObjToCSV = function(jsonObj) {
  var csvString = "";
  var obj = JSON.parse(jsonObj)
  var keys = Object.keys(obj);
  for(var i = 0; i < keys.length; i++) {
    var property = keys[i];
    if(property !== "children") {
      csvString += property;
      if(i != keys.length - 2) {
        csvString += ","
      } 
    }
  }
  csvString += "\n";
  function recurse(obj) {
    var keys = Object.keys(obj);
    for(var i = 0; i < keys.length; i++) {
      var prop = keys[i]
      if(prop != "children") {
        csvString += obj[prop]
        if(i != keys.length - 2) {
          csvString += ","
        }
      }
    }
    csvString += "\n"
    for(var i = 0; i < obj.children.length; i++) {
        var child = obj.children[i]
        recurse(child)
    }
  }
  recurse(obj)
  return csvString
}

function testFunc(obj) {
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Convert JSON to CSV!</title>
      </head>
      <body>
        <h1>Convert JSON to CSV</h1>
        <div class="submit-div">
        <form method="POST" action="/post">
          <input class="input-bar" type="text" name="JSON DATA" placeholder="JSON data">
          <input type="submit" value="Submit">
        </form>
      </div>
      <div class="response-container">
        <span id="converted">CSV data: ${convertJSONObjToCSV(obj)} </span>
      </div>
    </body>
    <style>
    .response-container {
        width: 500px;
        height: 700px;
        margin-top: 20px;
        padding: 20px;
        border: 1px solid black;
    }

    .input-bar {
        height: 100px;
        width: 500px;
    }
    </style>
</html>`
}

module.exports.testFunc = testFunc