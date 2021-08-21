//variables
const aboutMe = document.querySelector(".about-me");
const boldImp = document.querySelectorAll(".bold-imp");
const aboutMeMdi = document.querySelectorAll(".mdi");
const aboutMePara = document.querySelector(".about-visual__intro .col1");
const aboutMeImage = document.querySelector(".about-visual__intro-image");
const topImg = document.querySelector(".top-img"); 


const defaults = function () {
  boldImp.forEach((op) => {
    op.classList.add("opacity-zero");
  });
  aboutMeMdi.forEach((mdi) => {
    mdi.classList.add("opacity-zero");
  });
  aboutMePara.classList.add("opacity-zero");
  aboutMeImage.classList.add("opacity-zero");
};

defaults();

const inputAboutMe = function (entries) {
  const [entry] = entries;
  console.log(entry.isIntersecting);
  if (entry.isIntersecting) {
    boldImp.forEach((op) => {
      op.style.animation = "opacity 1.5s ease-in-out";
      op.classList.remove("opacity-zero");
    });
    aboutMeMdi.forEach((mdi) => {
      mdi.classList.remove("opacity-zero");
      mdi.style.animation = "sideUp 1.5s both";
    });
    aboutMePara.classList.remove("opacity-zero");
    aboutMeImage.classList.remove("opacity-zero");
    aboutMePara.style.animation = "moveRight 1s ease-in-out backwards";
    aboutMeImage.style.animation = "moveRightLeft 1s ease-in-out  backwards";


}
};

const observeAboutMe = new IntersectionObserver(inputAboutMe, {
  root: null,
  threshold: 0.3,
});

observeAboutMe.observe(aboutMe);
