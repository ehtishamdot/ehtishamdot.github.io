const overlay = document.querySelector(".overlay");
const projectOverlay = document.querySelector(".project-overlay");
const projectsLocator = document.querySelector(".project-overlay");

const project = document.querySelectorAll(".project");
const closeBtn = document.querySelector(".info__close");
const carousel = document.querySelector(".carousel");

const status = document.querySelector("#status");
const title = document.querySelector("#title");
const detail = document.querySelector("#detail");
const tools = document.querySelector("#tools");
const externallink = document.querySelector("#externallink");
const github = document.querySelector("#github");

//overlaybox text content
const modalText = {
  rms: {
    status: "Group Project",
    title: "Restaurant Management System",
    detail:
      "Hotel software solutions that keep operations flowing. A system that enable a restaurant to manage front-office capabilities,such as booking reservations, checkout, food assignment, managing food rates, and billing.",
    tools: ["C#", "Winform"],
    github: "https://github.com/ahtidotpk/Hotel-Management-System",
    link: "not available",
    images: [
      "./assets/images/projects/HMS/dinein.PNG",
      "./assets/images/projects/HMS/login_sign.png",
      "./assets/images/projects/HMS/main_menu.png",
      "./assets/images/projects/HMS/Script.PNG",
      "./assets/images/projects/HMS/takeaway.PNG",
    ],
  },

  workty: {
    status: "Solo Project",
    title: "Workty",
    detail:
      "App which mark your running/cycling schedule on map. Stored in localstorage, able to edit workout, delete the workout, sort the workouts and clean all workouts on one click",
    tools: ["Html", "CSS", "Javascript", "Leaflet Lib"],
    github: "https://github.com/ahtidotpk/workty",
    link: "https://workty.netlify.app/",
    images: [
      "./assets/images/projects/workty/1.PNG",
      "./assets/images/projects/workty/3.PNG",
      "./assets/images/projects/workty/4.PNG",
      "./assets/images/projects/workty/5.PNG",
  
    ],
  },

  bankist: {
    status: "Solo Project",
    title: "Bankist App",
    detail:
      "A banking app where you can access the details of your bankaccount and complete transactions directly from your computer, tablet or mobile device.",
    tools: ["Html", "CSS", "Javascript"],
    github: "https://github.com/ahtidotpk/Bankist-App",
    link: "https://serene-montalcini-f3aca5.netlify.app/",
    images: [
      "./assets/images/projects/Bankist/1.png",
      "./assets/images/projects/Bankist/2.png",
    ],
  },

  henna: {
    status: "Solo Project",
    title: "Itsallabouthenna",
    detail:
      "Custom Designed UI According to the client specifications. Provides such as booking reservations, henna prices, assignments, client reviews and portfolio.",
    tools: ["Html", "CSS", "Javascript"],
    github: "https://github.com/ahtidotpk/itsallabouthenna",
    link: "https://itsallabouthenna.github.io/",
    images: [
      "./assets/images/projects/henna/AboutUs.png",
      "./assets/images/projects/henna/Gallery-1.png",
      "./assets/images/projects/henna/Gallery-2.png",
      "./assets/images/projects/henna/ItsAllAboutHenna.png",
      "./assets/images/projects/henna/Services.png",
    ],
  },

  gameRPS: {
    status: "Solo Project",
    title: "Rock, Paper, Scissors",
    detail:
      "Rock, Paper, Scissors. The familiar game of Rock, Paper and Scissors: A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it. Whenever one player wins, the other loses.",
    tools: ["Html", "CSS", "Javascript"],
    github: "https://github.com/ahtidotpk/Rock-Paper-Scissors---Game",
    link: "https://stupefied-rosalind-6b6880.netlify.app/",
    images: [
      "./assets/images/projects/rps/1.PNG",
      "./assets/images/projects/rps/2.PNG",
      "./assets/images/projects/rps/3.PNG",
    ],
  },

  todo: {
    status: "Solo Project",
    title: "ToDo app",
    detail:
      "Day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. We can add more tasks at any time and delete a task that is completed.",
    tools: ["Html", "CSS", "Javascript"],
    github: "https://github.com/ahtidotpk/todoApp",
    link: "https://hardcore-bhabha-a7e195.netlify.app/",
    images: [
      "./assets/images/projects/todo/1.png",
      "./assets/images/projects/todo/2.png",
      "./assets/images/projects/todo/3.png",
      "./assets/images/projects/todo/4.png",
      "./assets/images/projects/todo/5.png",
    ],
  },
};

class Projects {
  #id;
  constructor() {
    projectsContainer.addEventListener("click", this.projectJection.bind(this));
    this.projectProjection();

    //close when escape is pressed
    document.addEventListener("keydown", this.keyEscape.bind(this));
    //close the overlay
    overlay.addEventListener("click", this.overlayEscape);
    //close button
    closeBtn.addEventListener("click", this.crossEscape);
  }

  overlayRemove = () => {
    overlay.classList.remove("hidden");
    projectOverlay.classList.remove("hidden");
  };

  overlayAdd = () => {
    overlay.classList.add("hidden");
    projectOverlay.classList.add("hidden");
  };

  keyEscape(e) {
    if (e.key === "Escape") {
      this.overlayAdd();
      document.querySelector("body").style.overflowY = "scroll";
    }
  }

  overlayEscape() {
    overlay.classList.add("hidden");
    projectOverlay.classList.add("hidden");
    document.querySelector("body").style.overflowY = "scroll";
  }

  crossEscape() {
    overlay.classList.add("hidden");
    projectOverlay.classList.add("hidden");
    document.querySelector("body").style.overflowY = "scroll";
  }

  projectJection = (e) => {

    const id = e.target.closest(".feather-activity")?.id;
    console.log(e.target.closest(".feather-activity"));
    this.projectFiller(id);
    const carousel = new Carousel();
  };

  createElement(id) {
    tools.innerHTML = "";
    modalText[id].tools.forEach((tool) => {
      const html = `<span>${tool}</span>`;
      tools.insertAdjacentHTML("beforeend", html);
    });

    document.querySelectorAll(".slide").forEach((slide) => {
      slide.remove();
    });
    modalText[id].images.forEach((imageL) => {
      const html = `<div
            class="slide"
            style="
              background: url(${imageL}) center
                center / cover;
            "
          ></div>`;
      carousel.insertAdjacentHTML("afterbegin", html);
    });
  }

  projectFiller = (id) => {
    title.textContent = modalText[id].title;
    status.textContent = modalText[id].status;
    detail.textContent = modalText[id].detail;
    this.createElement(id);

    //default
    github.style.display = "inline";
    externallink.style.display = "inline";

    //filling links
    modalText[id].github !== "not available"
      ? github.setAttribute("href", modalText[id].github)
      : (github.style.display = "none");
    console.log(github);

    modalText[id].link !== "not available"
      ? externallink.setAttribute("href", modalText[id].link)
      : (externallink.style.display = "none");
  };

  //project projection
  projectProjection = () => {
    project.forEach((project) => {
      project.addEventListener("click", (e) => {
        if(e.target.closest(".feather-activity")){
          this.overlayRemove();
        document.querySelector("body").style.overflow = "hidden";
        }
        const projectLocation = projectsLocator.getBoundingClientRect();
        const pX = window.pageXOffset;
        const pY = window.pageYOffset;
        window.scrollTo({
          behavior: "smooth",
          top: projectLocation.bottom + pY,
          left: projectLocation.left + pX,
        });
        console.log(projectLocation);

      });
    });
  };
}

const projectObj = new Projects();
