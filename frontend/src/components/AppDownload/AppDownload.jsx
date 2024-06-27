import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    // Mobile app
    <div className="app-download" id="app-download">
      <p>
        Best Products At Your Finger Tips <br />
        Download PCTek App
      </p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
