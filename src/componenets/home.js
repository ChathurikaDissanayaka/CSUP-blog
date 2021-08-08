import React from 'react';
import Card from './card';
import UseFetch from './UseFetch';

function home() {

    const { data: posts } = UseFetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
    
    return (
        <div className="posts-list">
            <div className="posts-container">
                {posts ? (
                    posts.map((post) => (
                    <Card data={post} key={post.id} />
                    ))) : (
                        <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default home
