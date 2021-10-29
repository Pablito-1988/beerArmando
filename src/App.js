import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
/* import ItemCount from "./components/ItemCount/ItemCount"; */
import Footer from "./components/Footer/Footer";

import { Switch, Route } from 'react-router-dom'
import Main from "./components/Main/Main";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"



const App =() => {
    
    let today = new Date(),
   date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
   

   /* function onAdd(){

   } */
    return(
        <>
            <NavBar/>
                <Switch>
                    <Route exact path='/'>
                        {<Main/>}
                    </Route>
                    <Route exact path='/movies'>
                        {<ItemListContainer greeting={`Hola como te va hoy es ${date}, que tengas un buen dia!`}/>}
                    </Route>
                    <Route exact path='/movies/:id'>
                        {<ItemDetailContainer/>}
                    </Route>
                    
                </Switch>
            <Footer/>
        </>
    )
}

export default App