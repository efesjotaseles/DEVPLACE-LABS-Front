import PublicationCard from "../Components/PublicationCard";

export function PRUEBA() {
  return (
    <PublicationCard
      publication={{
        content: "Publicaion numero 1",
        userId: "63dc3c58461c82cb64b90b82",
        id: "63dac1297246eb43e261b9bd",
        favedBy: ["63dc3c58461c82cb64b90b82"],
        likedBy: [""],
        dislikedBy: ["63dc3c58461c82cb64b90b82"]
      }}
      requestingUser={{ userId: "63dc3c58461c82cb64b90b82" }}
    />
  );
}
