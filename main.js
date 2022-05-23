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

// wait for the DOM to to be ready so we can attach
document.addEventListener("DOMContentLoaded", function() {
    // get a list of all of the dots on the page
    const dots = document.querySelectorAll(".dot");

    // iterate through each of the dots to attach the click listeners
    dots.forEach(function(dot) {
        //add a click listener
        dot.addEventListener("click", function(e) {
            //prevent the default behavior (pretty standard on clicks)
            e.preventDefault();

            // assess which .dot was actually clicked on
            const clicked_dot = e.target.closest(".dot");

            // if this dot already has an active class
            if (clicked_dot.classList.contains("active")) {
                // remote the active class
                clicked_dot.classList.remove("active");
            } else {
                //otherwise add it 
                clicked_dot.classList.add("active");
            }
        });
    });
});
