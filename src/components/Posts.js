import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts))
  }, [])
  return (
    <>
      <h1>Posts</h1>
      <p>View our posts</p>
      <div className='posts-body'>
        {
          posts.map(item => (
            <Link data-testid="link" key={item.id} to={`/posts/${item.id}`}>
              <li>{item.title}</li>
            </Link>))
        }
      </div>
    </>
  )
}

export default Posts