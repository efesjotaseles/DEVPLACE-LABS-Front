import { useEffect, useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function PublicationCard() {
  const cardText = "ACÁ VA EL TEXTO DE LA PUBLICACIÓN";
  const [favedState, setFavedState] = useState(false);
  const [likeValue, setLikeValue] = useState(0);
  const [likeRadioChecked, setLikeRadioChecked] = useState(false);

  const likeRadios = [
    {
      name: "Like",
      value: 1,
      variant: "outline-success",
    },
    { name: "Dislike", value: 2, variant: "outline-danger" },
  ];
  useEffect(() => {
    console.log(`Initial values: ${likeValue} | ${likeRadioChecked}`);
  }, []);

  const handleFavChange = () => {
    setFavedState(!favedState);
    //TODO endpoint with backend
  };

  //TODO fix to uncheck button on change
  const handleLikeRadioChange = (e) => {
    const value = e.currentTarget.value;
    console.log(`Values before if: ${likeValue} | ${likeRadioChecked}`);
    if (value !== likeValue) {
      setLikeValue(value);
      setLikeRadioChecked(true);
      console.log(`Values changes when value !== likeValue: ${likeValue} | ${likeRadioChecked}`);
    } else {
      setLikeValue(0);
      setLikeRadioChecked(false);
      console.log(`Values changes when value === likeValue: ${likeValue} | ${likeRadioChecked}`);
    }
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
                onClick={(e) => {
                  handleLikeRadioChange(e);
                }}
                value={likeRadio.value}
                checked={likeRadioChecked}
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
