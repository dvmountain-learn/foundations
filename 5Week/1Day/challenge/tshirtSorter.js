
function tshirtSorter(string) {
    string = string.toLowerCase()
    return string.split('').sort().reverse().join('')
}

function tshirtSorted(str) {
    let small = ""
    let medium = ""
    let large = ""
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "s") {
        small += "s"
      } else if (str[i] === "m") {
        medium += "m"
      } else {
        large += "l"
      }
    }
    return small + medium + large
}

console.log(tshirtSorter('lms'))
// sml

console.log(tshirtSorter('smllms'))
// ssmmll