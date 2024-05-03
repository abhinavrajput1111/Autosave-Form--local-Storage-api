let user = {
  fName: "",
  lName: "",
  country: "",
  phone_no: "",
  state: "",
  city: "",
  village: "",
};

function takeData() {
  const fname = prompt("Enter Your First Name");
  const lname = prompt("Enter Your Last Name");
  const country = prompt("Enter Your country");
  const phone = prompt("Enter Your First Phone Number");
  const state = prompt("Enter Your state");
  const city = prompt("Enter Your city");
  const village = prompt("Enter Your village");

  user.fName = fname;
  user.lName = lname;
  user.country = country;
  user.phone_no = phone;
  user.state = state;
  user.city = city;
  user.village = village;

  localStorage.setItem("user", JSON.stringify(user));
  displayData();
}

function displayData() {
  const fname = document.querySelector("#fname");
  const lname = document.querySelector("#lname");
  const country = document.querySelector("#country");
  const phone = document.querySelector("#pno");
  const state = document.querySelector("#state");
  const city = document.querySelector("#city");
  const village = document.querySelector("#village");

  fname.innerText = user.fName;
  lname.innerText = user.lName;
  country.innerText = user.country;
  phone.innerText = user.phone_no;
  state.innerText = user.state;
  city.innerText = user.city;
  village.innerText = user.village;
}

// takeData();

window.addEventListener("load", () => {
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
    displayData();
  } else {
    takeData();
  }
});
