const burger = document.querySelector(".nav-burger");
const navItems = document.querySelector(".Nav-items");
const contactButton = document.querySelector("#submit");
const toastEle = document.querySelector("#clientName");
let success;

navItems.addEventListener("click", toggleNav);

burger.addEventListener("click", toggleNav);
function toggleNav() {
  navItems.classList.toggle("nav-active");
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  const url = "https://protfolio.free.beeceptor.com";

  $("#form").on("submit", function (e) {
    const form = e.target;
    if (!form.checkValidity()) {
      console.log("if");
      e.preventDefault();
      e.stopPropagation();
      form.classList.add("was-validated");
    } else {
      console.log("else");
      let contactObj = {};
      e.preventDefault();
      contactButton.innerHTML = "Submiting...";
      let formData = new FormData(e.target);
      for (let i of formData.entries()) {
        console.log(i[0] + " " + i[1]);
        contactObj[i[0]] = i[1];
      }
      let tostMsg = `Hi ${contactObj.name}`;
      toastEle.innerHTML = tostMsg;
      fetch(url, {
        mode: "cors",
        method: "POST",
        body: JSON.stringify(contactObj),
      })
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          $(".toast").toast("show");
          contactButton.innerHTML = "Contact";
          console.log(response);
          e.target.reset();
          form.classList.remove("was-validated");
        })
        .catch((err) => {
          return err;
        });
    }
  });
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    console.log(this.hash);
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
