
const blackWhiteTheme = document.querySelector(".black-white-btn");
const defaultTheme = document.querySelector(".default-btn");
const greenTheme = document.querySelector(".green-btn");

blackWhiteTheme.addEventListener('click', function () {
    document.documentElement.style.setProperty("--main-bg-color", "black");
    document.documentElement.style.setProperty(
      "--primary-main-color",
      "#32c7cf"
    );
    document.documentElement.style.setProperty(
      "--primary-sec-color",
      "#ccd6f6"
    );
    document.documentElement.style.setProperty("--important-color", "#ccd6f6");
});

defaultTheme.addEventListener("click", function () {
  document.documentElement.style.setProperty("--main-bg-color", "#0c1c27");
  document.documentElement.style.setProperty("--primary-main-color", "#32c7cf");
  document.documentElement.style.setProperty("--primary-sec-color", "#9cc8e5");
  document.documentElement.style.setProperty("--important-color", "#abdbf8");
}); 

greenTheme.addEventListener("click", function () {
  document.documentElement.style.setProperty("--main-bg-color", "#0a192f");
  document.documentElement.style.setProperty("--primary-main-color", "#64ffda");
  document.documentElement.style.setProperty("--primary-sec-color", "#ccd6f6");
  document.documentElement.style.setProperty("--important-color", "#32c7cf");
});

