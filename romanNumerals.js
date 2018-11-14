
function convertToRoman(num) { 
  // store all roman symbols (1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1000 = M)

 const romanNum = {
   "I": 1,
   "V": 5,
   "X": 10,
   "L": 50,
   "C": 100,
   "D": 500,
   "M": 1000
 };
  
  // array with the numbers making a num: 36 = (10, 10, 10, 5, 1), 68 = (50, 10, 5, 1, 1, 1)
  
  let numArray = [];    
  
  for (let i = 0; i < num; i++) {
    
  }
  
  // 1. num / RomanNumValue which is smaller or equal to num
  // 2. deduct the result times (rounded down) of the RomanNumValue from num
  // 3. push the RomanNumValue x result times into numArray
  // 4. start from 1. again with new result.
  
  
  // join the newArray to build the roman number with the stored symbols. loop over romanNum and push key into new array if ===
  // turn array into string with roman numbers
  
  
  
  
 return num ;
}

convertToRoman(36);