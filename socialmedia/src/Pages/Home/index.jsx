
import { useSelector } from "react-redux";
import FriendListWidget from "../../components/FriendList";

const HomePage = () => {
  
  const { _id } = useSelector((state) => state.user);

  return (
    
            <FriendListWidget userId={_id} />
       
  );
};

export default HomePage;