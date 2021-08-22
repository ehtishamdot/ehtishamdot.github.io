//variables
const aboutMe = document.querySelector(".about-me");
const boldImp = document.querySelectorAll(".bold-imp");
const topImg = document.querySelector(".top-img");

const aboutMeMdi = document.querySelectorAll(".mdi");
const aboutMeWork = document.querySelector(".about-me__container__work");
const aboutMePara = document.querySelector(".about-visual__intro .col1");
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

  if (entry.isIntersecting) {
    boldImp.forEach((op) => {

      animationAdder(op, "opacity 1.5s ease-in-out");
      classRemover(op, "opacity-zero");
    });

    classRemover(aboutMePara, "opacity-zero");
    classRemover(aboutMeImage, "opacity-zero");
    animationAdder(aboutMePara, "moveRight 1s ease-in-out backwards");
    animationAdder(aboutMeImage, "moveRightLeft 1s ease-in-out  backwards");
  }
  observeAboutMe.unobserve(aboutMe);
};

const observeAboutMe = new IntersectionObserver(inputAboutMe, {
  root: null,
  threshold: 0.5,
});
observeAboutMe.observe(aboutMe);

const inputMdi = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (entry.isIntersecting) {
    aboutMeMdi.forEach((mdi) => {
      animationAdder(mdi, "sideUp 1.5s both");
      mdi.classList.remove("opacity-zero");
    });
  }
   observeMdi.unobserve(aboutMeWork);
};

const observeMdi = new IntersectionObserver(inputMdi, {
  root: null,
  threshold: 0.44,
});
observeMdi.observe(aboutMeWork);
