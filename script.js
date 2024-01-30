const toggleIcon = document.querySelector(".toggle-icon");

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
});

// STICKY NAVBAR
window.onscroll = () => {
  const header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //===Remove menu icon navbar when click navbar link======//
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// menu icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Form Submision
const form = document.querySelector("form");
const FullName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const messageBody = `message: ${FullName.value} <br> email: ${email.value} <br> number: ${number.value} <br> subject: ${subject.value} <br> message: ${mess.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abdofadul73@hotmail.com",
    Password: "A246F71E6B9A29922A6CD19AAE885A8BD0AC",
    To: "abdofadul73@hotmail.com",
    From: "abdofadul73@hotmail.com",
    Subject: subject.value,
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Successfull!",
        text: "You have sent your message!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }
  }
}

function clearFields() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    item.value = "";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
  clearFields();
});
