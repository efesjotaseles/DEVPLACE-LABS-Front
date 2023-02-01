
import Friend from "../Friend/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends} from '../../store';


const FriendListWidget = ({ userId }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
  
    const getFriends = async () => {
      const response = await fetch(
        `http://localhost:3030/users/${userId}/friends`,
        {
          method: "GET",
          headers: { "x-access-token":`${token}` },
        }
      );
      const data = await response.json();
      dispatch(setFriends({ friends: data }));
    };
  
    useEffect(() => {
      getFriends();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
    return (
      <div>
        <h2
        >
          Friend List
        </h2>
        <div  >
          {friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.fname} ${friend.lname}`}
              userPicturePath={friend.picturePath}
            />
            
          ))}
        </div>
      </div>
    );
  };
  
  export default FriendListWidget;
