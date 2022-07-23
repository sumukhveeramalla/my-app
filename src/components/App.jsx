import React, {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){

    const [notes,setNotes] = useState([]);

    function addNote(input){
        setNotes(prevNotes => {
            return [...prevNotes,input];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return (prevNotes.filter((noteItem,index)=>{return (index != id);}));
        })
    }
    
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((noteItem,index)=>{return(
                <Note key={index} id={index} title={noteItem.title} content={noteItem.content} delete={deleteNote}/>
            );})}
            
            <Footer />
        </div>
    );
    
}

export default App;

