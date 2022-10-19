let item = "Pumpkin";
let price = 10;
let quantity = 2;

let total = price * quantity;

const subtotal = `Your total for ${quantity} ${item}s is $${total}`;
console.log(subtotal);

if (total > 20) {
  console.log("10% discount");
} else {
  console.log("5% discount");
}

// TODO:if the total is over $20, log that they get a 10% discount
// Else, log that they get a 5% discount
