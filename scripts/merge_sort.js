function Merge_sort() {
  c_delay = 0;
  mergeSort(0, a_size - 1);

  enable_buttons();
}

function merge(start, mid, end) {
  var p = start,
    q = mid + 1;
  var temp = [];
  var k = 0;
  for (var i = start; i <= end; i++) {
    if (p > mid) {
      temp[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "yellpw");
    } else if (q > end) {
      temp[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "yellow");
    } else if (div_sizes[p] < div_sizes[q]) {
      temp[k++] = div_sizes[p++];
      div_update(divs[p - 1], div_sizes[p - 1], "yellow");
    } else {
      temp[k++] = div_sizes[q++];
      div_update(divs[q - 1], div_sizes[q - 1], "yellow");
    }
  }

  for (var t = 0; t < k; t++) {
    div_sizes[start++] = temp[t];
    div_update(divs[start - 1], div_sizes[start - 1], "green");
  }
}

function mergeSort(start, end) {
  if (start < end) {
    var mid = Math.floor(start + (end - start) / 2);
    // console.log(start, mid, end);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);

    merge(start, mid, end);
  }
}
