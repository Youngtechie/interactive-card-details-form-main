let Username = "";
let number = "";
let month = "";
let year = "";
let cvc = "";

const form = document.querySelector("form");
form.addEventListener("submit", confirm);

function WorkOnName() {
  const input = document.querySelector("#Cardholder");
  const error = document.querySelector(".errorName");
  const inputValue = input.value;
  const arr = inputValue.split("");
  const arrCheck = [];
  arr.map((a) => {
    arrCheck.push(parseInt(a));
  });
  const isStringsArray = arrCheck.every((a) => isNaN(a));

  if (arr.length < 1) {
    Username = "JANE APPLESEED";
  } else if (!isStringsArray) {
    input.style.border = "1px solid hsl(0, 100%, 66%)";
    error.innerHTML = "Input valid Card Name";
    Username = "JANE APPLESEED";
  } else {
    Username = inputValue.trim();
    input.style.border = "1px solid hsl(270, 3%, 87%)";
    error.innerHTML = "";
  }
  const toplace = document.querySelector(".toPlacedName");
  toplace.innerHTML = Username;
}

function WorkOnNumber() {
  const input = document.querySelector("#CardNumber");
  const inputValue = input.value;
  const error = document.querySelector(".errorNumber");
  const arr = inputValue.split("");

  if (arr.length > 16 || arr.length < 16) {
    number = "0000 0000 0000 0000";
    input.style.border = "1px solid hsl(0, 100%, 66%)";
    error.innerHTML = "Input valid Card Number of 16 digits";
  } else {
    const result = inputValue.match(/.{1,4}/g) || [];
    number = result.join(" ");
    input.style.border = "1px solid hsl(270, 3%, 87%)";
    error.innerHTML = "";
  }

  const toplace = document.querySelector(".toPlacedNumber");
  toplace.innerHTML = number;
}

function WorkOnMonth() {
  const input = document.querySelector("#DateM");
  const inputValue = input.value;
  const error = document.querySelector(".errorM");
  const arr = inputValue.split("");
  if (arr.length > 2 || Number(inputValue) > 12) {
    month = "00";
    input.style.border = "1px solid hsl(0, 100%, 66%)";
    error.innerHTML = "Input valid month";
  } else {
    if (arr.length === 1) {
      month = "0" + inputValue;
    } else {
      month = inputValue;
    }
    input.style.border = "1px solid hsl(270, 3%, 87%)";
    error.innerHTML = "";
  }
  const toplace = document.querySelector(".toPlacedMonth");
  toplace.innerHTML = month;
}

function WorkOnYear() {
  const input = document.querySelector("#DateY");
  const inputValue = input.value;
  const error = document.querySelector(".errorY");
  const arr = inputValue.split("");
  if (arr.length > 4 || arr.length === 3 || arr.length < 1) {
    year = "00";
    input.style.border = "1px solid hsl(0, 100%, 66%)";
    error.innerHTML = "Input valid year";
  } else {
    if (arr.length === 1) {
      year = "0" + inputValue;
    } else if (arr.length === 4) {
      year = `${arr[2]}` + `${arr[3]}`;
    } else {
      year = inputValue;
    }
    input.style.border = "1px solid hsl(270, 3%, 87%)";
    error.innerHTML = "";
  }

  const toplace = document.querySelector(".toPlacedYear");
  toplace.innerHTML = year;
}

function WorkOnCvc() {
  const input = document.querySelector("#cvc");
  const inputValue = input.value;
  const error = document.querySelector(".errorCvc");
  const arr = inputValue.split("");
  if (arr.length !== 3) {
    cvc = "000";
    input.style.border = "1px solid hsl(0, 100%, 66%)";
    error.innerHTML = "3 digits required";
  } else {
    cvc = inputValue;
    input.style.border = "1px solid hsl(270, 3%, 87%)";
    error.innerHTML = "";
  }
  const toplace = document.querySelector(".toPlacedCvc");
  toplace.innerHTML = cvc;
}

function added() {
  if (
    Username !== "JANE APPLESEED" &&
    cvc !== "000" &&
    month !== "00" &&
    year !== "00" &&
    number !== "0000 0000 0000 0000"
  ) {
    const form = document.querySelector("form");
    form.style.display = "none";
    const added = document.querySelector(".added");
    added.style.display = "flex";
  }
}

function confirm(e) {
  e.preventDefault();
    WorkOnNumber();
    WorkOnName();
    WorkOnMonth();
    WorkOnYear();
    WorkOnCvc();
    added();
}

function continueAdd() {
  const form = document.querySelector("form");
  form.style.display = "flex";
  const added = document.querySelector(".added");
  added.style.display = "none";
  form.reset();
}
