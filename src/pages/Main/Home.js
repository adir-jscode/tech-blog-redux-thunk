import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import PostCard from "../../Components/PostCard";
import Navbar from "../../layout/Main/Navbar";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <div
        onClick={() => <Navigate to="/dashboard" replace={true} />}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
      >
        {posts.map((post) => (
          <PostCard post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
