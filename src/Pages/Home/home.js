import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/sidebar/Sidebar";
import Rightbar from "../../Components/rigthbar/Rightbar";
import "./home.css";

export function Home() {
  return (
    <div className="homeContainer">
      <Sidebar />
      <Feed
        userIdArray={["63d29efe9fdab0e31b2d7b0d"]}
        requestingUser={{userId : "63d29efe9fdab0e31b2d7b0d"}}
      />
      <Rightbar />
    </div>
  );
}
