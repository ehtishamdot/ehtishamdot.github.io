//variables
const aboutMe = document.querySelector(".about-me");
const boldImp = document.querySelectorAll(".bold-imp");
const topImg = document.querySelector(".top-img");

const aboutMeMdi = document.querySelectorAll(".work-logo");
const aboutMeWork = document.querySelector(".about-me__container__work");
const aboutMeVisual = document.querySelector(".about-visual");
const aboutMePara = document.querySelector(".about-visual__intro");
const aboutMeImage = document.querySelector(".about-visual__intro-image");

//variables

//Animation adder
const animationAdder = function (element, value) {
  element.style.animation = value;
};
//Class adders
const classAdder = function (element, value) {
  element.classList.add(value);
};
//Class remover
const classRemover = function (element, value) {
  element.classList.remove(value);
};

const defaults = function () {
  boldImp.forEach((op) => {
    classAdder(op, "opacity-zero");
  });
  aboutMeMdi.forEach((mdi) => {
    classAdder(mdi, "opacity-zero");
  });
  classAdder(aboutMePara, "opacity-zero");
  classAdder(aboutMeImage, "opacity-zero");
};
defaults();

const inputAboutMe = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  aboutMeMdi.forEach((mdi) => {
    animationAdder(mdi, "sideUp 1.5s both");
    mdi.classList.remove("opacity-zero");
  });

  observeAboutMe.unobserve(aboutMeWork);
};

const observeAboutMe = new IntersectionObserver(inputAboutMe, {
  root: null,
  threshold: 0.1,
});
observeAboutMe.observe( aboutMeWork);

const inputAboutVisual = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  boldImp.forEach((op) => {
    animationAdder(op, "opacity 1.5s ease-in-out");
    classRemover(op, "opacity-zero");
  });

  animationAdder(aboutMePara, "moveRight 1s ease-in-out");
  animationAdder(aboutMeImage, "moveRightLeft 1s ease-in-out ");
    classRemover(aboutMePara, "opacity-zero");
    classRemover(aboutMeImage, "opacity-zero");
  observeAboutMe.unobserve(aboutMeVisual);
};

const observeAboutVisual = new IntersectionObserver(inputAboutVisual, {
  root: null,
  threshold: 0.11,
});
observeAboutVisual.observe(aboutMeVisual);
