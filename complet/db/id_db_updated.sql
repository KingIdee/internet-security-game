-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 16, 2018 at 09:14 AM
-- Server version: 5.5.57-0ubuntu0.14.04.1
-- PHP Version: 7.0.23-1+ubuntu14.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `id` int(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `score` int(100) NOT NULL,
  `level` int(20) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`id`, `username`, `score`, `level`, `time`) VALUES
(13, 'dkald', 2, 1, '2018-04-08 23:44:30'),
(14, 'dkald', 2, 1, '2018-04-08 23:48:11'),
(15, 'dkald', 2, 1, '2018-04-08 23:52:45'),
(16, 'dkald', 3, 1, '2018-04-08 23:53:52'),
(17, 'dkald', 3, 1, '2018-04-08 23:56:37'),
(18, 'dkald', 2, 2, '2018-04-09 00:09:14'),
(19, 'dkald', 1, 3, '2018-04-09 00:09:26'),
(20, 'dkald', 1, 4, '2018-04-09 00:09:36'),
(21, 'kdda;', 3, 1, '2018-04-09 00:13:58'),
(22, 'kdda;', 1, 2, '2018-04-09 00:23:27'),
(23, 'kdda;', 1, 3, '2018-04-09 00:23:39'),
(24, 'kdda;', 2, 1, '2018-04-09 00:24:15'),
(25, 'kdda;', 0, 2, '2018-04-09 00:24:29'),
(26, 'kdal;', 1, 1, '2018-04-09 00:27:07'),
(27, 'kdal;', 1, 2, '2018-04-09 00:27:18'),
(28, 'kdal;', 1, 3, '2018-04-09 00:27:29'),
(29, 'kdal;', 1, 4, '2018-04-09 00:27:40'),
(30, 'dal', 0, 1, '2018-04-09 00:28:38'),
(31, 'dal', 1, 1, '2018-04-09 00:30:33'),
(32, 'dal', 1, 1, '2018-04-09 00:30:52'),
(33, 'dal', 1, 1, '2018-04-09 00:34:01'),
(34, 'dkLD', 1, 1, '2018-04-09 00:34:48'),
(35, 'dkLD', 1, 1, '2018-04-09 00:35:42'),
(36, 'dkLD', 1, 1, '2018-04-09 00:36:17'),
(37, 'dkLD', 1, 2, '2018-04-09 00:36:39'),
(38, 'dkLD', 1, 3, '2018-04-09 00:36:58'),
(39, 'dla', 1, 1, '2018-04-09 00:47:17'),
(40, 'dla', 1, 2, '2018-04-09 00:48:14'),
(41, 'dla', 1, 3, '2018-04-09 00:48:28'),
(42, 'dalkd;a', 1, 0, '2018-04-15 14:28:01'),
(43, 'dk;a', 3, 0, '2018-04-16 02:12:36'),
(44, 'dk;a', 3, 0, '2018-04-16 02:13:52'),
(45, 'dk;a', 2, 0, '2018-04-16 02:18:41'),
(46, 'dk;a', 2, 0, '2018-04-16 02:19:05'),
(47, ';dla', 3, 0, '2018-04-16 02:29:58'),
(48, 'ldf;', 2, 0, '2018-04-16 02:33:11');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(20) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(1, 'Israel', 'ejlkeq'),
(2, 'theorix1', 'mr cheat'),
(3, 'duff', 'ekelele'),
(4, 'theorix', 'mrcheat'),
(5, 'KDLS', 'kdald'),
(6, 'kdal', 'idad'),
(7, 'dlad', 'dkald'),
(8, 'dkad;', 'akdal;'),
(9, 'jlda;d', 'dka;d'),
(10, 'dssd', 'dsdvds'),
(11, 'dkald', 'akdla'),
(12, 'kdda;', 'dkad'),
(13, 'kdal;', 'kdad'),
(14, 'dal', 'dkald'),
(15, 'dkLD', 'AKDL'),
(16, 'dla', 'akdla'),
(17, 'dalkd;a', ''),
(18, 'dk;a', 'lkdla4'),
(19, ';dla', ''),
(20, 'ldf;', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game`
--
ALTER TABLE `game`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
