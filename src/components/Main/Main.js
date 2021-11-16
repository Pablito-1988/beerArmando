import video from "./background.mp4";
import "./mainStyle.css";
import background from "./backgroundImage.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className='mainResponsive'>
          <img className='backgroundImage' src={background} alt="" />
      </div>
      <div className=''>
        <div className="mainQuote">
          <h1> Volvé al pasado sin un delorean, alquilá un vhs</h1>
        </div>
        <div className="video">
          <video
            autoPlay="autoPlay"
            loop="loop"
            muted
            preload="auto"
            id="miVideo"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Main;
