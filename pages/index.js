import React ,{useState} from 'react'
import Head from 'next/head'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import TextArea from '../Components/TextArea'
import Notes from '../Components/Notes'
export default function Home() {
  // Array of Notes
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
      setNotes(previousNotes => [...previousNotes, newNote]); 
  }

  function deleteNote(id) {
      setNotes(previousNotes => {
          return previousNotes.filter((noteItem, index) => {
              return index !== id;
          });
      });
  }
  return (
    <div className=''>
      <main className='min-h-screen'>
          <TextArea  onAdd={addNote}/>
          
          {notes.map((note, index) => {
            return <Notes 
                      key={index}
                      id={index}
                title={note.title}
                content={note.content}
                onDelete={deleteNote}
            />
        })}
      </main>
      
    </div>
  )
}
