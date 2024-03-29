// get the container that has all products in it
const allProductCont = document.getElementById("allProductCont");

// get all products
import allProductLists from "./myProducts.js";

// all products strings
let allProductString = "";

//display all products
allProductLists.map(function (singleProduct) {
  allProductString += `<div class="product">
  <div class="productImage">
    <img src="${singleProduct.image}" alt="wristwatch" />
  </div>
  <div class="productDesc">
    <div class="titleCategory">
      <h2 class="productName">${singleProduct.title}</h2>
      <h3 class="productType">${singleProduct.category}</h3>
    </div>
    <div class="priveCart">
      <h3 class="productPrice">$${singleProduct.price}</h3>
      <button class="addCart">
        <svg
          width="35"
          height="34"
          viewBox="0 0 35 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.141724"
            width="34"
            height="34"
            rx="9"
            fill="#1A1F16"
          />
          <path
            d="M24.1259 13.9555C24.0215 13.8505 23.8974 13.7672 23.7606 13.7105C23.6239 13.6538 23.4773 13.6247 23.3292 13.625H21.0792V13.0625C21.0792 12.0182 20.6644 11.0167 19.926 10.2783C19.1875 9.53984 18.186 9.125 17.1417 9.125C16.0974 9.125 15.0959 9.53984 14.3575 10.2783C13.6191 11.0167 13.2042 12.0182 13.2042 13.0625V13.625H10.9542C10.6559 13.625 10.3697 13.7435 10.1587 13.9545C9.94775 14.1655 9.82922 14.4516 9.82922 14.75V22.3438C9.82922 23.7148 10.9894 24.875 12.3605 24.875H21.923C22.5862 24.8752 23.2232 24.6159 23.6977 24.1525C23.9365 23.9247 24.1266 23.6509 24.2566 23.3476C24.3867 23.0442 24.4539 22.7177 24.4542 22.3877V14.75C24.4547 14.6024 24.4259 14.4563 24.3695 14.3199C24.3132 14.1835 24.2304 14.0597 24.1259 13.9555ZM19.3917 19.8125H17.7042V21.5C17.7042 21.6492 17.645 21.7923 17.5395 21.8977C17.434 22.0032 17.2909 22.0625 17.1417 22.0625C16.9925 22.0625 16.8495 22.0032 16.744 21.8977C16.6385 21.7923 16.5792 21.6492 16.5792 21.5V19.8125H14.8917C14.7425 19.8125 14.5995 19.7532 14.494 19.6477C14.3885 19.5423 14.3292 19.3992 14.3292 19.25C14.3292 19.1008 14.3885 18.9577 14.494 18.8523C14.5995 18.7468 14.7425 18.6875 14.8917 18.6875H16.5792V17C16.5792 16.8508 16.6385 16.7077 16.744 16.6023C16.8495 16.4968 16.9925 16.4375 17.1417 16.4375C17.2909 16.4375 17.434 16.4968 17.5395 16.6023C17.645 16.7077 17.7042 16.8508 17.7042 17V18.6875H19.3917C19.5409 18.6875 19.684 18.7468 19.7895 18.8523C19.895 18.9577 19.9542 19.1008 19.9542 19.25C19.9542 19.3992 19.895 19.5423 19.7895 19.6477C19.684 19.7532 19.5409 19.8125 19.3917 19.8125ZM19.9542 13.625H14.3292V13.0625C14.3292 12.3166 14.6255 11.6012 15.153 11.0738C15.6804 10.5463 16.3958 10.25 17.1417 10.25C17.8876 10.25 18.603 10.5463 19.1305 11.0738C19.6579 11.6012 19.9542 12.3166 19.9542 13.0625V13.625Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</div>`;
});

// assign the whole all products string to the all products container element
allProductCont.innerHTML = allProductString;

// to get the current cart count from local storage
const getCartCounter = () => localStorage.getItem("cartCounter");

// set the current cart counter in local storage
const setCartCounter = (newCount) =>
  localStorage.setItem("cartCounter", newCount);

// select all products cart buttons
const allProductsAddToCart = document.getElementsByClassName("addCart");

// loop through all products cart buttons and add an event listener to each button
for (let i = 0; i < allProductsAddToCart.length; i++) {
  allProductsAddToCart[i].addEventListener("click", function () {
    // get current cart counter from local storage
    let getCartCount = getCartCounter();

    // increment cart counter
    getCartCount
      ? setCartCounter(parseInt(getCartCount) + 1)
      : setCartCounter(1);
  });
}
