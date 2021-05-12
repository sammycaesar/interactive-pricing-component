"use strict";

//Intial Variables
let slider = document.getElementById("range");
let price = document.getElementById("price");
let pageViews = document.getElementById("pageviews");
const discount = 0.25;

// Data
let data = [
  { pageViews: 10, price: 8 },
  { pageViews: 50, price: 12 },
  { pageViews: 100, price: 16 },
  { pageViews: 100, price: 16 },
  { pageViews: 500, price: 24 },
  { pageViews: 1, price: 36 },
];
