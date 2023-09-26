// Landing page

let dropdwnBtn = document.querySelector("#dropdown_menu_container");
const dataStored = JSON.parse(localStorage.getItem("artistData"));

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

function renderData() {
  let dropDownUl = document.querySelector(".dropdown-menu");
  console.log(dataStored);
  dropDownUl.innerHTML = '';
if(dataStored){
dataStored.forEach((item) => {
  let dropdownLi = document.createElement("li");
  let dropdownItem = document.createElement("a");
  dropdownItem.classList.add("dropdown-item");
  dropdownItem.innerText += `${item.name}`;
  dropdownLi.append(dropdownItem);

  dropDownUl.append(dropdownLi);
});
}else{
alert("No data found!")
}

}
dropdwnBtn.addEventListener("click", renderData);
