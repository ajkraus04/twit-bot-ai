
console.log("hello")
// fetch("https://api.openai.com/v1/chat/completions", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization: "Bearer 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",
//   },
//   body: JSON.stringify(data),
// })
//   .then((data) => data.json())


  let topic = 5;
  const data = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "system",
      content: "You are a copywriter that writes controversial tweets",
    },
    {
      role: "user",
      content: `tweet about ${topic}`,
    },
  ],
  temperature: 0.7,
};


function injectAi() {
  console.log("triggered");
  const placeToAdd = document.querySelector(
    "div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1s2bzr4"
  );

  console.log(document);
  console.log(placeToAdd);

  const newButton = document.createElement("div");
  placeToAdd.appendChild(newButton);
  newButton.innerHTML = "<button>AI</button>";
  newButton.setAttribute("id", "theHandyAiButton")
  newButton.setAttribute("z-index", "1");
  // newButton.setAttribute("color", white);

console.log("hello");
}


function injectTemplate() {
  const template = document.createElement('div');
  template.setAttribute("position", "relative");
  template.setAttribute("z-index", "1");

  template.style.width = "200px"

  template.style.height = "200px";
  template.style.backgroundColor = "white"
  template.style.top = "0px"
  template.style.left = "0px"
  template.style.zIndex = "1"
  template.innerText = "djkfhasdkljfhasflkjahflkjashfds"
  const body = document.querySelector('body');

  body.appendChild(template);








}
injectAi();
injectTemplate();