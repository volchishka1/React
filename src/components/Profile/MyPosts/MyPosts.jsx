import React from 'react'
import { addPostCreator, updateNewTextPostCreator } from '../../../redux/state'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
  let postsElement = props.posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ))

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    const action = updateNewTextPostCreator(text);
    props.dispatch(action)
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <h3 className={s.myPosts}>My posts</h3>
      </div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder="Enter Your post"
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  )
}

export default MyPosts
