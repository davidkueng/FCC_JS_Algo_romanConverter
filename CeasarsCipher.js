function rot13(str) { // LBH QVQ VG!

    let rotStr = "";
   
   for (let i = 0 ; i < str.length; i++) {
       
       rotStr += str[i].replace(str.charAt(i), String.fromCharCode(str.charAt(i).charCodeAt()                     +13))
   }
   
   console.log(rotStr)  
       
       
       // 65 - 90 (A-Z)
       
       }
       
       // Change the inputs below to test
       rot13("SERR PBQR PNZC");