
import './contacto.css'
import emailjs from 'emailjs-com'
import Modal from './Modal/Modal';
import {useState} from 'react'



function Contacto (){
    const [showModal,setShowModal]= useState(false)

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_d8x5lfx','template_fiz3b0n', e.target,'user_R2WV8np2I5apUnVMFdjgE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setShowModal(true)
     

    }
    return(
        <div className='contactContainer'>
            <div className='contactWrapper'>
                <h2 className='contactTitle'>Contacto</h2>
                <div className='underline'></div>
                <h4 className='frase'>¡Ponete en contacto con nosotros para cualquier duda o recomendación!</h4>
                   {showModal && <Modal/>}
                       <form   onSubmit={sendEmail} className='contactForm'>
                           <div className='nameField'>
                           <label>Nombre completo</label>
                           <input
                                type='text'
                                name='fullName'
                                id='fullName'
                                className='fullName'
                                required
                                placeholder='Ej. Jose Feliz Pelota'/>
                         
                            </div>
                            <div className='secondRow'>
                                <div className='emailField'>
                                <label>Email</label>
                                <input
                                type='email'
                                required
                                name='email'
                                id='email'
                                className='emailInput'
                                placeholder='Ej. Jose_Feliz_Pelota@gmail.com'/>
                        
                            </div>
                            <div className='phoneField'>
                                <label>Telefono</label>
                                <input
                                type='tel'
                                required
                                name='phone'
                                id='phone'
                                className='phone'
                                placeholder='Ej. 01135665790'/>
                        
                            </div>
                            </div>
                            <div className='textField'>
                            <label>Texto</label>
                            <textarea
                                 typeof='text'
                                 required
                                 name='text'
                                 id='text'
                                 className='text'
                                 placeholder='Hola como les va :)'/> 
                            
                            </div>
                        <button className='contactSubmit' type='submit'>Enviar</button>                       
                       </form>
            </div>
        </div>
    )
}

export default Contacto