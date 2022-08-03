//function to change disaplay
function updateQuantity(displayQuantity) {
  let num = document.querySelector(".total-quantity");
  quantity.innerHTML = displayQuantity;
}
let add = document.getElementById("quantity-up");
//add button function
add.addEventListener("click", function () {
  num++;
  updateQuantity(`Quantity: ${num}`);
});

let sub = document.getElementById("quantity-down");
//add button function
sub.addEventListener("click", function () {
  //num not named
  if (num > 0) {
    num--;
  }
  updateQuantity(`Quantity: ${num}`);
});
