import { useEffect, useState } from "react";
import { Col, Container, Row, ToggleButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";

const apiUsers = axios.create({ baseURL: "http://localhost:3030/users/" });
const apiPublications = axios.create({
  baseURL: "http://localhost:3030/publications/",
});

function PublicationCard(props) {
  //useStates
  const [publication, setPublication] = useState({});
  const [publicationUser, setPublicationUser] = useState();

  const [likeState, setLikeState] = useState(false);
  const [dislikeState, setDislikeState] = useState(false);
  const [favedState, setFavedState] = useState(false);

  //onMount
  useEffect(() => {
    setPublication(props.publication);
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

  //Subcomponents

  function LikeButton() {
    return (
      <ToggleButton
        id="like-bttn"
        type="checkbox"
        variant={likeState ? "success" : "outline-success"}
        checked={likeState}
        onChange={handleLikeChange}
      >
        Like
      </ToggleButton>
    );
  }

  function DislikeButton() {
    return (
      <ToggleButton
        id="dislike-bttn"
        type="checkbox"
        variant={dislikeState ? "danger" : "outline-danger"}
        checked={dislikeState}
        onChange={handleDislikeChange}
      >
        Dislike
      </ToggleButton>
    );
  }

  function FavButton() {
    return (
      <ToggleButton
        id="fav-check"
        type="checkbox"
        variant={favedState ? "warning" : "outline-warning"}
        checked={favedState}
        onChange={handleFavChange}
      >
        Fav!
      </ToggleButton>
    );
  }

  //Handles

  function handleLikeChange() {
    setLikeState(!likeState);
    if (dislikeState) {
      setDislikeState(false);
    }
    apiPublications.put(
      `like/id/${publication.id}/userId/${props.requestingUser.userId}`
    );
  }

  function handleDislikeChange() {
    setDislikeState(!dislikeState);
    if (likeState) {
      setLikeState(false);
    }
    apiPublications.put(
      `dislike/id/${publication.id}/userId/${props.requestingUser.userId}`
    );
  }

  function handleFavChange() {
    setFavedState(!favedState);
    apiPublications.put(
      `fav/id/${publication.id}/userId/${props.requestingUser.userId}`
    );
  }

  return (
    <div className="container">
    <Card border="primary" bg="light" style={{ width: "40%" }}>
      <Card.Body style={{ minHeight: "20vh" }}>
        <Card.Text>{publication.content}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container>
          <Row>
            <Col>
              <Card.Text className="text-muted">{publicationUser}</Card.Text>
            </Col>
            <Col>
              <LikeButton />
              <DislikeButton />
              <FavButton />
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default PublicationCard;
