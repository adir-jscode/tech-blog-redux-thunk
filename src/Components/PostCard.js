import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const [readMore, setReadMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  let linkName = readMore ? "Read Less << " : "Read More >> ";

  return (
    <div class="flex flex-row justify-center">
      <div className="flex flex-row">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <img class="rounded-t-lg" src={post.picture[0]} alt="" />

          <div class="p-6">
            <Link to="/dashboard">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                {post.title}
              </h5>
            </Link>

            {readMore ? (
              post.details
            ) : (
              <p class="text-gray-700 text-base mb-4">
                {post.details.substring(0, 50)}{" "}
                <button onClick={() => setReadMore(!false)}>{linkName}</button>
              </p>
            )}

            {showLess ? (
              <p>{post.details.substring(0, 50)}</p>
            ) : (
              <>
                <p>{post.details}</p>
                <button onClick={() => setShowLess(!false)}>{linkName}</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
