import './loginStyle.css'
import { Formik, Form, ErrorMessage } from 'formik';
import { firestore} from '../../firebase'
import { useState } from 'react'
import NewUserSucces from './NewUserSucces';


const NewUser = () => {

    const [user, setUser] = useState(null)
    const [login,setLogin] = useState(false)
    console.log(user)
    return (
        <div className='loginFormContainer'>
            {login && <NewUserSucces/>}
            <div className='newUserContainer'>
            <h2 className='loginTitle'>Creá tu usuario</h2>
                <div className='underline'></div>
            <Formik
                initialValues={{
                    user: '',
                    email: '',
                    password: '',
                    repassword: '',
                    address: '',
                    phone: '',
                }}
                validate={(values)=>{
                    const errors = {}
                    if (!values.user) {
                        errors.user = 'Debes agregar un usuario valido'
                     }
                     if (!values.email) {
                        errors.email = 'Debes agregar un mail valido'
                     }
                     if (!values.password) {
                        errors.password = 'Debes agregar una contraseña'
                     }
                     if (!values.repassword || values.repassword !== values.password) {
                        errors.repassword = 'Las contraseñas tienen que coincidir'
                     }
                     if (!values.address) {
                        errors.address = 'Debes agregar una dirección porfavor'
                     }
                     if (!values.phone) {
                        errors.phone = 'Debes agregar un número de teledono porfavor'
                     }
                    
                    return errors
                }}
                onSubmit={(values)=>{
                    setUser(values)
                    setLogin(true)
                    firestore.collection("users").add(values)
                }}
            >
              {({ handleChange, setFieldValue}) => ( 
                  <Form className='loginForm'>
                      <label className='labelTitle'>Nombre</label>
                    <input
                        type='text'
                        onChange={handleChange}
                        name="user"
                        id='user'
                        className='loginInput'
                        placeholder="Ej: Jose Feliz Pelota" />

                    <ErrorMessage name='user' className='errors' component='span' />
                    <label className='labelTitle'>email</label>
                    <input
                        type='email'
                        onChange={handleChange}
                        name="email"
                        id='email'
                        className='loginInput'
                        placeholder="Ej: jose_pelota@gmail.com" />

                    <ErrorMessage name='email' className='errors' component='span' />

                    <label>Password</label>
                    <input 
                        type='password'
                        placeholder='Password'
                        onChange={handleChange}
                        name='password'
                        className='loginInput'
                        />
                    <ErrorMessage name='password' className='errors' component='span' />

                    <label>Re ingrese el password</label>
                    <input 
                        type='password'
                        placeholder=' Re-password'
                        onChange={handleChange}
                        name='repassword'
                        className='loginInput'
                        />
                    <ErrorMessage name='repassword' className='errors' component='span' />

                    <label className='labelTitle'>Dirección de entrega</label>
                    <input
                        type='text'
                        onChange={handleChange}
                        name="address"
                        id='address'
                        className='loginInput'
                        placeholder="Av. Siempre Viva 703" />

                    <ErrorMessage name='address' className='errors' component='span' />

                    <label className='labelTitle'>Teléfono</label>
                    <input
                        type='number'
                        onChange={handleChange}
                        name="phone"
                        id='phone'
                        className='loginInput'
                        placeholder="Ej: 761-1143" />

                    <ErrorMessage name='phone' className='errors' component='span' />
                    <div className='buttonsContainer'>
                        <button className='loginButton' type='submit'>Crear usuario</button>
                    </div>

                  </Form>

              )}
            </Formik>
            </div>
        </div>    
    )
}

export default NewUser
