-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 08, 2020 at 10:30 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyecto-programacion-2`
--
CREATE DATABASE IF NOT EXISTS `proyecto-programacion-2` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyecto-programacion-2`;

-- --------------------------------------------------------

--
-- Table structure for table `resenas`
--

CREATE TABLE `resenas` (
  `id` int(10) UNSIGNED NOT NULL,
  `peliculaId` varchar(255) NOT NULL,
  `usuarioId` int(10) UNSIGNED NOT NULL,
  `textoResena` varchar(255) NOT NULL,
  `puntaje` decimal(10,0) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resenas`
--

INSERT INTO `resenas` (`id`, `peliculaId`, `usuarioId`, `textoResena`, `puntaje`, `createdAt`, `updatedAt`) VALUES
(1, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(2, '419704', 1, 'Podria haber sido mejor', '5', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(3, '419704', 5, 'No es algo que me haya impactado mucho pero tampoco es mala', '6', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(4, '419704', 3, 'Me ENCANTO!', '10', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(5, '419704', 4, 'Maso', '7', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(6, '419704', 3, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(7, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(8, '419704', 3, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(9, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(10, '419704', 5, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(11, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(12, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(13, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(14, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(15, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(16, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(17, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(18, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(19, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(20, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(21, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(22, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(23, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(24, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(25, '419704', 2, 'Me gusto', '8', '2002-01-20 00:00:00', '2002-01-20 00:00:00'),
(26, '419704', 2, 'Hola buena peli', '1', '2020-05-21 23:05:07', '2020-05-21 23:05:07'),
(27, '419704', 2, ':)', '4', '2020-05-21 23:07:50', '2020-05-21 23:07:50'),
(28, '419704', 2, 'Muy buena pelicula de Brad Pitt', '9', '2020-05-22 02:26:25', '2020-05-22 02:26:25'),
(29, '385103', 2, 'Scobby Dooh la rompio', '10', '2020-05-23 14:00:19', '2020-05-23 14:00:19'),
(30, '385103', 2, 'me gusto un pcoo', '1', '2020-05-23 14:43:10', '2020-05-23 14:43:10'),
(31, '385103', 2, 'No me gusto', '4', '2020-05-23 14:49:04', '2020-05-23 14:49:04'),
(32, '385103', 2, 'Divertida', '7', '2020-05-23 14:52:24', '2020-05-23 14:52:24'),
(33, '385103', 2, 'Mala', '1', '2020-05-23 14:58:10', '2020-05-23 14:58:10'),
(34, '385103', 2, 'Linda', '6', '2020-05-23 15:02:32', '2020-05-23 15:02:32'),
(35, '385103', 2, 'buena', '8', '2020-05-23 15:05:00', '2020-05-23 15:05:00'),
(36, '385103', 2, 'LA AME', '10', '2020-05-23 18:02:23', '2020-05-23 18:02:23'),
(37, '385103', 2, 'La mejor', '10', '2020-05-25 15:16:23', '2020-05-25 15:16:23'),
(38, '385103', 2, 'buena', '4', '2020-05-25 15:18:36', '2020-05-25 15:18:36'),
(39, '385103', 2, 'No me gusto', '1', '2020-05-25 15:22:58', '2020-05-25 15:22:58'),
(40, '385103', 2, 'Normal pero safa', '3', '2020-05-25 15:25:31', '2020-05-25 15:25:31'),
(41, '385103', 2, 'Me encanto', '8', '2020-05-25 15:28:03', '2020-05-25 15:28:03'),
(42, '385103', 2, 'Si', '9', '2020-05-25 15:28:53', '2020-05-25 15:28:53'),
(43, '385103', 2, 'NOOOOO', '2', '2020-05-25 15:31:42', '2020-05-25 15:31:42'),
(44, '385103', 2, 'no', '1', '2020-05-25 15:41:17', '2020-05-25 15:41:17'),
(45, '385103', 2, 'Nee', '3', '2020-05-25 15:45:51', '2020-05-25 15:45:51'),
(46, '385103', 2, 'vamos', '6', '2020-05-25 15:46:25', '2020-05-25 15:46:25'),
(47, '385103', 2, 'ne', '5', '2020-05-25 15:46:56', '2020-05-25 15:46:56'),
(48, '385103', 2, 'ne', '1', '2020-05-25 16:20:26', '2020-05-25 16:20:26'),
(49, '385103', 2, 'wwww', '9', '2020-05-25 16:21:55', '2020-05-25 16:21:55'),
(50, '385103', 2, 'aaaa', '2', '2020-05-25 16:22:49', '2020-05-25 16:22:49'),
(51, '385103', 2, 'asas', '1', '2020-05-25 16:24:09', '2020-05-25 16:24:09'),
(52, '385103', 2, 'as', '1', '2020-05-25 16:26:31', '2020-05-25 16:26:31'),
(53, '385103', 2, 'a', '2', '2020-05-25 16:27:26', '2020-05-25 16:27:26'),
(54, '385103', 2, 'asasas', '2', '2020-05-25 16:30:44', '2020-05-25 16:30:44'),
(55, '338762', 2, 'no', '1', '2020-05-26 15:37:09', '2020-05-26 15:37:09'),
(56, '338762', 2, 'aaaa', '1', '2020-05-26 19:20:19', '2020-05-26 19:20:19'),
(57, '443791', 2, 'hh', '1', '2020-05-26 20:10:56', '2020-05-26 20:10:56'),
(58, '443791', 2, 'hghgh', '5', '2020-05-26 20:12:44', '2020-05-26 20:12:44'),
(59, '338762', 2, 'jhj', '2', '2020-05-26 20:14:06', '2020-05-26 20:14:06'),
(60, '576156', 2, 'hola', '2', '2020-05-26 20:15:25', '2020-05-26 20:15:25'),
(61, '576156', 2, 'hola me gusto', '5', '2020-05-26 20:18:06', '2020-05-26 20:18:06'),
(62, '495764', 1, 'No me gusto', '3', '2020-05-26 20:20:08', '2020-05-26 20:20:08'),
(63, '640344', 4, 'No me gusto', '4', '2020-05-27 13:43:50', '2020-05-27 13:43:50'),
(64, '338762', 4, 'No me gusto', '2', '2020-05-27 18:46:03', '2020-05-27 18:46:03'),
(65, '385103', 4, 'no', '1', '2020-05-27 19:52:14', '2020-05-27 19:52:14'),
(66, '385103', 4, 'aa', '4', '2020-05-27 19:54:57', '2020-05-27 19:54:57'),
(68, '530915', 10, 'ME ENCANTO', '10', '2020-05-27 20:14:02', '2020-05-27 20:14:02'),
(72, '574982', 9, 'BUENAA', '8', '2020-06-08 18:53:21', '2020-06-08 18:59:15'),
(73, '385103', 9, 'buena', '10', '2020-06-08 18:53:40', '2020-06-08 18:53:40');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombreCompleto` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `generoFavorito` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombreCompleto`, `email`, `password`, `fechaNacimiento`, `createdAt`, `updatedAt`, `generoFavorito`) VALUES
(1, 'Agustina Castiglioni', 'agusC@gmail.com', 'agusc', '2001-01-01 00:00:00', '2020-04-12 00:00:00', '2020-05-05 00:00:00', NULL),
(2, 'Francesca Porro Toyos', 'franP@gmail.com', 'franp', '2000-01-01 00:00:00', '2020-02-12 00:00:00', '2020-04-03 00:00:00', NULL),
(3, 'Delfina Giesenow', 'delfiG@gmail.com', 'delfig', '2001-01-05 00:00:00', '2020-01-01 00:00:00', '2020-05-12 00:00:00', NULL),
(4, 'Kalani Giesenow', 'kalaG@gmail.com', 'kalag', '2003-01-03 00:00:00', '2019-06-06 00:00:00', '2020-01-03 00:00:00', NULL),
(5, 'Martina Martinez', 'martuM@gmail.com', 'martum', '1999-08-24 00:00:00', '2018-12-23 00:00:00', '2019-10-26 00:00:00', NULL),
(6, 'agus', 'acas@live.com.ar', 'hola', '2020-05-14 00:00:00', '2020-05-21 22:19:03', '2020-05-21 22:19:03', NULL),
(7, 'Agus Casti', 'acas@ude.edu.ar', '$2a$10$ml.3jxlNSVv7xeGcQZzxOOjcnNQD2PmhNGmYmbxA376j9ol.nd6TW', '2020-05-23 00:00:00', '2020-05-27 13:25:04', '2020-05-27 13:25:04', NULL),
(8, 'Agus Casti', 'aguscasti@live.com', '$2a$10$QIpDdHwjlULWKBE4HMTn3O6xuPuAhdMKbiBs4oSgny/cbAWZGzIPO', '2020-05-29 00:00:00', '2020-05-27 13:37:07', '2020-05-27 13:37:07', NULL),
(9, 'agusc', 'ac@gmail.com', '$2a$10$lOcOVARUwhhFVbElOg1xgeog7SsZw0ql5S8CnahnltudinBalsYVi', '2020-05-08 00:00:00', '2020-05-27 18:28:04', '2020-05-27 18:28:04', NULL),
(10, 'Agus Casti', 'estela@esp.com', '$2a$10$GQDUVsft245xHk/SQ.ume.nuSfvVZ5j95h0TtyTeo2MjTOFRrh/5C', '2020-05-09 00:00:00', '2020-05-27 20:13:33', '2020-05-27 20:13:33', NULL),
(11, 'Casti Agus', 'casti@gmail.com', '$2a$10$I0dCDHlh9Aj6hpKKme5CsOFDt1xRJT15Z7xYy8YLUJO9wndeg8LPu', '2019-09-17 00:00:00', '2020-05-29 02:49:59', '2020-05-29 02:49:59', 'Comedy'),
(12, 'Agustina C', 'ac@hotmail.com', '$2a$10$RY9BI6qX2GUTUfJ23Fz8AeVoX9NnVcXa9mvvBKwQfR3qY7TV6rLuu', '2020-06-16 00:00:00', '2020-06-05 15:42:56', '2020-06-05 15:42:56', 'Family'),
(13, 'Agus', 'agus@hotmail.com', '$2a$10$hN4Prk2ZKPizoQANDblMoeXCb7ePPATZQO4NvYJEg.Inih3oYpxHm', '2020-06-10 00:00:00', '2020-06-07 20:48:00', '2020-06-07 20:48:00', 'Action'),
(14, 'Agus Castiglioni', 'aguscasti@hotmail.com', '$2a$10$fTeaSgwULck2NJGlBHs2MeITtLt2/77C7QgtpA9yPShHUQPg2M/4C', '2020-06-27 00:00:00', '2020-06-08 20:10:11', '2020-06-08 20:10:11', 'Comedy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `resenas_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
