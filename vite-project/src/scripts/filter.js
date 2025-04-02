export function filterCard() {
  const allBtn = document.getElementById("all-extensions");
  const activeBtn = document.getElementById("active-extensions");
  const inactiveBtn = document.getElementById("inactive-extensions");

  allBtn.addEventListener("click", () => {
    filterExtensions("all");
    toggleSelectedButton(allBtn, activeBtn, inactiveBtn); // Alterado para 'selected'
  });

  activeBtn.addEventListener("click", () => {
    filterExtensions("active");
    toggleSelectedButton(activeBtn, allBtn, inactiveBtn); // Alterado para 'selected'
  });

  inactiveBtn.addEventListener("click", () => {
    filterExtensions("inactive");
    toggleSelectedButton(inactiveBtn, allBtn, activeBtn); // Alterado para 'selected'
  });
}

// Função auxiliar para destacar o botão clicado (agora com .selected)
function toggleSelectedButton(selectedBtn, ...otherBtns) {
  // Remove a classe 'selected' de todos os botões
  otherBtns.forEach((btn) => btn.classList.remove("selected"));
  
  // Adiciona a classe 'selected' apenas ao botão clicado
  selectedBtn.classList.add("selected");
}

// Função para filtrar os cards (permanece a mesma)
function filterExtensions(filter) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    switch (filter) {
      case "all":
        card.style.display = "flex";
        break;
      case "active":
        card.style.display = card.classList.contains("active") ? "flex" : "none";
        break;
      case "inactive":
        card.style.display = card.classList.contains("inactive") ? "flex" : "none";
        break;
    }
  });
}