// get handles
const countNumber = document.querySelector(".count-number");
const btnContainer = document.querySelector(".btn-container");

// increase function
const increase = () => {
  // unary + operator convert the string into number
  +countNumber.innerHTML++;

  // change color if number is greater than 0
  if (+countNumber.innerHTML > 0) {
    countNumber.style.color = "green";
  }
};

// decrease function
const decrease = () => {
  +countNumber.innerHTML--;
  if (+countNumber.innerHTML < 0) {
    countNumber.style.color = "red";
  }
};

// reset function
const reset = () => {
  countNumber.innerHTML = 0;
  countNumber.style.color = "#102a42";
};

// handle operations
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
