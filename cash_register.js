function checkCashRegister(price, cash, cid) {
  
  let change = {
    status: 'OPEN',
    cid: [],
    change: []
  };

  change.cid = cid.concat(change.cid)

  let changeAmount = cash - price

  console.log(changeAmount)

  // console.log(change)



  // Here is your change, ma'am.
  return change;
}

// make change object with values status: and change:
// push the cash into cid array
// deduct price from cash
// decide whether status: OPEN (if change > changeAmount) or status: INSUFFICIENT_FUNDS (if change < changeAmount) or CLOSED (if all num === 0)
// loop over cid and push change into change: value

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