function generatePoems(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["it poetry and more...."],
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-generate");
poemForm.addEventListener("submit", generatePoems);
