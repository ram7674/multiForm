const CardOneEl = document.getElementById("CardOne");
const CardTwoEl = document.getElementById("CardTwo");
const CardThreeEl = document.getElementById("CardThree");
const CardFourEl = document.getElementById("CardFour");
const thankCardEl = document.getElementById("thankCard");

const step1EL = document.getElementById("step1");
const step2EL = document.getElementById("step2");
const step3EL = document.getElementById("step3");
const step4EL = document.getElementById("step4");

step1EL.style.backgroundColor = "#fff";
step1EL.style.color = "black";

function moveOnPage2() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    // Reset previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
  
    // Validate name
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      return;
    }
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      document.getElementById("emailError").textContent = "Invalid email address.";
      return;
    }
    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
      document.getElementById("phoneError").textContent = "Invalid phone number (10 digits).";
      return;
    }

    CardOneEl.classList.add("hide");
    CardTwoEl.classList.remove("hide");

    step2EL.style.backgroundColor = "#fff";
    step2EL.style.color = "black";
    step1EL.style.backgroundColor = "transparent";
    step1EL.style.color = "#fff";
}

function moveOnPage3() {
    CardTwoEl.classList.add("hide");
    CardThreeEl.classList.remove("hide");

    step3EL.style.backgroundColor = "#fff";
    step3EL.style.color = "black";

    step2EL.style.backgroundColor = "transparent";
    step2EL.style.color = "#fff";
}

function moveOnPage4() {
    CardThreeEl.classList.add("hide");
    CardFourEl.classList.remove("hide");

    step4EL.style.backgroundColor = "#fff";
    step4EL.style.color = "black";

    step3EL.style.backgroundColor = "transparent";
    step3EL.style.color = "#fff";
}

function moveOnThankigPage() {
    CardFourEl.classList.add("hide");
    thankCardEl.classList.remove("hide");
}


/* GO BACK steps */
function BackToPage1() {
    CardOneEl.classList.remove("hide");
    CardTwoEl.classList.add("hide");

    step1EL.style.backgroundColor = "#fff";
    step1EL.style.color = "black";

    step2EL.style.backgroundColor = "transparent";
    step2EL.style.color = "#fff";
}

function BackToPage2() {
    CardTwoEl.classList.remove("hide");
    CardThreeEl.classList.add("hide");

    step2EL.style.backgroundColor = "#fff";
    step2EL.style.color = "black";

    step3EL.style.backgroundColor = "transparent";
    step3EL.style.color = "#fff";
}

function BackToPage3() {
    CardThreeEl.classList.remove("hide");
    CardFourEl.classList.add("hide");

    step3EL.style.backgroundColor = "#fff";
    step3EL.style.color = "black";

    step4EL.style.backgroundColor = "transparent";
    step4EL.style.color = "#fff";
}