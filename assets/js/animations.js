//variables
const aboutMe = document.querySelector(".about-me");
const boldImp = document.querySelectorAll(".bold-imp");
const topImg = document.querySelector(".top-img");

const aboutMeMdi = document.querySelectorAll(".work-logo");
const aboutMeWork = document.querySelector(".about-me__container__work");
const aboutMeVisual = document.querySelector(".about-visual");
const aboutMePara = document.querySelector(".about-visual__intro");
const aboutMeImage = document.querySelector(".about-visual__intro-image");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");

console.log(projects);

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

  projects.forEach((val) => {
    classAdder(val, `opacity-zero`);
  });
};
defaults();

const obersve = (section, threashold) => {
  return new IntersectionObserver(section, {
    root: null,
    threshold: threashold,
  });
};

const inputAboutMe = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  aboutMeMdi.forEach((mdi) => {
    animationAdder(mdi, "sideUp 1.5s both");
    mdi.classList.remove("opacity-zero");
  });

  observeAboutMe.unobserve(aboutMeWork);
};

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

const revealSection = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  projects.forEach((observe) => {
    observe.classList.remove("opacity-zero");
    animationAdder(observe, "sideUp 1.5s");
    // observer.unobserve(observe);
  });
};

let observeAboutMe = obersve(inputAboutMe, 0.1);
observeAboutMe.observe(aboutMeWork);

let observeAboutVisual = obersve(inputAboutVisual, 0.11);
observeAboutVisual.observe(aboutMeVisual);

let opacityObserver = obersve(revealSection, 0.6);
projects.forEach((observe) => {
  opacityObserver.observe(observe);
  classAdder(observe, `opacity-zero`);
});




///////////////////////////////////////
// Menu fade animation

projectsContainer.addEventListener("mouseover", (e) => {

  e.target.closest(`.project`).addEventListener(`mouseover`, (e) => {
    projects.forEach((item) => {
      item.style.opacity = `.5`;
    });
  });

  e.target.closest(`.project`).style.opacity = `1`;

  e.target.closest(`.project`).addEventListener("mouseleave", () => {
    projects.forEach((item) => {
      item.style.opacity = `1`;
    });
  });
});




// const handleHover = function (e) {
//   console.log(e.target.classList.contains("project"));
//     let link;
//   if (e.target.classList.contains("project")) {
//      link = e.target;
//   }
//   const siblings = projects;

//     siblings.forEach((el) => {
//      el.style.opacity = this;
//   });
//    link.style.opacity = `1`;
// };

// projects.forEach((val) => {
//   val.addEventListener("mouseover", handleHover.bind(0.5));
//   val.addEventListener("mouseout", handleHover.bind(1));
// });