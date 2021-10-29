import video from './background.mp4'
import './mainStyle.css'

const Main = () => {
    return (
        <div>
            <div className="video">
              <video autoPlay="autoPlay" loop="loop" muted preload="auto"id="miVideo">
              <source src={video} type="video/mp4"/> 
            </video>
          </div>
          
        </div>
    )
}

export default Main
