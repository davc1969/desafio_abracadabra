# Abracadabra
### Desafío Latam e-camp, módulo 8, día 1

Creación de servidor con ***Expres***, creación de *rutas* y utilización de *middlewares* para verificar información.
También se utiiza el método ***static*** para servir archivos estáticos.

El proyecto contempla las siguientes rutas:
 - **/**: sirve un archivo HTML estático
 - **/abracadabra/usuarios**: muestra un listado de usuarios que está almacenado en el servidor en formatao JSON
 - **/abracadabra/juego/:usuario**: si *"usuario"* es unnombre que exista en el listado que está en el servidor, muestra un mensaje, en caso contrario muestra una imagen de usuario desconocido
 - **abracadabra/conejo/:id**: permite jugar al juego del conejo, si se acierat al número aleatorio que calcula la  máquina indicando el sombrero respectivo, se muestra una imagen de un conejo, en caso contrario se muestra la imagen de un hechicero malvado.

Desarrollado por ***Darío Valenzuela***, octubre 2021