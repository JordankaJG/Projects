// Landing page

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    localStorage.setItem("artistData", JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
let dropdwnBtn = document.querySelector("#dropdown_menu_container");
const dataStored = JSON.parse(localStorage.getItem("artistData"));

const joinVisitorContainer = document.querySelector("#join_visitor");
const landingPage = document.querySelector("#home");
const visitorPage = document.querySelector("#visitor_home_page");
let sections = document.querySelectorAll("section");

// render artist names in the dropdown
function renderData() {
  let dropDownUl = document.querySelector(".dropdown-menu");
  console.log(dataStored);

  if (dataStored) {
    dropDownUl.innerHTML = "";
    dataStored.forEach((item) => {
      let dropdownLi = document.createElement("li");
      let dropdownItem = document.createElement("a");

      dropdownItem.classList.add("dropdown-item");
      dropdownItem.innerText += `${item.name}`;

      dropdownLi.append(dropdownItem);
      dropDownUl.append(dropdownLi);

      dropdownItem.addEventListener("click", function () {
        let nameArtist = dropdownItem.innerText;
        console.log(nameArtist);
        const buttonText = document.querySelector("#button_text");
        if (nameArtist === item.name) {
          buttonText.innerText = nameArtist.slice(0, 8);
          location.hash = "artists";
        }
      });
    });
  } else {
    alert("No data found!");
  }
}
// page routing

function handleRoute(event) {
  event.preventDefault();
  let hash = location.hash;
  
  if (!hash) location.hash = "home";
  sections.forEach((section) => {
    `#${section.id}` !== hash
      ? (section.style.display = "none")
      : (section.style.display = "block");
  });


}
function switchToVisitorPage() {
  location.hash = "visitor";
}

function transferToVisitorLisitngPage() {
  location.hash = "visitor/listing"};




function switchToAuctionPage(){
  location.hash = "auctioning";
} 


window.addEventListener("load", handleRoute);
window.addEventListener("hashchange", handleRoute);
dropdwnBtn.addEventListener("click", renderData);
joinVisitorContainer.addEventListener("click", switchToVisitorPage);
findOneButton.addEventListener("click", transferToVisitorLisitngPage);
auctionIcon.addEventListener("click",switchToAuctionPage);
