-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.10-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for itg_db
CREATE DATABASE IF NOT EXISTS `itg_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `itg_db`;

-- Dumping structure for table itg_db.author_master
DROP TABLE IF EXISTS `author_master`;
CREATE TABLE IF NOT EXISTS `author_master` (
  `author_id` int(11) NOT NULL,
  `author_name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table itg_db.author_master: ~0 rows (approximately)
/*!40000 ALTER TABLE `author_master` DISABLE KEYS */;
INSERT INTO `author_master` (`author_id`, `author_name`) VALUES
	(1, 'Steve Jobs'),
	(2, 'Matt'),
	(3, 'Christian');
/*!40000 ALTER TABLE `author_master` ENABLE KEYS */;

-- Dumping structure for table itg_db.news_feed_article
DROP TABLE IF EXISTS `news_feed_article`;
CREATE TABLE IF NOT EXISTS `news_feed_article` (
  `news_feed_artical_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `news_feed_article_headline` varchar(500) DEFAULT NULL,
  `news_feed_article_Image` longtext DEFAULT NULL,
  `technology_id` int(11) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `upload_date_time` datetime DEFAULT NULL,
  `status` enum('A','D') DEFAULT 'A',
  PRIMARY KEY (`news_feed_artical_id`),
  KEY `FK_author` (`author_id`),
  KEY `FK_technology` (`technology_id`),
  CONSTRAINT `FK_author` FOREIGN KEY (`author_id`) REFERENCES `author_master` (`author_id`),
  CONSTRAINT `FK_technology` FOREIGN KEY (`technology_id`) REFERENCES `technology_master` (`technology_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table itg_db.news_feed_article: ~0 rows (approximately)
/*!40000 ALTER TABLE `news_feed_article` DISABLE KEYS */;
INSERT INTO `news_feed_article` (`news_feed_artical_id`, `news_feed_article_headline`, `news_feed_article_Image`, `technology_id`, `author_id`, `upload_date_time`, `status`) VALUES
	(1, 'if you think yor are too small to make a difference try sleeping with a mosquito', 'image_1.jpg ', 1, 1, '2022-02-17 10:45:31', 'A'),
	(2, 'writing  code is not so bad !', 'image_2.png', 3, 1, '2022-02-14 16:47:37', 'A'),
	(3, 'Technology is best where it brings people together.', 'image3.jpg', 4, 2, '2022-02-17 16:49:33', 'A'),
	(4, 'it\'s not a faith in technology it\'s faith in people.', 'image4.png', 3, 1, '2022-02-11 17:55:16', 'A'),
	(5, 'Technology is a useful servant but a dangerous master.', 'image5.jpg', 5, 3, '2022-02-01 17:56:24', 'A');
/*!40000 ALTER TABLE `news_feed_article` ENABLE KEYS */;

-- Dumping structure for table itg_db.technology_master
DROP TABLE IF EXISTS `technology_master`;
CREATE TABLE IF NOT EXISTS `technology_master` (
  `technology_id` int(11) NOT NULL AUTO_INCREMENT,
  `technology_name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`technology_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table itg_db.technology_master: ~4 rows (approximately)
/*!40000 ALTER TABLE `technology_master` DISABLE KEYS */;
INSERT INTO `technology_master` (`technology_id`, `technology_name`) VALUES
	(1, 'TECH'),
	(2, 'UI'),
	(3, 'AI'),
	(4, 'DESIGN'),
	(5, 'MARKETING');
/*!40000 ALTER TABLE `technology_master` ENABLE KEYS */;

-- Dumping structure for table itg_db.user_profile
DROP TABLE IF EXISTS `user_profile`;
CREATE TABLE IF NOT EXISTS `user_profile` (
  `user_profile_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(60) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `time_of_birth` time DEFAULT NULL,
  `gender` enum('M','F') DEFAULT NULL,
  `marital_status` enum('U','M','O') DEFAULT NULL,
  `language` enum('E','H') DEFAULT NULL,
  `profile_picture` longblob DEFAULT NULL,
  `status` enum('A','D') DEFAULT 'A',
  PRIMARY KEY (`user_profile_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table itg_db.user_profile: 3 rows
/*!40000 ALTER TABLE `user_profile` DISABLE KEYS */;
INSERT INTO `user_profile` (`user_profile_id`, `user_name`, `email`, `password`, `phone_number`, `date_of_birth`, `time_of_birth`, `gender`, `marital_status`, `language`, `profile_picture`, `status`) VALUES
	(1, 'Sadab Hossain Pramanik', 'sadabhossain_pramanik@yahoo.in', '1234', '9932195224', '1993-07-13', '08:25:00', 'M', 'M', 'E', _binary 0x666F7220696D6167652075706C6F64696E6720706572706F736520796F7520757365642075736564206F6E6C792075706C6F6164207061746820686572652E0D0A6966206261736536342075736564207468656E2064622073697A652077696C6C20626520696E63726573732E0D0A, 'A'),
	(2, 'Bikky Hossain update', 'bikky121@gmail.com', '1234', '9932195224', '1993-07-13', '09:45:00', 'M', 'U', 'H', _binary 0x64656D6F2E6A7067206A757374206578616D706C65, 'A'),
	(3, 'Bikky Hossain ', 'bikky121@gmail.com', '1234', '9932195224', '1993-07-13', '09:45:00', 'M', 'U', 'H', _binary 0x64656D6F2E6A7067206A757374206578616D706C65, 'A');
/*!40000 ALTER TABLE `user_profile` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
