function generateCards(numCards) {
  const suits = ["\u2660", "\u2663", "\u2665", "\u2666"]; // Unicode for spade, club, heart, and diamond
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const cardsContainer = document.getElementById("cardsContainer");

  cardsContainer.innerHTML = "";

  for (let i = 0; i < numCards; i++) {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];

    const card = document.createElement("div");
    card.classList.add("card");

    const topLeft = document.createElement("div");
    topLeft.classList.add("corner-symbol", "top-left");
    topLeft.textContent = suit;

    const bottomRight = document.createElement("div");
    bottomRight.classList.add("corner-symbol", "bottom-right");
    bottomRight.textContent = suit;

    const centeredText = document.createElement("div");
    centeredText.classList.add("centered-text");
    centeredText.textContent = value;

    card.appendChild(topLeft);
    card.appendChild(bottomRight);
    card.appendChild(centeredText);

    cardsContainer.appendChild(card);
  }
}

function selectionSort(arr) {
  const len = arr.length;
  const log = [];

  // Mapeo de las letras a sus valores numéricos
  const mapper = {
    A: 1,
    J: 11,
    Q: 12,
    K: 13
  };

  const mapCardsLetters = value => {
    return parseInt(mapper[value] || value);
  };

  // Ordenamiento por selección
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < len; j++) {
      const value1 = mapCardsLetters(
        arr[j].querySelector(".centered-text").textContent
      );
      const value2 = mapCardsLetters(
        arr[minIndex].querySelector(".centered-text").textContent
      );

      log.push(arr);
      if (value1 < value2) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return log;
}

document.addEventListener("DOMContentLoaded", () => {
  const drawButton = document.getElementById("drawButton");
  const sortButton = document.getElementById("sortButton");

  drawButton.addEventListener("click", () => {
    const numCards = document.getElementById("numCards").value;
    generateCards(numCards);
  });

  sortButton.addEventListener("click", () => {
    const cards = document.querySelectorAll(".card");
    selectionSort(cards);
  });
});
