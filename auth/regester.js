const emailInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const singinBtn = document.querySelector(".signin-button");

singinBtn.addEventListener("click", singIn);

function singIn(event) {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  console.log(emailValue);
  let ifSendData = true;

  if (
    emailValue.length === 0 ||
    emailValue.indexOf("@") === -1 ||
    emailValue.indexOf(".") === -1
  ) {
    alert("Pleas Enter yuor Email");
    ifSendData = false;
  }
  if (passwordValue.length === 0) {
    alert("Plaese Enter your password");
    ifSendData = false;
  } else if (passwordValue.length <= 4) {
    alert("Your password is not Strong");
  }
  if (ifSendData) {
    const body = JSON.stringify({
      Email: emailValue,
      password: passwordValue,
    });
    const headerrs = {
      "Content-Type": "application/json",
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headerrs,
    }).then((response) => {
      if (response.ok) {
        alert("You singin in succesfully");
        window.location.href = "../dashbord/dashbord.html";
      }
    });
  }
}
singIn();
