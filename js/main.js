// open & close cart
let cart = document.querySelector(".card");
function openCart() {
  cart.classList.add("active");
}
function closeCart() {
  cart.classList.remove("active");
}
// open menu and cl{ose menu 
let menu = document.querySelector("header .links ul");
function openMenu() {
  menu.classList.add("active");
}
function closeMenu() {
  menu.classList.remove("active");
}
//   add product in cart

let all_prod_json;
let items_incard = document.querySelector(".items-incard");
let prodCart = [];
function addToCart(id, button) {
  prodCart.push(all_prod_json[id]);
  button.classList.add("active");
  getCartItem();
}
let coun_item = document.querySelector(".count-item");
let count_item_cart = document.querySelector(".count_item_cart");
let price_card_total = document.querySelector(".price-card-total");
let price_head = document.querySelector(".price-card-head");
function getCartItem() {
  let totalPrice = 0;

  let items_count = "";
  for (let i = 0; i < prodCart.length; i++) {
    items_count += `<div class="item-card">
          <img src=${prodCart[i].img} alt="" />
          <div class="content">
            <h4>${prodCart[i].name}</h4>
            <p class="price-card">$${prodCart[i].price}</p>
          </div>
          <button onclick="removeCart(${i})" class="delete-item">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>`;
    totalPrice += prodCart[i].price;
  }
  items_incard.innerHTML = items_count;
  price_head.innerHTML = "$" + totalPrice;
  coun_item.innerHTML = prodCart.length;

  count_item_cart.innerHTML = `(${prodCart.length} item in cart)`;
  price_card_total.innerHTML = "$" + totalPrice;
}

function removeCart(index) {
  prodCart.splice(index, 1);
  getCartItem();
  let addToCartButtons = document.querySelectorAll(".fa-cart-plus");

  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active");
    prodCart.forEach((prod) => {
      if (prod.id == i) {
        addToCartButtons[i].classList.add("active");
      }
    });
  }
}

// back to top
let back_to_top = document.querySelector(".back_to_top");

back_to_top.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
