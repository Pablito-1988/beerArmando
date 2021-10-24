import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
/* import ItemCount from "./components/ItemCount/ItemCount"; */
import Footer from "./components/Footer/Footer";



const App =() => {
    
    let today = new Date(),
   date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
   

   /* function onAdd(){

   } */
    return(
        <>
            <NavBar/>
            <ItemListContainer greeting={`Hola como te va hoy es ${date}, que tengas un buen dia!`}/>
            <Footer/>
        </>
    )
}

export default App