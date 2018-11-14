
function convertToRoman(num) { 
  // store all roman symbols (1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1000 = M)
  
  // console.log(num.toString().length)
  
   const romanNum = {
     "I": 1,
     "VI": 4,
     "V": 5,
     "IX": 9,
     "X": 10,
     "XL": 40,
     "L": 50,
     "XC": 90,
     "C": 100,
     "CD": 400,
     "D": 500,
     "LM": 900,
     "M": 1000
   };
    
    let numArray = [];    
    
  // console.log(Object.values(romanNum))
  
  //   for (let i = 0; i < num; i++) {
      if (Object.values(romanNum).includes(num)) {
          // console.log(num)
          console.log(Object.keys(romanNum).find(key => romanNum[key] === num));        
          return Object.keys(romanNum).find(key => romanNum[key] === num);       
      }
  
  }
  
  convertToRoman(36);