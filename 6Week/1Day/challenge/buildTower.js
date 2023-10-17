function towerBuilder(floors) {
  const tower = [];
  // Make a variable called tower equal to an empty array, this is what we'll be returning at the end.

  let star = '*';
  // Make a variable called star equal to a string with just the star symbol in it, we are going to add stars to this as we loop.

  for(let i = 0; i < floors; i++){ 
    // We usually loop over the lenght of arrays, but in this case we're just looping until i is greater than the floors parameter.

    tower.push(star)
    // Every time we loop, we are going to push the star variable into the tower. This will create a separate floor.

    star += "**";
    // Now we need to add 2 stars to the star variable to prepare it to be pushed in the next loop.

    for (let j = 0; j < i; j++){
      // In this nested for loop, we are going to run the following code as long as j is less than i. This staggers the loop, so when i = 0 it won't run since j would also equal 0.

      tower[j] = ' ' + tower[j] + ' '
      // This code is what keeps the length of each floor the same despite the amount of stars it has. We are accessing the floor we created on the previous loop, and adding a space to each side of it.
    }
  }
  return tower
}

console.log(towerBuilder(6))