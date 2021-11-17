import "./style.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { firestore } from "../../firebase";

const ItemListContainer = (props) => {
  let { id } = useParams();
  const [info, setInfo] = useState([]);
  const { greeting } = props;

  useEffect(() => {
    const prom = firestore.collection("productos").where('Type','==',id).get();
    
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
  }, [id]);

 
  return (
    <>
      <div className="greeting">
        <p>{greeting}</p>
      </div>
      <div className="listContainer">
        <ItemList titleInfo={id} totalMovies={info} />
      </div>
    </>
  );
};

export default ItemListContainer;
