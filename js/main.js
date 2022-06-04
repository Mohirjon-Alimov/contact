let elForm = document.querySelector(".form");
let elName = document.querySelector("#yourName");
let elSurname = document.querySelector("#yourSurname");
let elNum = document.querySelector("#yourNumber");
let elBtn = document.querySelector(".btn");
let elList = document.querySelector(".contactList");
let elError = document.querySelector(".error");

if(elName.value === "" || elSurname.value === "" || elNum.value === ""){
  elError.style.display = "inlineBlock";
  elError.textContent = "Add some data";
}



elForm.addEventListener("submit", function(e) {
  e.preventDefault();

 
  if(elName.value === "" || elSurname.value === "" || elNum.value === ""){
    elError.style.display = "block";
    elError.textContent = "error";
    elError.style.textTransform = "uppercase";
    console.log("error");
  }else {
    console.log("ok");
    elError.style.display = "none";
    elList.style.display = "inlineBlock";
    let firstname = document.createElement("p");
    let lastName = document.createElement("p");
    let num = document.createElement("p");
    let listItem = document.createElement("li");

    firstname.textContent = `ismi: ${elName.value}`;
    lastName.textContent = `familiyasi: ${elSurname.value}`;
    num.textContent = `nomeri: ${elNum.value}`;

    listItem.append(firstname, lastName, num);
    elList.appendChild(listItem);
  }

  elName.value = null;
  elSurname.value = null;
  elNum.value = null
  return

})