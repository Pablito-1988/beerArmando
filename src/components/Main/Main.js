import video from "./background.mp4";
import "./mainStyle.css";
import background from "./backgroundImage.jpg";
import { useEffect , useState} from "react";
import { firestore } from "../../firebase";
import Item from "../Item/Item";
import Aos from "aos";
import "aos/dist/aos.css";



const Main = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [info, setInfo] = useState([]);
  

  useEffect(() => {
    const prom = firestore.collection("productos").where('Type','==','special').get();
    
    prom
      .then((documento) => {
        setInfo(
          documento.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch(() => {
        console.log("no se cumplió la promesa");
      });
  }, []);

  return (
    <>
      <div className="mainResponsive">
        <img className="backgroundImage" src={background} alt="" />
      </div>
      <div className="">
        <div className="mainQuote">
          <h1> Volvé al pasado sin un delorean, alquilá un vhs</h1>
          <i id='arrow' className="fas fa-arrow-circle-down"></i>
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
        <div className="mainContainer">
          <section>
            <h1 id='link' className='mainSubTitle'>Más alquilados</h1>
            <div data-aos='fade-right' className="mostSell">
              {info.filter((item) => item.Special === "most").map((item) => (<Item key={item.id} poster={item.Poster} id={item.id} titulo={item.Title} />))}
            </div>
          </section>
          <section>
            <h1 className='mainSubTitle'>Nuevos ingresos</h1>
            <div data-aos='fade-right' className="new">
            {info.filter((item) => item.Special === "new").map((item) => (<Item key={item.id} poster={item.Poster} id={item.id} titulo={item.Title} />))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Main;
