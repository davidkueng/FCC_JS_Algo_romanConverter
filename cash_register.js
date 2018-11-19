function checkCashRegister(price, cash, cid) {
  
  const currencyUnits = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["DOLLAR",     1], ["QUARTER", 0.25], ["DIME", 0.1], ["NICKEL", 0.05], ["PENNY", 0.01]];
 
   let change = {
     status: 'OPEN',
     cid: [],
     change: []
   };
 
   let changeAmount = cash - price;
   // console.log(changeAmount)
 
   change.cid = cid.concat(change.cid);  
 
   for (let [key, value] in currencyUnits) {
     while (changeAmount >= currencyUnits[key][1]) {
       change.change.push(currencyUnits[key])
       changeAmount -= currencyUnits[key][1]
     }       
   }
 
   console.log(change.change[0][1] + change.change[1][1])
 
   for (let [key, value] in change.change) {
     // console.log(change.change[key][1])
     change.change[key][1] + change.change[key][1]    
   }
 
 // for (let [key, value] in change.cid) { 
    // change.cid[key][1] = 0
 // }
   
 //  console.log(change)  
 //  console.log(newArray)  
 
   // Here is your change, ma'am.
   // return change;
 }
 
 // deduct changeAmount from the corresponding currency in cid
 // push changeAmount with currency into new array
 // change value of status to OPEN, CLOSED or INSUFFICIENT_FUNDS depending on status of cid
 // return the whole change object without cid
 
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