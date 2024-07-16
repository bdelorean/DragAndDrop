const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder")


item.addEventListener('dragstart', dragstart);
item.addEventListener("dragend", dragend);


for ( const placeholder of placeholders){
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);

}


function dragstart(e) {
  console.log('dragstart');
  e.target.classList.add("hold"); // e.target ne da elementul in sine la care putem adauga sau elimina clase sau ma rog sa il manipulam

  setTimeout(() => {  // Amână adăugarea clasei "hide" pentru a permite inițierea corectă a evenimentului de drag
    e.target.classList.add("hide");
  },0);
}

function dragend(e) {
  console.log('dragend');
  e.target.classList.remove("hold");
  e.target.classList.remove("hide");
}

function dragover(e){
e.preventDefault(); // Permite ca elementul să fie o țintă validă pentru drop
}

function dragenter(e){
  e.target.classList.add("hovered");
}

function dragleave(e){
  e.target.classList.remove("hovered");
}

function drop(e){
  e.target.append(item)
  e.target.classList.remove("hovered")
}
