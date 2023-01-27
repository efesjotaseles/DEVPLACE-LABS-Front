import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function PublicationCard() {
  const cardText = "ACÁ VA EL TEXTO DE LA PUBLICACIÓN";
  const [favedState, setFavedState] = useState(false);
  const [likeValue, setLikeValue] = useState(0);

  const likeRadios = [
    {
      name: "Like",
      value: 1,
      variant: "outline-success",
    },
    { name: "Dislike", value: -1, variant: "outline-danger" },
  ];

  const handleFavChange = () => {
    setFavedState(!favedState);
    //TODO endpoint with backend
  };

  //TODO fix to uncheck button on change
  const handleLikeRadioChange = (likeRadioValue) => {
    //setLikeValue(likeRadioValue);
    likeValue === likeRadioValue ? setLikeValue(0) : setLikeValue(likeRadioValue);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>{cardText}</Card.Text>
        <ButtonGroup>
          {likeRadios.map((likeRadio, idx) => {
            return (
              <ToggleButton
                key={idx}
                id={`likeRadio-${idx}`}
                type="radio"
                variant={likeRadio.variant}
                name="likeRadio"
                value={likeRadio.value}
                checked={likeValue === likeRadio.value}
                onChange={() => {
                  handleLikeRadioChange(likeRadio.value);
                }}
              >
                {likeRadio.name}
              </ToggleButton>
            );
          })}
        </ButtonGroup>
        <ToggleButton
          id="fav-check"
          type="checkbox"
          variant={favedState ? "warning" : "outline-warning"}
          checked={favedState}
          onChange={handleFavChange}
        >
          Fav!
        </ToggleButton>
      </Card.Body>
    </Card>
  );
}

export default PublicationCard;
