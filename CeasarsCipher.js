function rot13(str) { // LBH QVQ VG!

    let rotStr = "";
    
    for (let i = 0 ; i < str.length; i++) {
        if (str[i].match(/[^A-Z]/g)) {
        rotStr += str[i]
        }    
        else if (str.charCodeAt(i) <= 77) {
        rotStr += str[i].replace(str.charAt(i), String.fromCharCode(str.charAt(i).charCodeAt()+13))
        } else if (str.charCodeAt(i) > 77){    
        rotStr += str[i].replace(str.charAt(i), String.fromCharCode(str.charAt(i).charCodeAt()-13))
        } 
    }
    
    return rotStr    
        }
        
        // Change the inputs below to test
        rot13("SERR PBQR PNZC");