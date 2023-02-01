import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserImage from "../UserImage";
import './friend.css';
import { setFriends } from "../../store";



const Friend = ({ friendId, name, userPicturePath }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
  

    const isFriend = friends.find((friend) => friend._id === friendId);

    const patchFriend = async () => {
      const response = await fetch(
        `http://localhost:3030/users/${_id}/${friendId}`,
        {
          method: "PATCH",
          headers: {
            "x-access-token":`${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      dispatch(setFriends({ friends: data }));
    };

    return (
      <div className="flexBetween">
        <div className="flexBetween" gap='1rem'>
          
        <UserImage image={userPicturePath} size="55px" />
            <p className="nick">
              {name}
            </p>
            
          
          
          
        </div>
        
        {isFriend ? (
          <button type="button" className="btn btn-danger btn-circle btn-xl" onClick={() => patchFriend()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-dash-fill" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
        </button>
        ) : (
          <button type="button" className="btn btn-success btn-circle btn-xl" onClick={() => patchFriend()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          </button>
        )}
          
          
      </div>
    );
  };
  
  export default Friend;