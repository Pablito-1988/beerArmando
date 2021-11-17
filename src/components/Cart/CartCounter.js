import { Formik, Form, ErrorMessage } from "formik";
import { useRef } from "react";

const CartCounter = (props) => {
  
  const form = useRef()
  const moreButton = useRef()

  function showForm(){
    form.current.style = "display: flex"
    moreButton.current.style = "display: none"
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
            props.sendOrder()
          }}
        >
          {({ handleChange }) => (
            <Form>
              <div className='userForm' ref={form}>
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
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
                  placeholder="Email"
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
                  placeholder="Password"
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
                  Finalizar
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <button className="delete" ref={moreButton} onClick={showForm}>
        Cliqueá acá para finalizar la compra
        </button>
        <button className="delete" onClick={props.onClickClear}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default CartCounter;
