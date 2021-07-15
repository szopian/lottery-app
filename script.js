function Random() {
  return Math.floor(Math.random() * 20);
}

function randomValue() {
  document.querySelector(".number").value = Random();
}
