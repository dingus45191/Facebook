import React, { useEffect } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import { useState } from 'react';

function Feed() {
    const[posts, setPosts] = useState([]);

   useEffect(() => {
     db.collection('posts').onSnapshot(snapshot =>{
         setPosts(snapshot.docs.map((doc => ({id: doc.id , data: doc.data()}))));
     })
    },[])
    return (
        <div className="Feed">

           <StoryReel/>
           <MessageSender />
           {posts.map(post => (
               <Post 
                 key= {post.data.id}
                 profilePic= {post.data.profilePic}
                 message= {post.data.message}
                 userName= {post.data.userName}
                 image= {post..data.image}
                 timestamp= {post.timestamp}
               />
           ))}


        </div>
    );
}

export default Feed;
