const submit = document.getElementById("Submit");
const prev = document.getElementById("prev");

submit.addEventListener("click", submitFunc);
function submitFunc() {
  window.location.href = "../../taskPage/taskmanager.html";
}

prev.addEventListener("click", prevFunc);
function prevFunc() {
  window.location.href = "../../dashbord/dashbord.html";
}
