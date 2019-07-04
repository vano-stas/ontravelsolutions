let app = document.getElementById("app");
let frame2 = document.getElementById("frame2");
let inputOne = document.getElementById("input-one");
let form1 = document.getElementById("form-1");
let deleteItem = document.getElementById("delete-item");

deleteItem.addEventListener("click", () => {
    localStorage.removeItem("value");
    console.log(`Данные успешно удалены.`);
    app.innerHTML = `Данные удалены`;

});

form1.addEventListener("submit", (ev)=> {
    ev.preventDefault();
    localStorage.setItem("value", inputOne.value);
    console.log(`Данные успешно записаны в localStorage: ${localStorage.getItem("value")}.`);
    inputOne.value = "";
    app.innerHTML = `Данные из localStorage: ${localStorage.getItem("value")}`;
});

window.addEventListener("storage", () => {
    app.innerHTML = `Данные из localStorage: ${localStorage.getItem("value")}`;
    console.log(`Данные успешно прочитаны из localStorage: ${localStorage.getItem("value")}.`);
});