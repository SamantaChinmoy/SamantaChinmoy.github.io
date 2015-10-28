-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 02, 2015 at 05:30 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(40) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(25) NOT NULL,
  `Country` varchar(50) NOT NULL,
  `State` varchar(50) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Gender` varchar(25) NOT NULL,
  `Interest` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `Name`, `Email`, `Phone`, `Country`, `State`, `Address`, `Gender`, `Interest`) VALUES
(1, 'aaa', 'aaa@gmail.com', '1234567890', 'India', 'West Bengal', 'dsdsdsd', 'male', 'Football,Movie,Reading,'),
(2, 'aaa', 'aaa@gmail.com', '1234567892', 'India', 'West Bengal', 'dsdsdsd', 'male', 'Football,Movie,Reading,'),
(3, 'aaa', 'aaa@gmail.com', '1234567891', 'India', 'West Bengal', 'dsdsdsd', 'male', 'Football,Movie,Reading,');
