import React from 'react'
import { Link } from 'react-router-dom';

function card({ data }) {
    console.log(data);
    return (
        <div className="posts-tile">
            <div className="top">
                <img src="https://picsum.photos/400/200" alt="Blog-img"></img>
            </div>
            <div className="title">
                <span>{data.title}</span>
            </div>
            <div className="writer">
                <span>By: {data.userId}</span>
            </div>
            
            <Link to={`/posts/${data.id}`}>
                <button>Read More</button>
            </Link>
        </div>
    );
}

export default card
