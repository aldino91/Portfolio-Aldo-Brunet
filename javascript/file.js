let griditem = document.querySelector(".griditem");
let griditem1 = document.querySelector(".griditem1");
let griditem2 = document.querySelector(".griditem2");
let griditem3 = document.querySelector(".griditem3");
let griditem4 = document.querySelector(".griditem4");
let griditem5 = document.querySelector(".griditem5");
let modal = document.querySelector(".modal");

let containergrid = document.querySelector(".gridcontainer");
let grid1 = document.querySelector(".grid1");
let grid = [griditem, griditem1, griditem2, griditem3, griditem4, griditem5];

let viaggi = [
  "Granada",
  "Formentera",
  "Canarias",
  "Miami",
  "Finlandia",
  "Srilanka",
];
let text = "";

for (let i = 0; i < viaggi.length; i++) {
  text += "<div>" + viaggi[i] + "</div>";
}

grid1.innerHTML = text;
/* griditem.onclick = () => {
  modal.innerHTML = "funziona";
  modal.style.color = "red";
};

griditem1.onclick = () => {
  modal.innerHTML = "funziona1";
};

griditem2.onclick = () => {
  modal.innerHTML = "funziona2";
};

griditem3.onclick = () => {
  modal.innerHTML = "funziona3";
};
griditem4.onclick = () => {
  modal.innerHTML = "funziona4";
};
griditem5.onclick = () => {
  modal.innerHTML = "funziona5";
}; */
