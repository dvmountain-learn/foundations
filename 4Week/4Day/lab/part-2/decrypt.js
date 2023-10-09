const crypto = require('crypto');

const decipher = crypto.createDecipher('AES-256-CBC');

const key = 'This is my secret key';

const iv = 'This is the IV';

const ciphertext = 'This is the ciphertext';

const decryptedData = decipher.update(ciphertext, 'base64', 'utf8');

console.log(decryptedData);