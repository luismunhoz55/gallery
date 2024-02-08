const cards = [];

for (let i = 1; i < 5; i++) {
  cards.push(document.querySelector("#card" + i));
}

for (const card of cards) {
  card.addEventListener("click", () => {
    card.classList.add("active");

    for (const card1 of cards) {
      if (card1 !== card) {
        card1.classList.remove("active");
      }
    }
  });
}
