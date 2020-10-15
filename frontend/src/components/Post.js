import React from 'react'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import './Post.css';

export default function Post({avatar,displayName,username,verified,text,media}) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3> 
                            {displayName}
                            <span className="post_username">        
                                {verified && <VerifiedUserIcon className="post_badge" />} 
                                {username}
                            </span>

                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p> {text}</p>
                    </div>
                </div>

                <div className="post_media">
                    <img src={media} alt="Post Media"></img>
                </div>
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small"></ChatBubbleOutlineIcon>
                    <RepeatIcon fontSize="small"></RepeatIcon>
                    <FavoriteBorderIcon fontSize="small"></FavoriteBorderIcon>
                    <PublishIcon fontSize="small"></PublishIcon>
                </div>
            </div>
        </div>
    )
}
