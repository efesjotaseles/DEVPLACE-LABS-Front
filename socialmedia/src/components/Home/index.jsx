
import { useSelector } from "react-redux";
import FriendListWidget from "../FriendList";

const HomePage = () => {
  
  const { _id } = useSelector((state) => state.user);

  return (
    
            <FriendListWidget userId={_id} />
       
  );
};

export default HomePage;