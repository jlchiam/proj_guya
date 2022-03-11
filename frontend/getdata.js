function getFromServer() {
    fetch("https://localhost:3000/Workprofile/all", { method: "GET"})
        .then((response) => response.text())
        .then((data) => {
            $(".mypanel").html(data);
        })
        .catch((error) => console.log(error));
};

function getWorkProfile() {
  fetch("https://localhost:3000/Workprofile/all", { method: "GET"})
      .then((response) => response.text())
      .then((data) => {
          $(".dropdown").html(data);
      })
      .catch((error) => console.log(error));
};

function getUserProfile() {
  fetch("https://localhost:3000/Userprofile/all", { method: "GET"})
      .then((response) => response.text())
      .then((data) => {
          $(".mypanel").html(data);
      })
      .catch((error) => console.log(error));
};

function searchUserProfileById() {
  fetch("https://localhost:3000/searchbyid/", { method: "POST"})
      .then((response) => response.text())
      .then((data) => {
          $(".mypanel").html(data);
      })
      .catch((error) => console.log(error));
};


const b2 = document.getElementById("b2");
b2.addEventListener("click", () => {
  $.getJSON(`http://localhost:3000/Workprofile/all`, (data) => {
    //$.getJSON(`http://nusbackendstub.herokuapp.com/user/all`, (data) => {
    let code = "<ul>";
    data.forEach((datapoint) => {
      code += `<li> profile_name: ${datapoint.profile_name}
                     | savings: ${datapoint.savings}
                     | spendings: ${datapoint.spendings} </li>`;
    });
    code += "</ul>";
    $(".mypanel").html(code);
  });
});


const s1 = document.getElementById("s1");
s1.addEventListener("load", () => {
  $.getJSON(`http://localhost:3000/Workprofile/all`, (data) => {
    //$.getJSON(`http://nusbackendstub.herokuapp.com/user/all`, (data) => {
    //let code = "<option id='0'>--choosen</option>";
    let code="";
    data.forEach((datapoint) => {
      code += "${datapoint.profile_name}";
    });
    $(".ddWorkProfile").html(code);
  });
});


//search by ID
const b3 = document.getElementById("b3");
b3.addEventListener("click", () => {
  let user_id = document.getElementById("inputbox").value;
  //$.getJSON(
    // "http://nusbackendstub.herokuapp.com/user/all",
    //$.getJSON(`http://nusbackendstub.herokuapp.com/user/by-uid?user_id=${user_id}`, (data) => {
    //$.getJSON(`http://localhost:3000/Userprofile/byid?id=${user_id}`, (data) => { 
      $.getJSON(`http://localhost:3000/Userprofile/byid?user_id=${user_id}`, (data) => { 
    data = data[0];  
    console.log(data)
      let code = `First Name: ${data.first_name} <br>
                Last Name:  ${data.last_name} <br>
                Email:      ${data.email}`;
    $(".mypanel").html(code);
    }
  );
});


const b4 = document.getElementById("b4");
b4.addEventListener("click", () => {
  $.getJSON(`http://localhost:3000/Userprofile/all`, (data) => {
    //$.getJSON(`http://nusbackendstub.herokuapp.com/user/all`, (data) => {
    let code = "<ul>";
    data.forEach((datapoint) => {
      code += `<li> first name: ${datapoint.first_name}
                     | last name: ${datapoint.last_name}
                     | email: ${datapoint.email} </li>`;
    });
    code += "</ul>";
    $(".mypanel").html(code);
  });
});


