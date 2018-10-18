DROP DATABASE IF EXISTS checkout;
CREATE database checkout;
USE checkout;
CREATE TABLE userinfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameId TEXT,
    email TEXT,
    passwordId TEXT,
    addressLine1 VARCHAR(50),
    addressLine2 VARCHAR(50),
    city VARCHAR(30),
    stateId VARCHAR(2),
    zipCode INT,
    phoneNumber INT,
    creditCardNumber INT,
    expirationDate INT,
    CVV INT
);