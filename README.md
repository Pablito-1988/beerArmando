# El club del VHS
Somos una web dedicada al alquiler de películas y series pero no en cualquier formato: contamos con un amplio catálogo íntegramente en formato VHS. 

![Main](Main.jpg)

Link: Rama Master, que obtiene los datos de Firebase [https://vhsclub.herokuapp.com/](https://vhsclub.herokuapp.com/)

Link: Rama Api, que obtiene los datos de la Api (con buscador funcinal) [https://beer-armando.herokuapp.com/](https://beer-armando.herokuapp.com/)

# Api de Peliculas (rama Api)

Link: [https://www.omdbapi.com/](https://www.omdbapi.com/)
# Flujo de Compra

El usuario en la home puede encontrar tanto los últimos productos agregados, así como también los productos más vendidos. Cada uno de estos productos al clickearlos lo llevara al detalle del mismo, donde se puede modificar la cantidad de días que desea alquilar el VHS y agregar dicho producto al carrito. 

En el navbar encontramos el link de contacto, que cuenta con un formulario el cual es completamente funcional. Como también encontramos el link a la sección de usuarios, en la cual podemos crear un nuevo usuario o logearnos. 

Una vez que se creó un usuario y este esté logueado y dentro del carrito con solo clikear en el botón de validar datos, y luego en el botón “finalizar compra”, se completa la misma. 
[![Video paso a paso ](case1.jpg)](https://vimeo.com/653075146)

O si el usuario no  está logueado, debe hace click en el botón de “Para finalizar agrega tus datos”, ahí se completa un formulario con los datos del usuario, luego se confirman dichos datos y luego se clickea en el botón “finalizar compra” para finalizar. 

[![Video paso a paso ](case2.jpg)](https://vimeo.com/653071444)

Si en algún momento el usuario se arrepiente de algún producto puede eliminarlo desde el navbar, en el preview del carrito, o directamente ingresando al carrito y borrando aquellos productos que no quiera, o simplemente vaciando el carrito.   






# Pasos clonar el proyecto

### 1. `git clone https://github.com/Pablito-1988/beerArmando.git`
Esto lo que hace es clonar el repositorio de github.

### 2. `npm install`
Esto lo que hace es instalar las dependencias requeridas para el correcto funcionamiento del proyecto, recordá siempre estar en la carpeta correcta!

### 3. `npm start`
Esto lo que hace es iniciar el servidor para que puedas ver el proyecto funcionando.
Abrí [http://localhost:3000](http://localhost:3000) para ver el proyecto en tu navegador.

# Dependencias agregadas 

### `npm i react-loading`
Dependecia utilizada para agregar logo de carga mientras se termina de realizar el fetch.

Link: [https://www.npmjs.com/package/react-loading](https://www.npmjs.com/package/react-loading)

### `npm i react-router-dom`
Dependecia utilizada para generear un mecanismo de navegación en nuestra web.

Link: [https://reactrouter.com/web/guides/quick-start](https://reactrouter.com/web/guides/quick-start)

### `npm install emailjs-com `
Dependecia utilizada para el envío de e-mails para la sección de contacto.

Link: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

### `npm install formik --save`
Dependecia utilizada para el manejo de formularios de la sección de login y carrito.

Link: [https://formik.org/docs/overview](https://formik.org/docs/overview)

### `npm install aos --save`
Dependecia utilizada para animaciones con el scroll de la web.

Link: [https://www.npmjs.com/package/aos](https://www.npmjs.com/package/aos)





