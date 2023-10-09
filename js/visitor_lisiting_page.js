const cardWrapper = document.querySelector("#card_wrapper");

function createCard(item, id) {
  let col4 = document.createElement("div");

  col4.classList.add("col-lg-4", "mt-4");

  let divCard = document.createElement("div");

  divCard.classList.add(
    "card",
    "h-100",
    "rounded-0",
    "border-0",
    "card-shadow"
  );

  let image = document.createElement("img");

  image.setAttribute("src", `${item.image}`);
 image.classList.add("card-image-top", "image-fluid");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let titleAndPriceWrapper = document.createElement("div");
  titleAndPriceWrapper.classList.add("d-flex","align-items-center","justify-content-between")

  let cardTitle = document.createElement("p");
  cardTitle.classList.add("card-title", "m-0", "p-0", "artist-name");
 cardTitle.textContent = item.artist;

  let priceTag = document.createElement("span");
  priceTag.innerText = `$${item.price}`;
  priceTag.classList.add("d-inline-block", "ms-5","price-tag")

  let itemTitle = document.createElement("h6");
  itemTitle.innerText = item.title;
  itemTitle.classList.add("item-title", "mb-0");

  let itemContent = document.createElement("p");
  itemContent.classList.add("card-text", "m-0", "p-0", "item-content");
  itemContent.textContent =
    " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita vel facere eaque ipsa. Maiores facilis animi eum quas nemo voluptatum?";

  cardWrapper.appendChild(col4);

  col4.appendChild(divCard);

  divCard.appendChild(image);

  divCard.appendChild(cardBody);
cardBody.appendChild(titleAndPriceWrapper)
titleAndPriceWrapper.appendChild(cardTitle);
titleAndPriceWrapper.appendChild(priceTag)
  cardBody.appendChild(itemTitle);
  cardBody.appendChild(itemContent);
  console.log(item);


  if (item.id % 2) {
    divCard.style.color = "rgba(161, 106, 94, 1)";
    cardBody.style.backgroundColor = "rgba(252, 235, 213, 1)";
  } else {
    cardTitle.style.color = "rgba(252, 235, 213, 1)";
    itemContent.style.color = "rgba(252, 235, 213, 1)";
    itemTitle.style.color = "rgba(252, 235, 213, 1)";
    cardBody.style.backgroundColor = "rgba(161, 106, 94, 1)";
  }
}
items.forEach((item, id) => {
  createCard(item, id);
});
