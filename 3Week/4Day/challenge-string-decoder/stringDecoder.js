
function decoder(code) {
    let result = ''
    for (let i = 0; i < code.length; i++) {
        if (!isNaN(+code[i])) {
            i += +code[i]
        } else {
            result += code[i]
        }
    }
    return result
}

console.log(decoder('0h2xce5ngbrdy'))