import Feed from "../../Components/Feed/Feed"
import Sidebar from "../../Components/sidebar/Sidebar";
import Rightbar from "../../Components/rigthbar/Rightbar";
import "./home.css"

export function Home() {
    return(
        <div className="homeContainer">
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    )
}