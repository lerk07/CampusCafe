let email = "admin";
let password = "admin";

let login_form = document.getElementById("loginForm");
if (!login_form) console.log("Login form missing.");

let email_input = login_form.querySelector("#email");
let password_input = login_form.querySelector("#password");
let bottom_text = login_form.querySelector(".demo-note");
let bottom_text_innerHtml = bottom_text.innerHTML;
let timeout;

login_form.querySelector(".btn-primary").addEventListener("click", event => {
    console.log('as')
    event.preventDefault();

    if (timeout) {
        clearTimeout(timeout)
        timeout = undefined;
    }

    // makes sure credentials are correct
    if (email_input.value !== email || password_input.value !== password) {
        bottom_text.innerHTML = `<p style="color: red">Invalid credentials.</p>`
        timeout = setTimeout(() => {
            bottom_text.innerHTML = bottom_text_innerHtml;
        }, 3000)
        return;
    }

    localStorage.setItem("logged_as", email_input.value);
    location.href = "index.html";
})