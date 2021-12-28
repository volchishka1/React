import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

let postsElement = 
    props.posts.map ( p => <Post message={ p.message } likesCount={ p.likesCount } />)

    return (
        <div class={ s.postsBlock }>
            <div>
               <h3 className={ s.myPosts }>My posts</h3> 
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
            <div className={ s.posts }>
                
                {postsElement}

            </div>
        </div>
    )
}

export default MyPosts;