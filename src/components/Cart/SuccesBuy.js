import { useEffect , useState } from "react";
import { useHistory } from "react-router"


const SuccesBuy = (props) => {
    const{id}=props
    const { push } = useHistory();
    function idDelete (){
        setTimeout(() => {
          props.setOrderId(null)
          push("/");
        }, 5000);
    }
    const [counter, setCounter] = useState(4);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div className='succesBuy'>
            <h1 className='succesMsg'>Muchas gracias por su compra</h1>
            <h3 className='succesMsg'>Su orden de compra es la n° {id}</h3>
            <button className='succesBtn' onClick={idDelete()}> Volver al home </button>
            <p className='counter'>O sino esperá {counter} segundos , y serás teletransportado</p>
            <iframe title='succes' src="https://giphy.com/embed/TOS8gBHBifK0" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
   
        </div>
    )
}

export default SuccesBuy
