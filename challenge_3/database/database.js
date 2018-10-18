var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1234',
  database: 'checkout'
});

var insertAll = function(nameId, email, passwordId, addressLine1, addressLine2, city, stateId, zipCode, phoneNumber, creditCardNumber, expirationDate, CVV, callback) {
  var query = `INSERT INTO USERINFO (nameId, email, passwordId, addressLine1, addressLine2, city, stateId, zipCode, phoneNumber, creditCardNumber, expirationDate, CVV) VALUES ("${nameId}", "${email}", "${passwordId}", "${addressLine1}", "${addressLine2}", "${city}", "${stateId}", "${zipCode}", "${phoneNumber}", "${creditCardNumber}", "${expirationDate}", "${CVV}")`;
  connection.query(query, [nameId, email, passwordId, addressLine1, addressLine2, city, stateId, zipCode, phoneNumber, creditCardNumber, expirationDate, CVV], (error, results, fields) => {
    callback(error, null);
  });
}

insertAll('a', 'a@gmail.com', '123', () => {
  console.log('test1');
})


module.exports.insertAll = insertAll;