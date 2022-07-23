import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props){
    const [isExpanded, setExpanded] = useState(false);
    const [note,setNote] = useState({title:"",content:""});

    function handleNote(event){
        const {name,value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote, [name]:value
            };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({title:"",content:""});
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }

    return(
        <div >
            <form className="create-note">
                {isExpanded && (
                    <input
                        name="title"
                        onChange={handleNote}
                        value={note.title}
                        placeholder="title"
                    />
                )}

                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleNote}
                    value={note.content}
                    placeholder="Enter Content"
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
                
            </form>
        </div>
    );
}

export default CreateArea;