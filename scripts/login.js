function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const btn = document.getElementById("login-btn");
  const btnText = document.getElementById("btn-text");
  const spinner = document.getElementById("btn-spinner");
  const errAlert = document.getElementById("error-alert");
  const errMsg = document.getElementById("error-msg");

  errAlert.classList.add("hidden");

  if (!username || !password) {
    errMsg.textContent = "Please type default Username and Password";
    errAlert.classList.remove("hidden");
    return;
  }

  btn.disabled = true;
  btnText.classList.add("hidden");
  spinner.classList.remove("hidden");

  setTimeout(() => {
    if (username === "admin" && password === "admin123") {
      window.location.href = "./dashboard.html";
    } else {
      btn.disabled = false;
      btnText.classList.remove("hidden");
      spinner.classList.add("hidden");
      errMsg.textContent = "Invalid credentials! Default: admin / admin123";
      errAlert.classList.remove("hidden");
    }
  }, 1000);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleLogin();
});
