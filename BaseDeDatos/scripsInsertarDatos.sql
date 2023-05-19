-- DMLIPNGIRLSHOP
USE `ipngirlshopdb` ;
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

-- Agregando Descuento
INSERT INTO descuento (descuento,estado)
VALUES (0.15,true);
INSERT INTO descuento (descuento,estado)
VALUES (0.25,false);

-- Agregando Productos
INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id,`descuento_id`) 
VALUES ('Anillo Amistad','Los amigos son amigos para siempre y por siempre',
		250.30,'imagen1.jpg',73,1 ,1);
INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id,`descuento_id`) 
VALUES ('Botas chillonas','Para el mejor cocinero del mundo',
		100.34,'imagen2.jpg',693,4,1 );
INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id,`descuento_id`) 
VALUES ('Sandalias aerodinámicas','Son aerodinámicas ',
		300.43,'imagen3.jpg',103,3 ,2);
INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id,`descuento_id`) 
VALUES ('Capa de invisivilidad ','Te hace menos visible para otros ',
		340.22,'imagen4.jpg',73,5 ,2);
INSERT INTO `productos` (nombre, descripcion, precio, imagen, cantidad, categorias_id,`descuento_id`) 
VALUES ('Pastilla de chiquitolina  ','Olvidate de las partículas PIM',
		215.12,'imagen5.jpg',83,6 ,2);
-- Agregando usuario 

 INSERT INTO `usuarios` (`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`) 
VALUES ('Ernesto ','Nieves','holaquehace',1234111111,'ernm@gmail.com',1111111111,'vendedor','foto.jpg');
INSERT INTO `usuarios` (`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`)  
VALUES ('Daniel','Montoya','constra',2928399999,'corre@correo.com',1111111234,'comprador','foto1.jpg');
INSERT INTO `usuarios` (`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`) 
 VALUES ('Adriana', 'Ibarra', 'Pa$$word.1', 9876543211,'adimania@gmail.com',1234567890,'vendedor','foto2.jpg');
INSERT INTO `usuarios`(`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`) 
 VALUES ('juan pablo','avina araiza','C@rton54',1234567891,'chito.pepsi@gmail.com',222222222,'comprador','foto3.jpg');
INSERT INTO `usuarios`(`nombre`,`apellido`,`password`,`boleta`,`correo`,`telefono`,`rol`,`foto`) 
 VALUES ('Alberto ','Trejo','C@rton54',1234567891,'albrt@gmail.com',222222222,'comprador','foto4.jpg');


SELECT * FROM ipngirlshopdb.categorias;
SELECT * FROM ipngirlshopdb.productos;
SELECT * FROM ipngirlshopdb.usuarios;

