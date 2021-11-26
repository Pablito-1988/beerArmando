import './loginStyle.css'
import { Formik, Form, ErrorMessage } from 'formik';
import { firestore} from '../../firebase'
import { Link } from 'react-router-dom';
import { useContext , useState } from 'react';
import { UserContext } from "../context/userContext.js";
import ErrorLogin from './ErrorLogin';
import {useHistory} from 'react-router-dom'


function Login() {

    const { addUser } = useContext(UserContext);
    const [error, setError] = useState(false);
    const {push} = useHistory();
    

    return(
        <div className='loginFormContainer'>
            
            <div className='loginContainer'>
            <h2 className='loginTitle'>Login</h2>
                <div className='underline'></div>
                {error ? <ErrorLogin /> : null}
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={(values)=>{
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Debes agregar un usuario valido'
                     }
                     if (!values.password) {
                        errors.password = 'Debes agregar una contraseña'
                     }
                    
                    return errors
                }}
                onSubmit={(values)=>{
                    
                    console.log(values)
                    const prom = firestore.collection("users").where('password', '==',values.password).get();
                    prom
                    .then((documento) => {
                       let user =documento.docs[0].data()
                       addUser(user.user)
                       setError(false)
                       push('/')
                    })
                    .catch(() => {
                      console.log("no se cumplió la promesa");
                      setError(true)
                    });
                }}
            >
              {({ handleChange, setFieldValue}) => ( 
                  <Form className='loginForm'>
                    <label className='labelTitle'>Email</label>
                    <input
                        placeholder='Ej: jose_feliz_pelota@gmail.com' 
                        type='text'
                        onChange={handleChange}
                        name="email"
                        id='user'
                        className='loginInput' />

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