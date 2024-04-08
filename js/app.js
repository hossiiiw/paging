const listItems = [
  { id: 1, name: "Amin", family: "Saeedi Rad" },
  { id: 2, name: "Amir", family: "Zehtab" },
  { id: 3, name: "Qadir", family: "Yolme" },
  { id: 4, name: "Babak", family: "Mohammadi" },
  { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 6, name: "Parsa", family: "Saeedi Rad" },
  { id: 7, name: "Ali", family: "Zehtab" },
  { id: 8, name: "Zahra", family: "Yolme" },
  { id: 9, name: "Bardia", family: "Mohammadi" },
  { id: 10, name: "Hashem", family: "Ghahreman Zadeh" },

  { id: 11, name: "Saeed", family: "Ehsani" },
  { id: 12, name: "Siamak", family: "Modiri" },
  { id: 13, name: "Mohsen", family: "Ansari" },
  { id: 14, name: "Mehran", family: "Ali Pour" },
  { id: 15, name: "Amir Hossein", family: "Mahtabi" },

  { id: 16, name: "Hossein", family: "Amino" },
  { id: 17, name: "Melika", family: "Ehsani" },
  { id: 18, name: "Qadir", family: "Yolme" },
  { id: 19, name: "Fatemeh", family: "Alilou" },
  { id: 20, name: "Ehsan", family: "Tayyebi" },

  { id: 21, name: "Zahra", family: "Gholami" },
  { id: 22, name: "Matin", family: "Sahebi" },
];

const nameContainer = document.querySelector("#list");
const btnContainer = document.querySelector("#pagination");

let currentPage = 1;
let currentRow = 5;

function displayName(allUserName, nameContainer, currentPage, currentRow) {
  nameContainer.innerHTML = "";
  let endIndex = currentPage * currentRow; //10
  let startIndex = endIndex - currentRow; // 10 - 5
  let UsernameShow = allUserName.slice(startIndex, endIndex);

  UsernameShow.forEach((user) => {
    let userName = document.createElement("div");
    userName.innerHTML = user.name + user.family;
    userName.classList.add("item");
    nameContainer.append(userName);
  });
}

function btnSelect(allUserList, currentRow, btnContainer) {
  let btnNumber = Math.ceil(allUserList.length / currentRow);
  for (let i = 1; i < btnNumber + 1; i++) {
    let btn = btnGenerator(i);
    btnContainer.appendChild(btn);
  }
}

function btnGenerator(btnNum) {
  let button = document.createElement("button");
  button.innerHTML = btnNum;
  if (btnNum === currentPage) {
    button.classList.add("active");
  }
  button.addEventListener("click", () => {
    currentPage = btnNum;
    displayName(listItems, nameContainer, currentPage, currentRow);

    let prevPage = document.querySelector("button.active");
    prevPage.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}

btnSelect(listItems, currentRow, btnContainer);
displayName(listItems, nameContainer, currentPage, currentRow);
