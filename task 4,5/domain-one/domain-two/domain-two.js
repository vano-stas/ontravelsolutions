let inputTwo = document.getElementById("input-two");
let app = document.getElementById("app");
let form = document.getElementById("form");
let val = null;


form.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("value", inputTwo.value);
    inputTwo.value = "";
});

