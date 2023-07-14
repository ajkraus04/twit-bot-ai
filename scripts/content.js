console.log("hello");

function injectAi() {
  setTimeout(() => {
    console.log("dom loeaded");
    const placeToAdd = document.querySelector(
      "div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1s2bzr4"
    );

    console.log(placeToAdd);
    const newButton = document.createElement("div");
    placeToAdd.appendChild(newButton);
    newButton.innerHTML = "<button>AI</button>";
    newButton.setAttribute("id", "theHandyAiButton");
    newButton.setAttribute("z-index", "1");
    // newButton.setAttribute("color", white);

    const whatIsHappening = document.querySelector(
      ".public-DraftEditorPlaceholder-inner"
    );
    whatIsHappening.innerText = "What topic do you want to tweet about?";

    newButton.addEventListener("click", () => {
      console.log("button clicked");
      promptify();
    });

    console.log("hello");
  }, 1000);
}

function promptify() {
  setTimeout(() => {
    let promptSelector = document.querySelector(
      ".public-DraftStyleDefault-block"
    );
    console.log(promptSelector);
    let promptText = promptSelector.firstChild.firstChild.innerText;
    const tweet = generatetweet(promptText);

    promptText = tweet;
  }, 1500);
}
function setTweet(text) {
  setTimeout(() => {
    navigator.clipboard.writeText(text);
    let promptSelector = document.querySelector(
      ".public-DraftStyleDefault-block"
    );
    promptSelector.firstChild.firstChild.textContent = text;
    // promptSelector.select();

    //Execute command

    document.execCommand("paste");
  }, 1500);
}

function generatetweet(topic) {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You write controversial tweets on twitter",
      },
      {
        role: "user",
        content: `tweet about ${topic}`,
      },
    ],
    temperature: 0.7,
  };
  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify(data),
  })
    .then((data) => data.json())
    .then((data) => {
      tweet = data.choices[0].message.content;
      setTweet(tweet);
    });
}

injectAi();
console.log("hello");
