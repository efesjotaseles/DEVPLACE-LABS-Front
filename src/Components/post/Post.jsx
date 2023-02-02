import "./post.css";
import {  MoreVert, Bookmark } from "@material-ui/icons";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
//import { Users } from "../../dummyData";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post(post) {
  const [like, setLike] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  const [save, setSave] = useState(0)
  const [isSaved, setIsSave] = useState(false)

  const saveHandler = () => {
    setSave(isSaved ? save -1 : save +1)
    setIsSave(!isSaved)

  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/person/1.jpeg" alt=""/>
            <span className="postUsername">Safak Kocaoglu</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post :/</span>
          <img className="postImg" src="assets/post/1.jpeg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png"/>
            <img className="likeIcon" src="assets/heart.png"/>
            <span className="postLikeCounter">32 people likes it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;


/*
export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <Bookmark className="sidebarIcon" onClick={likeHandler} >
            </Bookmark>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
*/