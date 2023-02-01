import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserImage from "../UserImage";
import './friend.css';



const Friend = ({ friendId, name, userPicturePath }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
  
  
    const isFriend = friends.find((friend) => friend._id === friendId);
  

  
    return (
      <div className="flexBetween">
        <div className="flexBetween" gap='1rem'>
          
        <UserImage image={userPicturePath} size="55px" />
            <p className="nick">
              {name}
            </p>
            
          
        </div>
        
      </div>
    );
  };
  
  export default Friend;