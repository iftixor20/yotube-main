import "./Center-top.css";
import videoLogo from "../../../../../Assets/Images/video-logo.svg";
import dots from "../../../../../Assets/Images/dots.svg";
import notification from "../../../../../Assets/Images/notification.svg";
import userImage from "../../../../../Assets/Images/Userpic.svg";

function CenterTop() {
  return (
    <div className="Center-top">
      <div className="row d-flex justify-content-between">
        <div className="col-6">
          <form className="form">
            <label className="input-label d-flex">
              <input
                className="search-input w-100 p-2"
                type="text"
                placeholder="Search"
              />
            </label>
          </form>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <img
            className="img-responsive me-4"
            src={videoLogo}
            alt="videoLogo"
            width="27"
            height="20"
          />
          <img
            className="img-responsive me-4"
            src={dots}
            alt="dots"
            width="21"
            height="21"
          />
          <img
            className="img-responsive me-4"
            src={notification}
            alt="notification"
            width="22"
            height="26"
          />
          <img
            className="img-responsive me-4"
            src={userImage}
            alt="userImage"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
}

export default CenterTop;
