let currentScene = "start";

function renderScene(sceneKey) {
  const scene = story[sceneKey];

  document.getElementById("text").innerText = scene.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  if (scene.choices.length === 0) {
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Restart";
    restartBtn.onclick = () => renderScene("start");
    choicesDiv.appendChild(restartBtn);
    return;
  }

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;

    btn.onclick = () => {
      renderScene(choice.next);
    };

    choicesDiv.appendChild(btn);
  });
}

// start game
renderScene(currentScene);