import "./post.css";
import {  MoreVert, ThumbUp} from "@material-ui/icons";
import { useState , useEffect } from "react";
import axios from "axios";
//import {ThumbUpIcon} from '@mui/icons-material/ThumbUp';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const apiUsers = axios.create({ baseURL: "http://localhost:3030/users/" });
const apiPublications = axios.create({
  baseURL: "http://localhost:3030/publications/",
});

function Post(props) {
  //useStates
  const [publication, setPublication] = useState({});
  const [publicationUser, setPublicationUser] = useState();

  const [likeState, setLikeState] = useState(false);
  const [dislikeState, setDislikeState] = useState(false);
  const [favedState, setFavedState] = useState(false);
  
//onMount
useEffect(() => {
  setPublication(props.publication);
  //console.log(props.publication);
  getUserName(props.publication.userId);
  //Chequeamos si userId hizo FAV en la publicación
  props.publication.favedBy.includes(props.requestingUser.userId)
    ? setFavedState(true)
    : setFavedState(false);
  //Chequeamos si userId hizo LIKE en la publicación
  props.publication.likedBy.includes(props.requestingUser.userId)
    ? setLikeState(true)
    : setLikeState(false);
  //Chequeamos si userId hizo DISLIKE en la publicación
  props.publication.dislikedBy.includes(props.requestingUser.userId)
    ? setDislikeState(true)
    : setDislikeState(false);
}, []);

function getUserName(id) {
  apiUsers
    .get(id)
    .then((response) => {
      setPublicationUser(response.data.name);
    })
    .catch((error) => {
      console.log(error);
    });
}

  
  return (
    <div className="post" id={props.publication.id}>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/person/1.jpeg" alt=""/>
            <span className="postUsername">{publicationUser}</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{publication.content}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <ThumbUp />
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