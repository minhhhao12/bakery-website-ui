document.getElementById("btn-login").addEventListener("click", () => {
  if (document.getElementById("email").value !== "admin") {
    localStorage.setItem("login","logged-in")
    window.location.replace("../index.html");
  } else {
    window.location.replace("../admin/index.html");
  }
});
