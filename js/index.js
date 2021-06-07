// get handles
const countNumber = document.querySelector(".count-number");
const btnContainer = document.querySelector(".btn-container");

// increase function
const increase = () => +countNumber.innerHTML++;

// decrease function
const decrease = () => +countNumber.innerHTML--;

// reset function
const reset = () => (countNumber.innerHTML = 0);

// handle operation
function count(e) {
  let id = e.target.id;
  switch (id) {
    case "btn-dec":
      decrease();
      break;
    case "btn-inc":
      increase();
      break;
    case "btn-reset":
      reset();
      break;
  }
}

// listen to the event
btnContainer.addEventListener("click", count);
