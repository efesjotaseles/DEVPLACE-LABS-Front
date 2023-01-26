import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

export default function Home() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">Social-Place</span>
            </div>
            <div className="topbarCenter">
                <div className='searchbar'>
                <Search className='searchIcon'/>
                <input placeholder="Search for friend , post or video" className="searchInput" />
            </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLinks">HomePage</span>
                    <span className="topbarLinks">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div> <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">5</span>
                    </div>
                </div>
            </div>
        </div>
    );
}