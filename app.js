const screen = document.getElementById("screen");

const faces = {
happy: `
   ███████
  ██     ██
  ██  █ █  ██
  ██       ██
   █████████
`,
angry: `
   ███████
  ██  █ █  ██
  ██       ██
  ██  ███  ██
   █████████
`
};

function setFace(name) {
  screen.textContent = faces[name];
}

function shake() {
  let count = 0;
  let interval = setInterval(() => {
    screen.style.marginLeft = (count % 2 === 0 ? "10px" : "-10px");
    count++;
    if (count > 10) {
      clearInterval(interval);
      screen.style.marginLeft = "0px";
    }
  }, 100);
}

function showTime() {
  const now = new Date();
  screen.textContent = now.toLocaleTimeString();
}

setFace("happy");