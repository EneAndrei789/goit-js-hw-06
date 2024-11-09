const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Selectăm elementul <ul> cu id-ul "ingredients"
const ingredientsList = document.querySelector("#ingredients");

// Creăm un array de elemente <li> pentru fiecare ingredient din matrice
const listItems = ingredients.map(ingredient => {
  const li = document.createElement("li"); // Creăm un element <li>
  li.textContent = ingredient; // Adăugăm numele ingredientului ca text
  li.classList.add("item"); // Adăugăm clasa "item"
  return li; // Returnăm elementul <li> creat
});

// Inserăm toate elementele <li> în <ul> într-o singură operațiune
ingredientsList.append(...listItems);

