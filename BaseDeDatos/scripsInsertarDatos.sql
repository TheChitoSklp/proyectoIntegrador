-- DMLIPNGIRLSHOP

-- Agregar categorías
INSERT INTO categorias (nombre)
VALUES ('Maquillaje');
INSERT INTO categorias (nombre)
VALUES ('Calzado');
INSERT INTO categorias (nombre)
VALUES ('Vestimenta');
INSERT INTO categorias (nombre)
VALUES ('Accesorios');
INSERT INTO categorias (nombre)
VALUES ('Mascotas');
INSERT INTO categorias (nombre)
VALUES ('Sexshop');
INSERT INTO categorias (nombre)
VALUES ('Varios');

-- Agregando Productos
INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id) 
VALUES ('Anillo Amistad','Los amigos son amigos para siempre y por siempre',
		250,'No hay Imagen',73,1 );
INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id) 
VALUES ('Botas chillonas','Para el mejor cocinero del mundo',
		100,'No hay Imagen',693,4 );
        INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id) 
VALUES ('Sandalias aerodinámicas','Son aerodinámicas ',
		300,'No hay Imagen',103,3 );
        INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id) 
VALUES ('Capa de invisivilidad ','Te hace menos visible para otros ',
		340,'No hay Imagen',73,5 );
        INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id) 
VALUES ('Pastilla de chiquitolina  ','Olvidate de las partículas PIM',
		215,'No hay Imagen',83,6 );
-- Agregando usuario 

 INSERT INTO `usuarios` (`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`) 
VALUES ('Ernesto ','Nieves','holaquehace',1234111111,'ernm@gmail.com',1111111111,'vendedor','No hay foto');
INSERT INTO `usuarios` (`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`)  
VALUES ('Daniel','Montoya','constra',2928399999,'corre@correo.com',1111111234,'comprador','not image');
INSERT INTO `usuarios` (`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`) 
 VALUES ('Adriana', 'Ibarra', 'Pa$$word.1', 9876543211,'adimania@gmail.com',1234567890,'vendedor','No hay imagen');
INSERT INTO `usuarios`(`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`) 
 VALUES ('juan pablo','avina araiza','C@rton54',1234567891,'chito.pepsi@gmail.com',222222222,'comprador','fotito de persona');
INSERT INTO `usuarios`(`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`) 
 VALUES ('Alberto ','Trejo','C@rton54',1234567891,'albrt@gmail.com',222222222,'comprador','fotito ');


SELECT * FROM ipngirlshopdb.categorias;
SELECT * FROM ipngirlshopdb.productos;
SELECT * FROM ipngirlshopdb.usuarios;

