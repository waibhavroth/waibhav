
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});


// GAME SEARCH AND FILTERING

const searchInput = document.getElementById("gameSearch");
const filterButtons = document.querySelectorAll(".filter");
const gameCards = document.querySelectorAll(".game-card");
const noResults = document.getElementById("noResults");

let activeCategory = "all";

function filterGames() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let visibleCount = 0;

  gameCards.forEach(card => {
    const category = card.dataset.category;
    const name = card.dataset.name;

    const matchesCategory =
      activeCategory === "all" || category === activeCategory;

    const matchesSearch = name.includes(searchTerm);

    const shouldShow = matchesCategory && matchesSearch;

    card.hidden = !shouldShow;

    if (shouldShow) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterGames);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item =>
      item.classList.remove("active")
    );

    button.classList.add("active");
    activeCategory = button.dataset.filter;

    filterGames();
  });
});


// DYNAMIC COPYRIGHT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();


// INITIALIZE

filterGames();
