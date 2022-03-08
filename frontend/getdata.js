function getFromServer() {
    fetch("https://localhost:3000/users/all", { method: "GET"})
        .then((response) => response.text())
        .then((data) => {
            $(".mypanel").html(data);
        })
        .catch((error) => console.log(error));
}


const b1 = document.getElementById("b1");
b1.addEventListener("click", () => {
  let user_id = document.getElementById("inputbox").value; //have an inputbox on the frontend index.html file
  //$.getJSON(
    // "http://nusbackendstub.herokuapp.com/user/all",
    //`http://nusbackendstub.herokuapp.com/user/by-uid?user_id=${user_id}`,
    $.getJSON(`http://localhost:3000/users/by-uid?uid=${user_id}`, (data) => { //data was sent as list - mock api was sending single object
    data = data[0];  //mysql is a list of object response so what he did is made data = 0 as the 1st element to be taken from that list
    console.log(data)
      let code = `First Name: ${data.first_name} <br>
                Last Name:  ${data.last_name} <br>
                Email:      ${data.email}`;
    $(".mypanel").html(code);
      // let code = "<ul>";
      // data.forEach((datapoint) => {
      //   code += `<li> First Name: ${datapoint.first_name}
      //               Last Name: ${datapoint.last_name}
      //               Email: ${datapoint.email} </li>`;
      // });
      // code += "</ul>";
      // $(".mypanel").html(code);
    }
  );
});

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

