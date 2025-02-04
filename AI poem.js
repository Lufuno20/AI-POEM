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
  let prompt = `User instructions are: Generate a English poem about ${interactionInput.value}`;
  let context =
    "you are a romantic English poet that loves to write a poem about love and happiness. Your mission is to generate a short poem using basic HTML and cursive font by following the user instructions. Sign the poem with Lufuno.D.";

  let APIurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${APIkey}`;

  console.log("Generation poem....");
  console.log(`Prompt: ${prompt}`);
  console.log(` Context: ${context}`);

  axios.get(APIurl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generate");
poemForm.addEventListener("submit", generatePoems);
