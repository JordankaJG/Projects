// Filters
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    var codingCards = document.querySelectorAll(".card-coding");

    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    var marketingCards = document.querySelectorAll(".card-marketing");

    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
      document.querySelector("#filter-design").checked = false;
      document.querySelector("#filter-coding").checked = false;
    });
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    var designCards = document.querySelectorAll(".card-design");

    designCards.forEach((designCard) => {
      designCard.style.display = "inline-block";

      document.querySelector("#filter-coding").checked = false;
      document.querySelector("#filter-marketing").checked = false;
    });
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".col-lg-4");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".col-lg-4");
  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}
// Pagination-----------------------
document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardsRow");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const cards = cardContainer.getElementsByClassName("col-lg-4");
  const numCardsToShow = 6;
  let visibleCards = 0;

  function showNextSet() {
    const lastVisibleCard = visibleCards + numCardsToShow;

    for (let i = visibleCards; i < lastVisibleCard; i++) {
      if (cards[i]) {
        cards[i].style.display = "";
      }
    }

    visibleCards += numCardsToShow;

    if (visibleCards >= cards.length) {
      loadMoreBtn.style.display = "none";
    }
  }

  function handleResize() {
    if (window.innerWidth === 425) {
      for (let i = numCardsToShow; i < cards.length; i++) {
        cards[i].style.display = "none";
      }

      if (cards.length <= numCardsToShow) {
        loadMoreBtn.style.display = "none";
      } else {
        loadMoreBtn.style.display = "";
      }

      loadMoreBtn.addEventListener("click", showNextSet);
    } else {
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "";
      }

      loadMoreBtn.style.display = "none";

      loadMoreBtn.removeEventListener("click", showNextSet);
    }
  }

  if (window.innerWidth === 425) {
    handleResize();
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth === 425) {
      handleResize();
    }
  });
});
