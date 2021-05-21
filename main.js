"use strict";

//Intial Variables
let slider = document.getElementById("range");
let price = document.getElementById("price");
let pageViews = document.getElementById("pageviews");
let toggle = document.getElementById("switch");
let fullPrice = document.getElementById("full-price");
let discountPrice = document.getElementById("discount-price");
let toggleWrapper = document.querySelector(".switch-wrapper");

// Data
let cost = [8, 12, 16, 24, 36];
let views = ["10K", "50K", "100K", "500K", "1M"];

//Initial Values on Page Load
price.innerHTML = "16.00";
pageViews.innerHTML = "100K";
slider.value = 3;

toggle.addEventListener("click", () => {
  price.classList.toggle("hidden");
  discountPrice.classList.toggle("hidden");
  toggleWrapper.classList.toggle("active");
});

// Discount
function addDiscount(intialPrice) {
  return intialPrice - (intialPrice * 25) / 100;
}

// Show values when moving the interactive slider
slider.oninput = function () {
  const inputValue = slider.value;
  switch (inputValue) {
    case "1": {
      price.innerHTML = Number(cost[0]).toFixed(2);
      pageViews.innerHTML = "10K";
      discountPrice.innerHTML = addDiscount(cost[0]).toFixed(2);
      break;
    }
    case "2": {
      price.innerHTML = Number(cost[1]).toFixed(2);
      pageViews.innerHTML = "50K";
      discountPrice.innerHTML = addDiscount(cost[1]).toFixed(2);
      break;
    }
    case "3": {
      price.innerHTML = Number(cost[2]).toFixed(2);
      pageViews.innerHTML = "100K";
      discountPrice.innerHTML = addDiscount(cost[2]).toFixed(2);
      break;
    }
    case "4": {
      price.innerHTML = Number(cost[3]).toFixed(2);
      pageViews.innerHTML = "500K";
      discountPrice.innerHTML = addDiscount(cost[3]).toFixed(2);
      break;
    }
    case "5": {
      price.innerHTML = Number(cost[4]).toFixed(2);
      pageViews.innerHTML = "1M";
      discountPrice.innerHTML = addDiscount(cost[4]).toFixed(2);
      break;
    }
  }
};
