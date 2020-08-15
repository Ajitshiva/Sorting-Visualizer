var speed = 1000;
inp_aspeed.addEventListener("input", vis_speed);
var delay_time = 1;
function vis_speed() {
  var array_speed = inp_aspeed.value;
  console.log(array_speed);
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  console.log(speed);
  delay_time = 10000 / (Math.floor(a_size / 10) * speed);
}

var c_delay = 0;

function div_update(chart, height, color) {
  window.setTimeout(function() {
    chart.style =
      "margin:0%" +
      margin_size +
      "%; width:" +
      (100 / a_size - 2 * margin_size) +
      "%; height:" +
      height +
      "%; background-color:" +
      color +
      ";";
  }, (c_delay += delay_time));
}

function enable_buttons() {
  window.setTimeout(function() {
    for (var i = 0; i < algo_chosen.length; i++) {
      algo_chosen[i].classList = [];
      algo_chosen[i].classList.add("butt_unselected");
      algo_chosen[i].disabled = false;
    }
    inp_as.disabled = false;
    a_generate.disabled = false;
    inp_aspeed.disabled = false;
    a_generate.classList = [];
    a_generate.classList.add("generate")
  }, (c_delay += delay_time));
}
