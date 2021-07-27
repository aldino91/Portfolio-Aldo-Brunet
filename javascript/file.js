"use strict";

let griditem = document.querySelector(".griditem");
let griditem1 = document.querySelector(".griditem1");
let griditem2 = document.querySelector(".griditem2");
let griditem3 = document.querySelector(".griditem3");
let griditem4 = document.querySelector(".griditem4");
let griditem5 = document.querySelector(".griditem5");
let modal = document.querySelector(".modal");
let modal1 = document.querySelector(".modal1");
let modal2 = document.querySelector(".modal2");
let modal3 = document.querySelector(".modal3");
let modal4 = document.querySelector(".modal4");
let modal5 = document.querySelector(".modal5");
let close = document.querySelector(".close");
let close1 = document.querySelector(".close1");
let close2 = document.querySelector(".close2");
let close3 = document.querySelector(".close3");
let close4 = document.querySelector(".close4");
let close5 = document.querySelector(".close5");
let layout = document.querySelector(".layout");
let gotoup = document.querySelector(".gotoup");

griditem.onclick = () => {
  modal.style.display = "block";
};

griditem1.onclick = () => {
  modal1.style.display = "block";
};
griditem2.onclick = () => {
  modal2.style.display = "block";
};
griditem3.onclick = () => {
  modal3.style.display = "block";
};
griditem4.onclick = () => {
  modal4.style.display = "block";
};
griditem5.onclick = () => {
  modal5.style.display = "block";
};

close.onclick = () => {
  modal.style.display = "none";
};

close1.onclick = () => {
  modal1.style.display = "none";
};

close2.onclick = () => {
  modal2.style.display = "none";
};

close3.onclick = () => {
  modal3.style.display = "none";
};

close4.onclick = () => {
  modal4.style.display = "none";
};

close5.onclick = () => {
  modal5.style.display = "none";
};

window.onscroll = () => {
  gotoup.onclick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
};
