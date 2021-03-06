import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom'
import Main from "./components/Main/Main";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Contacto from "./components/Contacto/Contacto";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import NewUser from "./components/Login/NewUser";




const App =() => {
    
    let today = new Date(),
   date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
   

    return(
        <>
            <NavBar/>
                <Switch>
                    <Route exact path='/'>
                        {<Main/>}
                    </Route>
                    <Route  path='/category/:id'>
                        {<ItemListContainer greeting={`Hola como te va hoy es ${date}, que tengas un buen dia!`}/>}
                    </Route>
                    <Route  path='/item/:id'>
                        {<ItemDetailContainer/>}
                    </Route>
                    <Route exact path='/contacto'>
                        {<Contacto/>}
                    </Route>
                    <Route exact path='/cart'>
                        {<Cart/>}
                    </Route>
                    <Route exact path='/login'>
                        {<Login/>}
                    </Route>
                    <Route exact path='/register'>
                        {<NewUser/>}
                    </Route>   
                </Switch>
            <Footer/>
        </>
    )
}

export default App