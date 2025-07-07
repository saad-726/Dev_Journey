const id = "admin";
const password = "12345"; // also use string to match input

function Auth(e) {
    e.preventDefault();

    // Move these inside the function
    let u_id = document.querySelector("#user-id");
    let u_pass = document.querySelector("#user-pass");

    if (u_id.value === id && u_pass.value === password) {
        console.log("User logged in successfully");
        window.location.href = "dashboard.html";
    } else {
        alert("Username or password incorrect. Try again!");
    }
}
