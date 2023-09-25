// Landing page script

const dropdwnBtn = document.querySelector("#dropdown_menu_container");
const joinVisitorContainer = document.querySelector("#join_visitor");

const landingPage = document.querySelector("#home");
const visitorPage = document.querySelector("#visitor_home_page");

// render artist names in the dropdown
function renderData() {
  let dropDownUl = document.querySelector(".dropdown-menu");

  items.forEach((item) => {
    let dropdownLi = document.createElement("li");
    let dropdownItem = document.createElement("a");

    dropdownItem.classList.add("dropdown-item");
    dropdownItem.innerText += `${item.artist}`;

    dropdownLi.append(dropdownItem);
    dropDownUl.append(dropdownLi);

    dropdownItem.addEventListener("click", function () {
      let nameArtist = dropdownItem.innerText;
      console.log(nameArtist);
      const buttonText = document.querySelector("#button_text");
      if (nameArtist === item.artist) {
        buttonText.innerText = nameArtist.slice(0, 8);
        location.hash = "artists";
      }
    });
  });
}
// page routing
function handleRoute(event) {
  event.preventDefault();
  let hash = location.hash;
  console.log(hash);
  console.log(hash);
  if (hash === "") {
    landingPage.style.display = "block";
    visitorPage.style.display = "none";
  } else if (hash.includes("artists")) {
    landingPage.style.display = "none";
  } else if (hash.includes("visitor")) {
    visitorPage.style.display = "block";
    landingPage.style.display = "none";
  }
}

function switchToVisitorPage() {
  location.hash = "visitor";
}

dropdwnBtn.addEventListener("click", renderData);
joinVisitorContainer.addEventListener("click", switchToVisitorPage);
window.addEventListener("load", handleRoute);
window.addEventListener("hashchange", handleRoute);
