const workspaceInput = document.querySelector(".workspace-input");
const workspaceButton = document.querySelector(".workspace-button");
const workspaceContainer = document.querySelector(".workspace-container");
const workspaceList = document.querySelector(".workspace-list");

const cont = document.getElementById("cont");
const mainh = document.querySelector("mainh");

workspaceButton.addEventListener("click", addWorkspace);

function addWorkspace(event) {
  event.preventDefault();
  const workspaceDiv = document.createElement("div");

  const newWorkspace = document.querySelector(".a-work");
  newWorkspace.innerText = workspaceInput.value;

  workspaceDiv.appendChild(newWorkspace);
  workspaceInput.value = "";

  workspaceList.appendChild(workspaceDiv);

  newWorkspace.addEventListener("click", gotowork);

  function gotowork() {
    document.getElementById(
      "heloo"
    ).innerHTML = `<h2 id="This-week">This week</h2>
         <div class="table">
           <div class="element" id="tab1">
             <h5>Task</h5>
             <input class="inpuu" type="text" id="inpuu1" />
             <input class="inpuu" type="text" />
             <input class="inpuu" type="text" />
             <input class="inpuu" type="text" />
           </div>
           <div class="element" id="tab2">
             <h5>Owner</h5>
             <input class="inpuu2" id="inpuu1" type="text" />
             <input class="inpuu2" type="text" />
             <input class="inpuu2" type="text" />
             <input class="inpuu2" type="text" />
           </div>
           <div class="element" id="tab3">
             <h5>Date</h5>
             <input class="inpuu2" id="inpuu1" type="text" />
             <input class="inpuu2" type="text" />
             <input class="inpuu2" type="text" />
             <input class="inpuu2" type="text" />
           </div>
           <div class="element" id="tab4">
             <h5>Status</h5>
             <input class="inpuu2" id="inpuu1" type="text" />
             <input class="inpuu2" type="text" />
             <input class="inpuu2" type="text" />
             <input class="inpuu2" type="text" />
           </div>
           <div class="element" id="tab5">
             <h5><button id="addd">+</button></h5>
             <input class="inpuu3" id="inpuu1" type="text" />
             <input class="inpuu3" type="text" />
             <input class="inpuu3" type="text" />
             <input class="inpuu3" type="text" />
           </div>
         </div>
         <h2 id="This-week">This week</h2>
         <div class="table2">
           <div class="element2" id="tab1">
             <h5>Task</h5>
             <input class="inpuu" type="text" id="inpuu1" />
             <input class="inpuu" type="text" />
           </div>
           <div class="element2" id="tab2">
             <h5>Owner</h5>
             <input class="inpuu2" id="inpuu1" type="text" />
             <input class="inpuu2" type="text" />
           </div>
           <div class="element2" id="tab3">
             <h5>Date</h5>
             <input class="inpuu2" id="inpuu1" type="text" />
             <input class="inpuu2" type="text" />
           </div>
           <div class="element2" id="tab4">
             <h5>Status</h5>
             <input class="inpuu2" id="inpuu1" type="text" />
             <input class="inpuu2" type="text" />
           </div>
           <div class="element2" id="tab5">
             <h5><button id="addd">+</button></h5>
             <input class="inpuu3" id="inpuu1" type="text" />
             <input class="inpuu3" type="text" />
           </div>
         </div>
         `;
    document.getElementById("sls").innerHTML = "";
  }
}
