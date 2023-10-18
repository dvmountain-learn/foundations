
// My solution
function sortedByProduct(numbers) {
    let result = []
    let output = []
    // Multiple element with self index
    numbers.forEach((num, index) => {
        result.push(num * (index + 1))
    });
    // Sort array by ascending
    result.sort((a, b) => { return a - b })
    console.log(result)
    // Find element can sqrt or not
    result.forEach(num => {
        let sqrt = Math.sqrt(num)
        if (sqrt % 1 === 0) return output.push(sqrt) 
        return output.push(num)
    })
    return output
}

// Instructor solution


console.log(sortedByProduct([23, 2, 3, 4, 5]))