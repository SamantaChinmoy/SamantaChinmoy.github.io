-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 30, 2015 at 09:33 AM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `subscribe`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE IF NOT EXISTS `data` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Country` varchar(30) NOT NULL,
  `State` varchar(30) NOT NULL,
  `Gender` varchar(30) NOT NULL,
  `Address` varchar(36) NOT NULL,
  `Interest` varchar(60) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`Id`, `Name`, `Email`, `Phone`, `Country`, `State`, `Gender`, `Address`, `Interest`) VALUES
(9, 'Chinmoy Samanta', 'chinmoy@gmail.com', '7602412686', 'India', 'West Bengal', 'male', 'kolkata ghoshpara kestopur block b', 'Football'),
(12, 'abcdfegh', 'abcdefgh@gmail.com', '7778889950', 'Usa', 'Tex', 'male', 'kanpur up up up up india bloack d bl', 'Football,Movie,Reading'),
(14, 'asasas', 'asa@gmail.com', '1234567890', 'Usa', 'Cal', 'male', 'kjjkjkjkjkjkj sjdjcc dcdjcbdhjc', 'Football,Movie,Reading'),
(15, 'asasas', 'abcdefjjj@gmail.com', '8989898989', 'India', 'West Bengal', 'male', 'asasas', 'Football,Movie,Reading');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
