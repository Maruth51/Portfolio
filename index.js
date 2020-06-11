const burger = document.querySelector(".nav-burger");
const navItems = document.querySelector(".Nav-items");
navItems.addEventListener("click", toggleNav);

burger.addEventListener("click", toggleNav);

function toggleNav() {
  navItems.classList.toggle("nav-active");
}
function submitContact(e) {
  let contactObj = {};
  e.preventDefault();
  let formData = new FormData(e.target);
  for (let i of formData.entries()) {
    console.log(i[0] + " " + i[1]);
    contactObj[i[0]] = i[1];
  }
  console.log(contactObj);
}

$(document).ready(function () {
  // Add smooth scrolling to all links
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