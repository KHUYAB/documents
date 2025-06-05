document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const messageBox = document.getElementById("message-box");

  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input[required], select[required]");
      let valid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "#ccc";
        }
      });

      if (!valid) {
        e.preventDefault();
        if (messageBox) messageBox.textContent = "Please fill in all required fields.";
      } else {
        if (messageBox) messageBox.textContent = "";
      }
    });
  }
});

function togglePassword() {
  const pwd = document.getElementById('password');
  pwd.type = pwd.type === 'password' ? 'text' : 'password';
}
