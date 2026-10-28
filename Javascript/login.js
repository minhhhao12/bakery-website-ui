document.getElementById("btn-login").addEventListener("click", () => {
  if (document.getElementById("email").value !== "admin") {
    window.location.replace("../index-logged-in.html");
  } else {
    window.location.replace("../admin/index.html");
  }
});
