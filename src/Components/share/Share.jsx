import "./share.css";
import {PermMedia, Label, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/03/28/15222363072573.jpg"></img>
          <input placeholder="What's in your mind?" type="text" className="shareInput"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="rgb(186, 45, 11)" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>    
            </div>
            <div className="shareOption">
              <Label htmlColor="rgb(14, 113, 204)" className="shareIcon" />
              <span className="shareOptionText">Tag</span>    
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="rgb(241, 154, 62)" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>    
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>   
      </div>
    </div>
  );
}