fetch("https://api.kanye.rest/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayResponse(data);
  })
  .catch((error) => console.error(error));

displayResponse = (res) => {
  const responseDiv = document.querySelector("#response-div");
  const textElement = document.createElement("p");
  textElement.innerText = `${res.quote}\n- Kanye Rest`;
  responseDiv.append(textElement);
};
