CREATE DATABASE IF NOT EXISTS `proyecto-programacion-2`;
USE `proyecto-programacion-2`;

CREATE TABLE IF NOT EXISTS `usuarios` (
`id` INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
`nombreCompleto` VARCHAR(255) NOT NULL,
`email` VARCHAR(255) NOT NULL,
`password` VARCHAR(255) DEFAULT NULL, 
`fechaNacimiento` DATETIME DEFAULT NULL,
`genero_id` VARCHAR(255) NOT NULL,
`createdAt` DATETIME DEFAULT NULL, 
`updatedAt`  DATETIME DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `resenas` (
`id` INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
`peliculaId` VARCHAR(255) NOT NULL,
`usuarioId` INT(10) UNSIGNED NOT NULL,
`textoResena` VARCHAR(255) NOT NULL,
`puntaje` DECIMAL NOT NULL,
`createdAt` DATETIME DEFAULT NULL, 
`updatedAt`  DATETIME DEFAULT NULL,
FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

INSERT INTO `usuarios` (`nombreCompleto`,`email`, `password`, `fechaNacimiento`, `createdAt`, `updatedAt`)
VALUES
	('Agustina Castiglioni', 'agusC@gmail.com' , 'agusc', '2001-01-01', '2020-04-12', '2020-05-05'),
	('Francesca Porro Toyos', 'franP@gmail.com', 'franp', '2000-01-01', '2020-02-12', '2020-04-03'),
	('Delfina Giesenow', 'delfiG@gmail.com', 'delfig', '2001-01-05', '2020-01-1', '2020-05-012'),
	('Kalani Giesenow', 'kalaG@gmail.com', 'kalag', '2003-01-03', '2019-06-6', '2020-01-03'),
	('Martina Martinez', 'martuM@gmail.com', 'martum', '1999-08-024', '2018-12-23', '2019-10-26');

INSERT INTO `resenas` (`peliculaId`,`usuarioId`,`textoResena`,`puntaje`,`createdAt`,`updatedAt`)
VALUES
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20'),
	(419704, 2, 'Me gusto', 8.1, '2002-01-20', '2002-01-20')
	
