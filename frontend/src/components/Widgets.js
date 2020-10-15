import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterTweetEmbed,TwitterShareButton} from 'react-twitter-embed';
export default function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
                
            </div>
            <div className="widgets_container">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1313974379999494144"}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="dharmangsolanki" options={{height:400}}/>
                <TwitterShareButton url={"https://www.facebook.com/"}/>
            </div>

        </div>
    )
}
