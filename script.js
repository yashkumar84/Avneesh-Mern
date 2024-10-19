window.addEventListener("load", init);

function init() {
  const input = document.querySelector(".input");
  document
    .querySelector(".btn")
    .addEventListener("click", () => getData(input.value));
}

async function getData(value) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=f635e071d50e448e97c94737241310&q=${value}`
  );
  const data = await response.json();
  console.log("The data is ", data);
  printData(data);
}

function printData(data) {
  console.log(
    "PPrintData",
    data.current.temp_c,
    data.location.name,
    data.current.condition.text
  );

  const div = document.querySelector(".information");
  div.innerHTML = null;
  const h4 = document.createElement("h4");
  h4.innerText = data.location.name;
  div.appendChild(h4);
  const temp = document.createElement("h4");
  temp.innerText = data.current.temp_c;
  div.appendChild(temp);
  const text = document.createElement("h4");
  text.innerText = data.current.condition.text;
  div.appendChild(text);
}
