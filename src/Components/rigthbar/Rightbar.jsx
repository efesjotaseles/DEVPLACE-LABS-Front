import "./rightbar.css";
import Card from 'react-bootstrap/Card';

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <h1>Home rightbar</h1>
      </>
    )
  } 

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">La Plata</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Mar del Plata</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Status:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  )
}