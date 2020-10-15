

import { Avatar, Button } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import db from './Firebase';
import './TweetBox.css';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    
    const [tweetImage, setTweetImage] = useState("");
    
    const postTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:"Dharmang Solanki",
            username:"dharmang.exe",
            verified:true,
            text : tweetMessage,
            media:tweetImage,
            avatar: '/images/profile.jpg',
        });
        setTweetImage("");
        setTweetMessage("");
    }
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src='/images/profile.jpg'/>
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?" 
                    type="text"/> 
                </div>
                <input className="tweetBox_imageInput" 
                    placeholder="(Optional) Enter the image URL"
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    /> 
                <Button className="tweetBox_tweetButton"
                 type='submit'
                 onClick={postTweet}> Tweet </Button>
            </form>
        </div>
    )
}

export default TweetBox
