
function convertToRoman(num) { 

  const romanNumArr = {
     "M": 1000,
     "CM": 900,
     "D": 500,
     "CD": 400,
     "C": 100,
     "XC": 90,
     "L": 50,
     "XL": 40,
     "X": 10,
     "IX": 9,
     "V": 5,
     "IV": 4,
     "I": 1
  };
   
   let romanNum = "";    
 
   for (let i = 0; i < Object.values(romanNumArr).length; i++) {
     while (Object.values(romanNumArr)[i] <= num) {
         romanNum += Object.keys(romanNumArr)[i];
         num -= Object.values(romanNumArr)[i]          
     }
   }
 
 return romanNum
 }
 
 convertToRoman(36);