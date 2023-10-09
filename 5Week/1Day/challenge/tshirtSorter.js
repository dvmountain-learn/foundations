
function tshirtSorter(string) {
    string = string.toLowerCase()
    return string.split('').sort().reverse().join('')
}

console.log(tshirtSorter('lms'))
// sml

console.log(tshirtSorter('smllms'))
// ssmmll