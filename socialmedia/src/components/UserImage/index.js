
const UserImage = ({ image, size = "60px" }) => {
  return (
    <div width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3030/assets/${image}`}
      />
    </div>
  );
};

export default UserImage;