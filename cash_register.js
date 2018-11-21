function checkCashRegister(price, cash, cid) {
  
  // console.log(cid)

const currencyUnits = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25],                             ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED",                          100]];
 
   let change = {
     status: 'OPEN',
     inDrawer: [],
     change: [] 
   };
 
 // console.log(change.change[1])
 
   let changeArray = [];
 
   let changeAmount = cash - price;   
 
   change.inDrawer = [...cid].reverse().concat(change.inDrawer);

  //  console.log(change.inDrawer);
 
   for (let value in currencyUnits.reverse()) {
    //  console.log(currencyUnits[value][1])
    //  console.log(change.cid[value][1]) 
     while (changeAmount >= currencyUnits[value][1] && change.inDrawer[value][1] !=0) {
       changeArray.push(currencyUnits[value]); 
       changeAmount -= currencyUnits[value][1];
       change.inDrawer[value][1] -= currencyUnits[value][1]
     }  
   }
 
  console.log(cid)
  console.log(change.inDrawer) 
  // console.log(changeArray) 
 
   // Here is your change, ma'am.
   // return change;
 }
 
 // push the difference between cid and changed cid into change.change array
 
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