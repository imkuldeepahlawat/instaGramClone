import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./posts/Post";
const Timeline = () => {
  const [posts, setposts] = useState([
    {
      user: "kuldeep",
      postImage: "https://cdn.pixabay.com/photo/2016/11/23/18/17/men-1854191_1280.jpg",
      likes: 102,
      timestamp: "2d",
    },
    {
      user: "lover",
      postImage: "https://cdn.pixabay.com/photo/2015/08/13/19/39/children-887393_1280.jpg",
      likes: 122,
      timestamp: "8h",
    },
    {
      user: "johndoe",
      postImage: "https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg",
      likes: 1200,
      timestamp: "1d",
    },
    {
      user: "johnbhai",
      postImage: "https://cdn.pixabay.com/photo/2019/03/12/12/47/people-4050698_1280.jpg",
      likes: 11,
      timestamp: "12h",
    },
    
  ]);
  return (
    <div className="timeline">
      {/* left  */}
      <div className="timeline__left">
        <div className="timeline__posts">
        {
          posts.map(post =>{
            return <Post user={post.user} image={post.postImage} like={post.likes} timestamp={post.timestamp} />
          })
        }
          
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
