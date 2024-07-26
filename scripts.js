var r = 12; //rate of interest
const p = 50000; //principal amount
const n = 3; //time in years
var i = p * (((1 + (r/100))**n) - 1); //interest formula
console.log("Interest for", n, "years at", r, "% per annum is ₹", i.toFixed(2)); //upto two decimal places