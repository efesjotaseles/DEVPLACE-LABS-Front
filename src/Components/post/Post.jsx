import "./post.css";
import {
  MoreVert,
  ThumbUp,
  ThumbUpOutlined,
  ThumbDown,
  ThumbDownOutlined,
  FavoriteBorderOutlined,
  Star,
  StarOutline,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const apiUsers = axios.create({ baseURL: "http://localhost:3030/users/" });
const apiPublications = axios.create({
  baseURL: "http://localhost:3030/publications/",
});

function Post(props) {
  //useStates
  const [publication, setPublication] = useState({});
  const [publicationUser, setPublicationUser] = useState();

  const [likeState, setLikeState] = useState(false);
  const [dislikeState, setDislikeState] = useState(true);
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

  //Subcomponentes
  function LikeButton() {
    let button;
    if (likeState) {
      button = <ThumbUp onClick={handleLikeClick} />;
    } else {
      button = <ThumbUpOutlined onClick={handleLikeClick} />;
    }

    return button;
  }

  function DislikeButton() {
    let button;
    if (dislikeState) {
      button = <ThumbDown onClick={handleDislikeClick} />;
    } else {
      button = <ThumbDownOutlined onClick={handleDislikeClick} />;
    }

    return button;
  }

  function FavButton() {
    let button;
    if (favedState) {
      button = <Star onClick={handleFavClick} />;
    } else {
      button = <StarOutline onClick={handleFavClick} />;
    }

    return button;
  }

  //onClick Handles
  function handleLikeClick() {
    setLikeState(!likeState);
    if (dislikeState) {
      setDislikeState(false);
    }
    apiPublications.put(
      `like/id/${publication._id}/userId/${props.requestingUser.userId}`
    );
  }

  function handleDislikeClick() {
    setDislikeState(!dislikeState);
    if (likeState) {
      setLikeState(false);
    }
    apiPublications.put(
      `dislike/id/${publication._id}/userId/${props.requestingUser.userId}`
    );
  }

  function handleFavClick() {
    setFavedState(!favedState);
    apiPublications.put(
      `fav/id/${publication._id}/userId/${props.requestingUser.userId}`
    );
  }

  return (
    <div className="post" id={props.publication._id}>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="assets/person/1.jpeg" alt="" />
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
            <DislikeButton />
            <LikeButton />
            <FavButton />
            <span className="postLikeCounter">32 people likes it</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
