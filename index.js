function isPalindrome(word) {
  // Write your algorithm here
  /*
    Algorithm:
    Take the input string-type parameter and create a new parameter with
    backwards string letter order data within it based on the orginal input parameter.
    compare the two strings data saved within these two parameter.
    If they are equal, return true.
    If they are not equal, return false.
  */
    const originalArray = Array.from(word)
    const reverseArray = []
    originalArray.forEach(reverseArrayElement)
    function reverseArrayElement(element){
      reverseArray.unshift(element)
    }
    const newWord = reverseArray.join('')
    if(word === newWord){
      return true
    }else{
      return false
    }
}

/* 
  Add your pseudocode here:
    convert input string parameter to an array using Array.from() method
    using forEach() to create a new array with element in backward index order
    convert the backward order array back to string using array.join() method
    compare the original input parameter's string to the new backward string
    if(original string === new backward string){
      return true
    }else{
      return false
    }
*/
  

/*
  Add written explanation of your solution here:
    My solution procedure is to take the input data and create its reverse order parameter
    with same data type. Then we can compare the two string-type parameter, and the result 
    of my function is either true or false based on the comparison results.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //expect input "madam" to have a "true" output
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
