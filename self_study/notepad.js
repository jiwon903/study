const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveNotes);

const cleanAllButton = document.getElementById('clean-all-button');
cleanAllButton.addEventListener('click', cleanAllNotes);


function saveNotes() {
    const notes = document.getElementById('notes').value;
    const savedNotes = localStorage.getItem('notes');
    const timestamp = new Date().toLocaleDateString();
    const newNote = `${timestamp} ${notes}`;
    if (savedNotes) {
      localStorage.setItem('notes', savedNotes + '\n' + newNote);
    } else {
      localStorage.setItem('notes', newNote);
    }
    alert('Notes saved!');
    displayNotes();
  }
  


function displayNotes() {
    const savedNotes = localStorage.getItem('notes');
    const savedNotesDiv = document.getElementById('saved-notes');
    savedNotesDiv.innerHTML = '';
    const savedNotesArray = savedNotes.split('\n');
    
    savedNotesArray.forEach((newNote, index) => {
      const noteP = document.createElement('p');
      noteP.textContent = newNote;
      savedNotesDiv.appendChild(noteP);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        deleteNote(index);
      });
      savedNotesDiv.appendChild(deleteButton);
    });
  }
  


function cleanAllNotes() {
  localStorage.removeItem('notes');
  displayNotes();
}

function deleteNote(index) {
    const savedNotes = localStorage.getItem('notes');
    const savedNotesArray = savedNotes.split('\n');
    savedNotesArray.splice(index, 1);
    localStorage.setItem('notes', savedNotesArray.join('\n'));
  
    const savedNotesDiv = document.getElementById('saved-notes');
    const noteToDelete = savedNotesDiv.childNodes[index * 2];
    const deleteButtonToDelete = savedNotesDiv.childNodes[index * 2 + 1];
  
    noteToDelete.remove();
    deleteButtonToDelete.remove();
  
    if (savedNotesDiv.childNodes.length === 0) {
      localStorage.removeItem('notes');
    }
  
    displayNotes();
  }
  