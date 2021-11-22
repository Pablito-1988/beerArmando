import './loginStyle.css'
import { Formik, Form, ErrorMessage } from 'formik';
import { firestore} from '../../firebase'
import { useState } from 'react'
import { Link } from 'react-router-dom';


function Login() {

    const [user, setUser] = useState(null)
    console.log(user)

    return(
        <div className='loginFormContainer'>
            
            <div className='loginContainer'>
            <h2 className='loginTitle'>Login</h2>
                <div className='underline'></div>
            <Formik
                initialValues={{
                    user: '',
                    password: ''
                }}
                validate={(values)=>{
                    const errors = {}
                    if (!values.user) {
                        errors.user = 'Debes agregar un usuario valido'
                     }
                     if (!values.password) {
                        errors.password = 'Debes agregar una contraseña'
                     }
                    
                    return errors
                }}
                onSubmit={(values)=>{
                    setUser(values)
                    
                    firestore.collection("users").add(values)
                }}
            >
              {({ handleChange, setFieldValue}) => ( 
                  <Form className='loginForm'>
                    <label className='labelTitle'>Usuario</label>
                    <input
                        type='text'
                        onChange={handleChange}
                        name="user"
                        id='user'
                        className='loginInput' />

                    <ErrorMessage name='user' className='errors' component='span' />

                    <label>Password</label>
                    <input 
                        type='password'
                        placeholder='Password'
                        onChange={handleChange}
                        name='password'
                        className='loginInput'
                        />
                    <ErrorMessage name='password' className='errors' component='span' />
                    <div className='buttonsContainer'>
                        <button className='loginButton' type='submit'>Ingresar</button>
                    <p className='newUserQuote'>Si no tienes un usuario podes registrarte aquí</p>
                        <Link to={'./register'} className='loginButton'>Crear usuario</Link>
                    </div>

                  </Form>

              )}
            </Formik>
            </div>
        </div>    
    )
}

export default Login