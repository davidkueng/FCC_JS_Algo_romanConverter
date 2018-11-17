function telephoneCheck(str) {

    let newStr = str.replace(/^-/, '(').replace(/[^()\d]/g, '');
    
    console.log(newStr)
    
    if (newStr.length === 10 || newStr.length === 11 && newStr[0] === "1" || newStr[1] === '(' && newStr[5] === ')' && newStr[0] === '1' || newStr.length === 12 && newStr[0] === '(' && newStr[4] === ')') {
        return true
      } else {
        return false
      }
    }
    
    telephoneCheck("555-555-5555");