// Ecoute de l'événement "load" sur la page web afin de maintenir le choix de l'internaute grace au local Storage
window.addEventListener("load", () => {
  // Condition if
  if (window.localStorage.darkMode === "true") {
    // Ajout de la classe dark
    document.body.classList.add("dark");
  }
});

// Récupération de l'élément HTML5 ayant l'Id dark__mode : input
const darkMode = document.querySelector("#dark__mode");

// Ecoute de l'événement "click" sur l'input
darkMode.addEventListener("click", () => {
  // Ajout ou suppression de la classe dark
  document.body.classList.toggle("dark");

  // Condition if...else
  if (window.localStorage.darkMode === "true") {
    window.localStorage.darkMode = "false";
  } else {
    window.localStorage.darkMode = "true";
  }
});
