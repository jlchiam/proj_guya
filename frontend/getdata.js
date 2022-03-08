function getFromServer() {
    fetch("https://localhost:3000/users/all", { method: "GET"})
        .then((response) => response.text())
        .then((data) => {
            $(".mypanel").html(data);
        })
        .catch((error) => console.log(error));
}

/*
const b2 = document.getElementById("b2");
b2.addEventListener("click", () => {
  $.getJSON(`http://localhost:3000/users/all`, (data) => {
    let code = "<ul>";
    data.forEach((datapoint) => {
      code += `<li> First Name: ${datapoint.first_name}
                     | Last Name: ${datapoint.last_name}
                     | Email: ${datapoint.email} </li>`;
    });
    code += "</ul>";
    $(".mypanel").html(code);
  });
});

*/