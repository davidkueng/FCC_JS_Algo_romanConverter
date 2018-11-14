function palindrome(str) {

  let cleanString = str.replace(/[_\W]/g, "").toLowerCase();
  
    if (cleanString.split("").reverse().join("") === cleanString) {
      return true
    } return false  
  }
  
  palindrome("eye");