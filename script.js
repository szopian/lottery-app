function Random() {
  return Math.floor(Math.random() * 20) + 1;
}

function randomValue() {
  document.querySelector(".number").value = Random();
}
