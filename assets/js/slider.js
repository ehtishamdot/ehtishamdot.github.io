class Carousel {
  slideContainer = document.querySelector(".carousel");
  dotsContainer = document.querySelector(".dots");
  slide = document.querySelectorAll(".slide");
  curSlide = 0;
  maxSlides = this.slide.length;

  constructor() {
    this.slideContainer.addEventListener("click", this.slideButtons.bind(this));
    document.addEventListener("keydown", this.slideKeys.bind(this));
    this.dotsContainer.addEventListener("click", this.dotsMover.bind(this));

    this.slideMover(0);
    this.dotsMaker();
    this.dotColor(0);
  }

  slideMover = (curSlide) => {
    this.slide.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  };

  slideButtons = (e) => {
    if (e.target.id === `slider--left`) {

      this.curSlide--;
      if (this.curSlide < 0) {
        this.curSlide = this.maxSlides - 1;
      }
      this.dotColor(this.curSlide);
      this.slideMover(this.curSlide);
    }

    if (e.target.id === `slider--right`) {
      this.curSlide++;
      if (this.curSlide == this.maxSlides) {
        this.curSlide = 0;
      }

      this.slideMover(this.curSlide);
      this.dotColor(this.curSlide);
    }
  };

  slideKeys = (e) => {
    if (e.key === "ArrowRight") {
      this.curSlide++;
      if (this.curSlide === this.maxSlides) {
        this.curSlide = 0;
      }
      this.slideMover(this.curSlide);
      this.dotColor(this.curSlide);
    }

    if (e.key === "ArrowLeft") {
      this.curSlide--;
      if (this.curSlide < 0) {
        this.curSlide = this.maxSlides - 1;
      }
      this.slideMover(this.curSlide);
      this.dotColor(this.curSlide);
    }
  };

  dotsMover = (e) => {
    this.slideMover(e.target.dataset.slide);
    this.dotColor(e.target.dataset.slide);
  };

  dotsMaker = () => {
    this.dotsContainer.innerHTML = "";
    this.slide.forEach((_, i) => {
      const html = `
        <div class="dots__dot" data-slide="${i}"></div>
        `;
      this.dotsContainer.insertAdjacentHTML("beforeend", html);
    });
  };

  dotColor = (slide) => {
    document
      .querySelectorAll(`.dots__dot`)
      .forEach((val) => val.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
}
