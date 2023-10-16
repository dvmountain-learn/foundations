
function findOutlier(num) {
    let evens = []
    let odds = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) evens.push(num[i])
        else odds.push(num[i])
    }
    return evens.length < 2 ? evens.join(''): odds.join('')
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
