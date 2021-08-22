const aboutScrollTo = document.querySelector(".btn-about-to");

const aboutme = document.querySelector(".about-me");




aboutScrollTo.addEventListener('click', e=> {
   e.preventDefault(); 
  const aboutMeLoc = aboutme.getBoundingClientRect();
  const pX = window.pageXOffset;
  const pY = window.pageYOffset;
    console.log(aboutMeLoc);
  window.scrollTo({
      left:aboutMeLoc.left + pX,
      top: aboutMeLoc.top + pY-100,
      behavior: `smooth`,
  })
})