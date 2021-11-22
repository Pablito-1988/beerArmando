import { Link } from "react-router-dom"
import './loginStyle.css'


const NewUserSucces = () => {
    return (
        <div className='newUserModal'>
            <h3>Tu usuario se creo correctamente!!</h3>
            <p>Haz click <Link className='linkToLogin' to={'./login'}>aquí</Link> para iniciar sesión.</p>
        </div>
    )
}

export default NewUserSucces
