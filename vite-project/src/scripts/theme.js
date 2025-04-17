const changeElement = document.getElementById("change-theme");

changeElement.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  document.querySelectorAll(".card").forEach((card) => {
    card.classList.toggle("dark");
  });

  document.querySelector(".main__title").classList.toggle("dark");
  document.querySelectorAll(".main__option").forEach((option) => {
    option.classList.toggle("dark");
  });

  document.querySelector(".header").classList.toggle("dark");

  
});
