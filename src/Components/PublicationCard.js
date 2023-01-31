import { useEffect, useState } from "react";
import { Col, Container, Row, ToggleButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function PublicationCard() {
  
  //useStates
  const [content, setContent] = useState();
  const [user, setUser] = useState();
  const [likeState, setLikeState] = useState(false);
  const [dislikeState, setDislikeState] = useState(false);
  const [favedState, setFavedState] = useState(false);

  useEffect(() => {
    setContent("Contenido de la publicación...");
    setUser("fulanito");
  });

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
  }

  function handleDislikeChange() {
    setDislikeState(!dislikeState);
    if (likeState) {
      setLikeState(false);
    }
  }

  function handleFavChange() {
    setFavedState(!favedState);
    //TODO endpoint with backend
  }

  return (
    <Card border="primary" bg="light" style={{ width: "40%" }}>
      <Card.Body style={{ minHeight: "20vh" }}>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container>
          <Row>
            <Col>
              <Card.Text className="text-muted">{user}</Card.Text>
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
  );
}

export default PublicationCard;
