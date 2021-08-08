import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import UseFetch from './UseFetch';

function BlogPage() {

    const {id} = useParams();
    const history = useHistory();

    const { data: post } = UseFetch(
        'https://jsonplaceholder.typicode.com/posts/' + id
    );

    const deletePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        }).then(() => {
            alert('Deleted');
            history.push('/');
        });
    };

    return (
        <div className="content">
            {post && (
                <>
                    {' '}
                    <img src="https://picsum.photos/500/400" alt="header"/>
                    <div className='header-text'>
                        <h1>{post.title}</h1>
                        <div className="btn-section">
                            <button className="delete" onClick={deletePost}>Delete</button>
                        </div>
                        <p>{post.userId}</p>
                        <div className="text-content">
                            <p>{post.body}</p>
                        </div>
                    </div>
                </>
            )}
            
        </div>
    )
}

export default BlogPage
