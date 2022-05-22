function round_number(num) {
  //first, move the decimal two places
  num = num * 100;

  //then, round the number to the nearest integer
  num = Math.round(num);

  //then move the decimal back two places
  num = num / 100;

  // handle trailing zeroes
  num = num.toFixed(2);

  return num;
}

const inputs = document.querySelectorAll("[name='qty']");

inputs.forEach(function (input) {
  input.addEventListener("change", function (e) {
    const this_input = e.target;
    const input_value = parseFloat(this_input.value);
    const this_row = this_input.closest(".row");

    const peapod = this_row.querySelector(".peapod");
    const peapod_price = parseFloat(peapod.dataset.price);
    const peapod_cost = input_value * peapod_price;
    const peapod_span = peapod.querySelector("span");
    peapod_span.innerHTML = round_number(peapod_cost);
    
    peapod.classList.add("active");

  
  });
});
