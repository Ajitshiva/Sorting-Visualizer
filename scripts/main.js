var a_size = 70;
var a_speed = 4;
var inp_as = document.querySelector("#sizes");
var inp_aspeed = document.querySelector("#speeds");
function changeSize(value) {
  a_size = document.querySelector("#array_size").innerHTML = value;
  inp_as.value = a_size;
}
function changeSpeed(value) {
  a_speed = document.querySelector("#speed").innerHTML = value;
}
let a_generate = document.querySelector(".generate");
let algo_chosen = document.querySelectorAll(".algo button");

var div_sizes = [];
var divs = [];
var margin_size;
var chart = document.querySelector(".chart");

a_generate.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);
function generate_array() {
  chart.innerHTML = "";
  for (let i = 0; i < a_size; i++) {
    var num = 0;
    while (num == 0) {
      num = Math.floor(Math.random() * 0.5 * (150 - 20));
    }
    div_sizes[i] = num;
    divs[i] = document.createElement("div");
    chart.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      "margin: 0%" +
      margin_size +
      "%; background-color: red; width:" +
      (100 / a_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}
window.onload = update_array_size();

for (var i = 0; i < algo_chosen.length; i++) {
  algo_chosen[i].addEventListener("click", runalgo);
}

function disable_buttons() {
  for (var i = 0; i < algo_chosen.length; i++) {
    algo_chosen[i].classList = [];
    algo_chosen[i].classList.add("butt_locked");
    algo_chosen[i].disabled = true;
  }
  inp_as.disabled = true;
  a_generate.disabled = true;
  inp_aspeed.disabled = true;
  a_generate.classList = [];
  a_generate.classList.add("generate_locked");
}

function runalgo() {
  disable_buttons();
  this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble Sort":
      Bubble_sort();
      break;
    case "Selection Sort":
      Selection_sort();
      break;
    case "Insertion Sort":
      Insertion_sort();
      break;
    case "Merge Sort":
      Merge_sort();
      break;
    case "Quick Sort":
      Quick_sort();
      break;
    case "Heap Sort":
      Heap_sort();
      break;
  }
}
