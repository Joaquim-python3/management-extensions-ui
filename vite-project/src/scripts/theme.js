const changeElement = document.getElementById("change-theme");

changeElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
