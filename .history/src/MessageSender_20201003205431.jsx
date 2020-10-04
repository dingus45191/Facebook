import React ,{ useState}from 'react';
import "./MessageSender.css";
import {Avatar} from "@material-ui/core";
import {InsertEmoticon, PhotoLibrary, Videocam} from "@material-ui/icons";
import {useStateValue} from "./StateProvider";


function MessageSender() {
    const[input,setInput]= useState('');
    const[imgUrl, setUrl]= useState('');

    const [{ user },dispatch]= useStateValue();



    const handleSubmit= e=>{
     e.preventDefault();


     //some clever db stuff


        setInput('')
        setUrl('')

    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        value={input}
                        onChange={e => (setInput(e.target.value))}
                        className={"messageSender__input"}
                        placeholder={`What's on your mind?`}
                        type="text"/>

                    <input
                        value={imgUrl}
                        onChange={e => (setUrl(e.target.value))}
                        placeholder={'imageURL (optional)'}
                        type="text"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                   <div className="messageSender__option">
                       <Videocam  style={{ color:"red"}}/>
                       <h3>Live Video</h3>
                   </div>
                    <div className="messageSender__option">
                        <PhotoLibrary style={{color:"green"}}/>
                        <h3>Photo/Video</h3>
                    </div>
                     <div className="messageSender__option">
                         <InsertEmoticon style={{color:"orange"}} />
                         <h3>Feeling/Activity</h3>
                     </div>

            </div>
        </div>
    );
}
export default MessageSender;
