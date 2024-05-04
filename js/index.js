const screen = document.getElementById("screen");
function addToScreen(value) {
  screen.innerHTML += value;
}

function equalTo() {
  try {
    screen.innerHTML = eval(
      screen.innerHTML.replace("√", "Math.sqrt").replace("^", "**")
    );
  } catch (err) {
    screen.innerHTML = "Error";
  }
}

function clearAll() {
  screen.innerHTML = "";
}

function clearLast() {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
}
