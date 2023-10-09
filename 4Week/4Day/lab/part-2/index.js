
var decrypted = CryptoJS.AES.decrypt({"I love cryptography!":encrypted_data}, key128Bits500Iterations, options);

console.log(decrypted)