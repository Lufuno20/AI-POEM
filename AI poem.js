function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}
function generatePoems(event) {
  event.preventDefault();

  let interactionInput = document.querySelector("#interaction");
  let APIkey = "b08b4acf0t6108d50e30fa0b396od66f";
  let prompt = `User instructions are: Generate information and instructions about ${interactionInput.value}`;
  let context =
    "you are a AI that provides information for users and instructions to use such as recipes. Your mission is to generate information and instructions using basic HTML  by following the user instructions. Add reference list of where you got the information and instructions for the information provided at the end.";

  let APIurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIkey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  poemElement.innerHTML = `<div class="blink">⏳ Generating for ${interactionInput.value}.....</div>`;
  console.log("Generating....");
  console.log(`Prompt: ${prompt}`);
  console.log(` Context: ${context}`);

  axios.get(APIurl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generate");
poemForm.addEventListener("submit", generatePoems);
