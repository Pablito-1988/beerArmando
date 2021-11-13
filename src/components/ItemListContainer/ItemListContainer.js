import "./style.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { firestore } from "../../firebase";

const ItemListContainer = (props) => {
  let { id } = useParams();
  const [info, setInfo] = useState(null);
  const { greeting } = props;

  useEffect(() => {
    const prom = firestore.collection("productos").get();
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

  const filter = [];
  if (info) {
    info.filter((item) => {
      if (item.Type === id) {
      filter.push(item)
      } return item;
    });
  }

  return (
    <>
      <div className="greeting">
        <p>{greeting}</p>
      </div>
      <div className="listContainer">
        <ItemList titleInfo={id} totalMovies={filter} />
      </div>
    </>
  );
};

export default ItemListContainer;
