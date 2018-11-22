function checkCashRegister(price, cash, cid) {

  const currencyUnits = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
   
    let change = {
       status: 'OPEN',
       cid: [],
       change: [] 
    };
   
    let changeAmount = cash - price;   
  
    // create immutable cid argument (multi-dimensional array)
    let cidTempArray = cid.map((arr) => {
      return arr.slice();
    });

    // pushing cid argument from function into the change.cid property of our Object
    change.cid = [...cid].reverse().concat(change.cid);
   
    // deduct currencyUnits from the changeAmount while we do have enough cash in drawer
    for (let value in currencyUnits.reverse()) {
      while (Math.round(changeAmount * 100) /100 >= currencyUnits[value][1] && change.cid[value][1] > 0) {
        changeAmount -= currencyUnits[value][1];
        change.cid[value][1] -= currencyUnits[value][1]
      }  
    }
    
    // push the difference between the cash in drawer to the original cid argument to the change.change property
    for (let value in change.cid.reverse()) {
      if (change.cid[value][1] != cidTempArray[value][1] | cidTempArray[value][1] === 0) {
        let changeCurrency = cidTempArray[value][1] - change.cid[value][1]; 
        change.change.push([change.cid[value][0], Math.round(changeCurrency * 100)/100])
      }    
    }
  
    change.change.sort((a, b) => b[1] - a[1])
  
    // change change.status property to the appropriate status
    for (let value in change.status) {
      if (changeAmount > 0) {
        change.status = "INSUFFICIENT_FUNDS"
        change.change = [];
      } else if (change.cid[value][1] === 0) {
        change.status = "CLOSED"
      }
    }  
  
    delete change.cid;  
    // Here is your change, ma'am.
    return change
   }
   
   // Example cash-in-drawer array:
   // [["PENNY", 1.01],
   // ["NICKEL", 2.05],
   // ["DIME", 3.1],
   // ["QUARTER", 4.25],
   // ["ONE", 90],
   // ["FIVE", 55],
   // ["TEN", 20],
   // ["TWENTY", 60],
   // ["ONE HUNDRED", 100]]
   
   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);