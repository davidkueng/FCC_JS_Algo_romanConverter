function rot13(str) { // LBH QVQ VG!

    let rotStr = "";
    
    // console.log(str.charCodeAt(0))
    
    for (let i = 0 ; i < str.length; i++) {
    
        if (str.charCodeAt(i) <= 73) {
        rotStr += str[i].replace(str.charAt(i), String.fromCharCode(str.charAt(i).charCodeAt()                     +13))
        } else if (str.charCodeAt(i) >= 73){    
        rotStr += str[i].replace(str.charAt(i), String.fromCharCode(str.charAt(i).charCodeAt()                     -13))
        // } else if (str.charCodeAt(i) === str.charAt(i).match(/[^A-Z]/)) {
        //  rotStr += str.charCodeAt(i)
    
        }
    }
    
    console.log(rotStr) 
        
        // 65 - 90 (A-Z)
        
        }
        
        // Change the inputs below to test
        rot13("SERR PBQR PNZC");