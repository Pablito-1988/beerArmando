import { Formik, Form, ErrorMessage } from "formik";
import { useRef } from "react";

const CartCounter = (props) => {
  
  const form = useRef()
  const moreButton = useRef()
  const purchaseButton = useRef()

  function showForm(){
    form.current.style = "display: flex"
    moreButton.current.style = "display: none"
  }
  function sendData (){
    props.sendOrder()
  }
  

  return (
    <div className="cartFinal">
      <div className="innerFinal">
        <h3 className="finalh3">Total: ${props.total},00.</h3>
        <h3 className="finalh3">Total de dias: {props.totalDias}.</h3>
        <Formik
          initialValues={{
            nombre: "",
            email: "",
            telefono: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.nombre) {
              errors.nombre = "Por favor colocá un tu nombre";
            }
            if (!values.email) {
              errors.email = "Por favor colocá un email";
            }
            if (!values.telefono) {
              errors.telefono = "Por favor colocá un teléfono";
            }
            return errors;
          }}
          onSubmit={(values) => {
            props.userData(values);
            form.current.style = "display: none"
            purchaseButton.current.style = "display: block"
           
          }}
        >
          {({ handleChange }) => (
            <Form>
              <div className='userForm' ref={form}>
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Ej: Jose Feliz Pelota"
                  onChange={handleChange}
                  name="nombre"
                  id="user"
                  className="inputForm"
                />

                <ErrorMessage
                  name="nombre"
                  className="errors"
                  component="span"
                />

                <label>Email</label>
                <input
                  type="email"
                  placeholder="Ej: jose_pelota@gmail.com"
                  onChange={handleChange}
                  name="email"
                  className="inputForm"
                />
                <ErrorMessage
                  name="email"
                  className="errors"
                  component="span"
                />
                <label>Teléfono</label>
                <input
                  type="number"
                  placeholder="Ej: 761-1143"
                  onChange={handleChange}
                  name="telefono"
                  className="inputForm"
                />
                <ErrorMessage
                  name="telefono"
                  className="errors"
                  component="span"
                />
                <button type="submit" className="endButton">
                  Confirmar datos
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <button className="delete" ref={moreButton} onClick={showForm}>
        Para finalizar agrega tus datos
        </button>
        <div className='purchase' ref={purchaseButton} >
          <p>Datos verificados   <i id='dataVerify' className="far fa-check-circle"></i></p>
          <button className='purchaseButton'  onClick={sendData} >
          Finalizar compra  
        </button>
        </div>
        <button className="delete" onClick={props.onClickClear}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
