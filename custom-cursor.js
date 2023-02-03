const cursor = document.querySelector(".cursor-cyclinder");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursor.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
};

document.addEventListener("mousemove", moveCursor);

window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    cursor.classList.remove("click");
  } else {
    cursor.classList.add("click");
  }
});
