function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function changeImage() {
  const img = document.getElementById("image");
  img.src = "https://via.placeholder.com/200/ff0000/FFFFFF?text=New+Image";
}

function changeText() {
  document.getElementById("main-title").innerText = "Text Changed!";
}

function showEmojis() {
  document.getElementById("main-title").innerText = "😎✨🔥🎉🎈";
}

function rotateImage() {
  const img = document.getElementById("image");
  img.style.transform = "rotate(180deg)";
}

function scaleImage() {
  const img = document.getElementById("image");
  img.style.transform = "scale(1.5)";
}

function moveImage() {
  const img = document.getElementById("image");
  img.style.transform = "translateX(100px)";
}

function addBorder() {
  const img = document.getElementById("image");
  img.classList.add("bordered");
}

function changeFont() {
  document.getElementById("main-title").style.fontFamily = "Comic Sans MS, cursive";
}

function toggleVisibility() {
  const img = document.getElementById("image");
  img.classList.toggle("hidden");
}

function spinText() {
  const title = document.getElementById("main-title");
  title.classList.add("spinning");
}

function changeButtonColors() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.style.backgroundColor = getRandomColor();
  });
}

function addShadow() {
  const img = document.getElementById("image");
  img.classList.add("shadowed");
}

function fadeText() {
  const title = document.getElementById("main-title");
  title.style.transition = "opacity 1s ease";
  title.style.opacity = "0.3";
}

function showAlert() {
  alert("You clicked the Alert button!");
}

function reset() {
  location.reload();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
