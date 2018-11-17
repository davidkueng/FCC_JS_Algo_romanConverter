function telephoneCheck(str) {
    // Good luck!
  // remove all special characters, whitespace and negative numbers except () 
  // check if === 555 555 5555 or 1(must be 1) 555 555 5555
  
  let newStr = str.replace(/[^()\d]/g, '');
  
  if (newStr.length === 10 || newStr.length === 11 && newStr[0] === "1") {
      return true
    } else {
      return false
    }
  
  }
  
  telephoneCheck("555-555-5555");