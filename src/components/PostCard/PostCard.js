import React from 'react';

import "./PostCard.css";

const PostCard = (props) => {
    return (
        // <div className="post-card" onClick={() => console.log("Clicked")}>
        // <div className="post-card" onClick={() => props.clicked(props.post)}></div>
        <div className="post-card" >
            <h3>{props.post.title}</h3>
            <p>lorem ipsum dolor meta it...</p>
        </div>
    );
};

export default PostCard;