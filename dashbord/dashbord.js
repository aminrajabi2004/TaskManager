const ownerr = document.getElementById("owner");
const Adminn = document.getElementById("Admin");
const Clinett = document.getElementById("Clinet");
const user = document.getElementById("skip");

ownerr.addEventListener("click", ownerrfunc);

function ownerrfunc() {
  window.location.href = "../dashbord/owner/owner.html";
}

Adminn.addEventListener("click", adminfunc);

function adminfunc() {
  window.location.href = "../dashbord/admin/admin.html";
}

Clinett.addEventListener("click", clinetfunc);

function clinetfunc() {
  window.location.href = "../dashbord/clinet/clinet.html";
}

user.addEventListener("click", userfunc);

function userfunc() {
  window.location.href = "../taskPage/taskmanager.html";
}
