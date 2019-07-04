
let res = null,
    resOne = null;

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://swapi.co/api/people/", true);

xhr.send();

xhr.onreadystatechange = function() {
  if (this.readyState !== 4) return;

  if (this.status !== 200) {
    alert("ошибка: " + (this.status ? this.statusText : "запрос не удался"));
    return;
  }

  res = JSON.parse(this.responseText).results[0];
  console.log(res);
  swapi();
};

var xhrOne = new XMLHttpRequest();

xhrOne.open(
  "GET",
  "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get",
  true
);

xhrOne.send();

xhrOne.onreadystatechange = function() {
  if (this.readyState !== 4) return;

  if (this.status !== 200) {
    alert("ошибка: " + (this.status ? this.statusText : "запрос не удался"));
    return;
  }
  resOne = JSON.parse(this.responseText).items[0];
  console.log(resOne);
  swapi();
};

function swapi() {
  if (res && resOne) {
    console.log("оба ответа получены");
    const span = document.createElement('span');
    const app = document.getElementById('app');
    span.innerHTML = `${res.name} vs ${resOne.name}`;
    app.appendChild(span);
  } else return;
}