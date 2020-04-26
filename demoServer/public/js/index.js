document.addEventListener("DOMContentLoaded", ()=> {
    let token = localStorage.getItem("rc_token");
    if (!token) {
        window.location.replace("/login.html");
    }
});