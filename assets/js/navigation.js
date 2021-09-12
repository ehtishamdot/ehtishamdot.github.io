//burrons
const navBtn = document.querySelector(".navbar");

//divs
const navburger = document.querySelector(".navbar__burger");
const navigation = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__sections--link");
const overlayMinor = document.querySelector(".overlay-minor");
//toggles
const linksContainer = document.querySelector(".nav__sections");
overlay = document.querySelector(".overlay");

let counter = false;

const navToggles = () => {
  //display navigation
  navigation.classList.toggle("toggle__nav");

  //overlay
  overlayMinor.classList.toggle("hidden");

  //links color change
  navLinks.forEach((link) => {
    link.classList.toggle("toggle__links");
  });
};

navBtn.addEventListener("click", () => {
  navToggles();

});

//overlay
overlayMinor.addEventListener("click", () => {
  navToggles();
});

//animation
linksContainer.addEventListener("mouseover", (e) => {
  if (e.target.closest(".nav__sections--link")) {
    navLinks.forEach((link) => {
      link.style.opacity = ".3";
    });
    e.target.closest(`.nav__sections--link`).style.opacity = `1`;
  }
  e.target.addEventListener("mouseleave", () => {
    navLinks.forEach((link) => {
      link.style.opacity = "1";
    });
  });
});


//move to the sections
linksContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest(".nav__sections--link")) {
    navToggles()
    const href = document.querySelector(e.target.getAttribute("href"));
    const sectionLocation = href.getBoundingClientRect();
    const pX = window.pageXOffset;
    const pY = window.pageYOffset;
    window.scrollTo({
      top: sectionLocation.top + pY,
      bottom: sectionLocation.bottom,
      behavior: "smooth",
    });
  }
});
