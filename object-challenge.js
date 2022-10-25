const customerOrder = {
  drinkName: "latte",
  numSugars: 1,
  status: false,
};

console.log(customerOrder.drinkName);

console.log(customerOrder.numSugars);

if (customerOrder.status === true) {
  console.log("Ready for Pick-up!");
} else {
  console.log("Still in order queue!");
}
