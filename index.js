var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var getPrice = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var newCartItem = {};
    newCartItem[item] = getPrice(1,100);
    cart.push(newCartItem);
    console.log(`${item} has been added to your cart.`);
    return cart
}

function viewCart() {
  var cartContents = []
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else {

    if (cart.length === 1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`);
      cartContents = []
    }
    else if (cart.length === 2) {
      for (var i = 0; i < cart.length; i++) {
        if (i === cart.length -1) {
          cartContents.push(`and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`)
        }
        else {
          cartContents.push(`In your cart, you have ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
        }
      }
      console.log(...cartContents);
    }
    else {
      cartContents.push("In your cart, you have");
      for (var i = 0; i < cart.length; i++) {
        if (i === cart.length -1) {
          cartContents.push(`and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`)
        }
        else {
          cartContents.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]},`)
        }
      }
      console.log(...cartContents);
    }
  }
  cartContents = []
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
