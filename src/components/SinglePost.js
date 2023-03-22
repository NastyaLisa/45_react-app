import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getPosts = async (id) => {
      const post = await fetch(`https://dummyjson.com/posts/${id}`);
      const jsonPosts = await post.json();

      if (!jsonPosts.id) {
        navigate("/posts");
      } else {
        setPosts(jsonPosts);
      }
    };

    getPosts(id);
  }, [id, navigate]);

  return (
    <div>
      {posts && (
        <>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </>
      )}
    </div>
  );
};
export default SinglePost;
