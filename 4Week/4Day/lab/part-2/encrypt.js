const crypto = require('crypto');

const cipher = crypto.createCipher('AES-256-CBC');

const key = 'This is my secret key';

const data = 'This is the data I want to encrypt';

const encryptedData = cipher.update(data, 'utf8', 'base64');

const iv = cipher.iv;

const ciphertext = encryptedData + iv;

console.log(ciphertext);