// Landing page script

let dropdwnBtn = document.querySelector("#dropdown_menu_container");
function renderData() {
  let dropDownUl = document.querySelector(".dropdown-menu");

  items.forEach((item) => {
    let dropdownLi = document.createElement("li");
    let dropdownItem = document.createElement("a");
    dropdownItem.classList.add("dropdown-item");
    dropdownItem.innerText += `${item.artist}`;
    dropdownLi.append(dropdownItem);

    dropDownUl.append(dropdownLi);
  });
}
dropdwnBtn.addEventListener("click", renderData);
