function recursiveSearch(arr, target) {
  // type your code here
  return search(arr, target)
}

let search = (arr, target) => {
  for (const val of arr) {
    if (val === target) {
      return true
    }
  }
  return false
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
