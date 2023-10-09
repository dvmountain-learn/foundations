const generateCaesarCipher = (shift, plaintextAlphabet) => {};

module.exports = {
  generateCaesarCipher,
};

const cipherAlphabet = plaintextAlphabet.map((_symbol, index) => {
    const newIndex = (index + shift) % plaintextAlphabet.length;
    return plaintextAlphabet[newIndex];
  });
  


const encipher = (message) => {
    return message
      .toLowerCase()
      .split('')
      .map((symbol) => {
        const index = plaintextAlphabet.indexOf(symbol);
        return cipherAlphabet[index];
      })
      .join('');
};
  
const decipher = (message) => {
    return message
      .toLowerCase()
      .split('')
      .map((symbol) => {
        const index = cipherAlphabet.indexOf(symbol);
        return plaintextAlphabet[index];
      })
      .join('');
};

return { encipher, decipher };
