document.addEventListener("DOMContentLoaded", function () {

  // 1. BUTTON HOVER EFFECT
  const buttons = document.querySelectorAll(".btn-branding-outline");

  buttons.forEach(button => {
    button.addEventListener("mouseenter", function () {
      button.style.backgroundColor = "pink";
      button.style.color = "white";
      button.style.borderColor = "pink";
    });

    button.addEventListener("mouseleave", function () {
      button.style.backgroundColor = "";
      button.style.color = "";
      button.style.borderColor = "";
    });
  });


  // 2. CONTACT BUTTON CLICK ALERT
  const contactBtn = document.getElementById("contactBtn");

  if (contactBtn) {
    contactBtn.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Let's get in touch");
      window.location.href = "contact.html";
    });
  }


  // 3. ABOUT LINK CLICK ALERT
  const aboutLink = document.querySelector('a[href="about.html"]');

  if (aboutLink) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Get to know me more 😊");
      window.location.href = "about.html";
    });
  }


  // 4. SECTION HOVER EFFECT 
  const sections = document.querySelectorAll(".project");

  sections.forEach(section => {
    section.addEventListener("mouseenter", function () {
      section.style.backgroundColor = "#ffe6f0";
    });

    section.addEventListener("mouseleave", function () {
      section.style.backgroundColor = "";
    });
  });

});