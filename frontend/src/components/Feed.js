import React, {useState,useEffect} from 'react';

import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from './Firebase';

export default function Feed() {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc=>doc.data()))
        ))
    },[]);
    return (
        <div className ="feed">
            <div className ="feed_header">
                <h2> Home </h2>
                <TweetBox className="feed_tweetBox"/> 
            </div>
            {posts.map(post => (
                <Post 
                avatar={post.avatar}
                displayName={post.displayName}
                username={post.username}
                verified={post.isVerified}
                text={post.text}
                media={post.media}
                />
            ))}
        
        </div>
    )
}
