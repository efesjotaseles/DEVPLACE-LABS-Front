import "./profile.css";
import Feed from "../../Components/Feed/Feed";
import Rightbar from "../../Components/rigthbar/Rightbar";
import Sidebar from "../../Components/sidebar/Sidebar";


export default function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
            <img className="profileUserImg" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/03/28/15222363072573.jpg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName" >Safak Kocaoglu</h4>
            <span className="profileInfoDesc" >Hellow! I'm using this cool new social network!!</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed />
          <Rightbar profile/>
        </div>
      </div>
    </div>
  );
}