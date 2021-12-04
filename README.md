# El club del VHS
Somos una web dedicada al alquiler de películas y series pero no en cualquier formato: contamos con un amplio catálogo íntegramente en formato VHS. 

![Imagen](gif.gif)


Link: Rama Master, que obtiene los datos de Firebase [https://vhsclub.herokuapp.com/](https://vhsclub.herokuapp.com/)

Link: Rama Api, que obtiene los datos de la Api (con buscador funcinal) [https://beer-armando.herokuapp.com/](https://beer-armando.herokuapp.com/)

# Api de Peliculas (rama Api)

Link: [https://www.omdbapi.com/](https://www.omdbapi.com/)


# Flujo de Compra

En la home los usuarios ven los productos divididos en dos categorías: últimos agregados y más vendidos. Al hacer click sobre alguno de ellos se accede al detalle de la película o serie, desde donde se puede modificar la cantidad de días de alquiler del VHS y agregar el producto al carrito. 

En el navbar encontramos el link de contacto que cuenta con un formulario completamente funcional. También está el link a la sección de usuarios, desde donde podemos crear un nuevo usuario o logearnos.  

Si agregamos productos al carrito logueados con nuestro usuario, debemos primero validar nuestros datos y luego hacer click en el botón “finalizar compra” para completarla.  

## Video: 
[![Video paso a paso ](case1.jpg)](https://vimeo.com/653075146)

Si el usuario agrega productos al carrito sin estar logueado debe primero hacer click en el botón “Para finalizar agrega tus datos”. Una vez que complete el formulario con sus datos y los confirme podrá avanzar hacia “finalizar compra”.  

## Video:
[![Video paso a paso ](case2.jpg)](https://vimeo.com/653071444)

Hay dos formas de eliminar productos del carrito: podemos hacerlo desde la preview del carrito que se encuentra en el navbar o bien ingresando al carrito. En esta segunda opción podemos eliminar de a uno o vaciar el carrito completo.  



# Pasos clonar el proyecto

### 1. `git clone https://github.com/Pablito-1988/beerArmando.git`
Para poder clonar el repositorio de github en tu pc.

### 2. `cd beerArmando`
Para posicionarse en el directorio donde se encuentra el proyecto.

### 3. `npm i`
Para  instalar las dependencias requeridas para el correcto funcionamiento del proyecto, recordá siempre estar en la carpeta correcta!

### 4. `npm start`
Inicia el servidor para que puedas ver el proyecto funcionando.

Abrí [http://localhost:3000](http://localhost:3000) para ver el proyecto en tu navegador, si es que no tenes otro proyecto corriendo en dicho puerto. En ese caso React te sugiere otro puerto, por ejemplo: [http://localhost:3001](http://localhost:3001)


# Dependencias agregadas 

## `npm i react-loading`
Dependecia utilizada para agregar logo de carga mientras se termina de realizar el fetch.

Link: [https://www.npmjs.com/package/react-loading](https://www.npmjs.com/package/react-loading)

## `npm i react-router-dom`
Dependecia utilizada para generear un mecanismo de navegación en nuestra web.

Link: [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)

## `npm install emailjs-com `
Dependecia utilizada para el envío de e-mails para la sección de contacto.

Link: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

## `npm install formik --save`
Dependecia utilizada para el manejo de formularios de la sección de login y carrito.

Link: [https://formik.org/docs/overview](https://formik.org/docs/overview)

## `npm install aos --save`
Dependecia utilizada para animaciones con el scroll de la home.

Link: [https://www.npmjs.com/package/aos](https://www.npmjs.com/package/aos)





