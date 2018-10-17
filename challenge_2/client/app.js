//build client app here. The client app should be able to submit JSON data to server, receive a response containing a CSV formatted result

function testFunc(csv) {
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
        <span id="converted">Converted data: ${csv} </span>
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

// export default testFunc;
module.exports.testFunc = testFunc