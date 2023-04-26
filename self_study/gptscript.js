// Retrieve saved notes from local storage and display them
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let noteList = document.getElementById("noteList");
for (let note of notes) {
  let li = createNoteElement(note);
  noteList.appendChild(li);
}

// Save the entered note to local storage and display it
function saveNote() {
  let note = document.getElementById("note").value.trim();
  if (note !== "") {
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    let li = createNoteElement(note);
    noteList.appendChild(li);
    document.getElementById("note").value = "";
  }
}

// Clear all saved notes from local storage and the UI
function clearNotes() {
  notes = [];
  localStorage.removeItem("notes");
  noteList.innerHTML = "";
}

// Remove a single note from local storage and the UI
function removeNoteElement(li, note) {
  let index = notes.indexOf(note);
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteList.removeChild(li);
}

// Create a list item element with a note and a Clear button
function createNoteElement(note) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = note;
  li.appendChild(span);
  let clearOneBtn = document.createElement("button");
  clearOneBtn.innerText = "Clear";
  clearOneBtn.addEventListener("click", () => {
    removeNoteElement(li, note);
  });
  li.appendChild(clearOneBtn);
  return li;
}
