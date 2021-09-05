const blackWhiteTheme = document.querySelector(".black-white-btn");
const defaultTheme = document.querySelector(".default-btn");
const greenTheme = document.querySelector(".green-btn");
const themeChanger = document.querySelector(".top-img");

//Functions
const setProperty = (root, color) => {
  document.documentElement.style.setProperty(root, color);
};

const setOpacity = (target, value) => {
  target.style.opacity = value;
};

defaultTheme.style.opacity = "1";

themeChanger.addEventListener("click", (e) => {
  if (e.target.className === "black-white-btn") {
    //theme Colors
    setProperty("--main-bg-color", "black");
    setProperty("--primary-main-color", "#32c7cf");
    setProperty("--primary-sec-color", "#ccd6f6");
    setProperty("--important-color", "#ccd6f6");

    //Opacity
    setOpacity(blackWhiteTheme, "1");
    setOpacity(defaultTheme, ".5");
    setOpacity(greenTheme, ".5");
  }
  if (e.target.className === "default-btn") {
    //theme Colors
    setProperty("--main-bg-color", "#0c1c27");
    setProperty("--primary-main-color", "#32c7cf");
    setProperty("--primary-sec-color", "#9cc8e5");
    setProperty("--important-color", "#abdbf8");

    //Opacity
    setOpacity(blackWhiteTheme, ".5");
    setOpacity(defaultTheme, "1");
    setOpacity(greenTheme, ".5");
  }
  if (e.target.className === "green-btn") {
    //theme Colors
    setProperty("--main-bg-color", "#0a192f");
    setProperty("--primary-main-color", "#64ffda");
    setProperty("--primary-sec-color", "#ccd6f6");
    setProperty("--important-color", "#ccd6f6");

    //Opacity
    setOpacity(blackWhiteTheme, ".5");
    setOpacity(defaultTheme, ".5");
    setOpacity(greenTheme, "1");
  }
});
