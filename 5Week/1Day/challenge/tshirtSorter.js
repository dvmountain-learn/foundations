
function tshirtSorter(string) {
    string = string.toLowerCase()
    let sortedStr = "";  
    for (let i = 0; i < string.length; i++) {  
        for (let j = i + 1; j < string.length; j++) {  
            if (string[j] > string[i]) {  
                const temp = string[i];      
                string[i] = string[j];  
                string[j] = temp;  
            }
        }  

        sortedStr += string[i];  
    }  
    return sortedStr
}

console.log(tshirtSorter('lms'))
// sml

console.log(tshirtSorter('smllms'))
// ssmmll