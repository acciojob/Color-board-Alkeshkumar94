//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const colorBoard = document.getElementById("color-board");

  // Generate 800 squares dynamically
  for (let i = 0; i < 800; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    colorBoard.appendChild(square);

    // Add event listener to reset color after 1 second
    square.addEventListener("mouseenter", function () {
      square.style.backgroundColor = getRandomColor();
      setTimeout(() => {
        square.style.backgroundColor = "yellowgreen";
      }, 1000);
    });
  }
	
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
});
