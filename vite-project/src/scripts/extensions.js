export function getExtension(data) {
  const container = document.getElementById("extensions-container");

  container.innerHTML = "";

  data.forEach((extension) => {
    const extensionElement = createExtensionElement(extension);
    container.appendChild(extensionElement);
  });
}

function createExtensionElement(extension) {
  // 1. Cria a estrutura base
  const card = document.createElement("div");
  card.className = `main__card ${extension.isActive ? "" : "disabled"}`;

  // 2. Adiciona a imagem
  const img = document.createElement("img");
  img.src = extension.logo;
  img.alt = `${extension.name} logo`;
  img.className = "main__logo";

  // 3. Adiciona o nome
  const name = document.createElement("h3");
  name.className = "main__card-name";
  name.textContent = extension.name;

  // 4. Adiciona a descrição
  const desc = document.createElement("p");
  desc.className = "main__description";
  desc.textContent = extension.description;

  // 5. Adiciona o status
  const status = document.createElement("span");
  status.className = "main__status";
  status.textContent = extension.isActive ? "Ativo" : "Inativo";

  // 6. Monta a estrutura
  card.append(img, name, desc, status);

  return card;
}
