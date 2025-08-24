-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: quanlytramxang
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `giaodich`
--

DROP TABLE IF EXISTS `giaodich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaodich` (
  `giaodich_id` int NOT NULL AUTO_INCREMENT,
  `tram_id` int NOT NULL,
  `trubom_id` int NOT NULL,
  `hanghoa_id` int NOT NULL,
  `ngay_gio` datetime NOT NULL,
  `so_luong` decimal(10,2) NOT NULL,
  `tong_tien` decimal(15,2) NOT NULL,
  PRIMARY KEY (`giaodich_id`),
  KEY `trubom_id` (`trubom_id`),
  KEY `hanghoa_id` (`hanghoa_id`),
  KEY `idx_ngay` (`ngay_gio`),
  KEY `idx_tram_ngay` (`tram_id`,`ngay_gio`),
  CONSTRAINT `giaodich_ibfk_1` FOREIGN KEY (`tram_id`) REFERENCES `tramxang` (`tram_id`),
  CONSTRAINT `giaodich_ibfk_2` FOREIGN KEY (`trubom_id`) REFERENCES `trubom` (`trubom_id`),
  CONSTRAINT `giaodich_ibfk_3` FOREIGN KEY (`hanghoa_id`) REFERENCES `hanghoa` (`hanghoa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaodich`
--

LOCK TABLES `giaodich` WRITE;
/*!40000 ALTER TABLE `giaodich` DISABLE KEYS */;
INSERT INTO `giaodich` VALUES (1,1,1,1,'2025-08-25 08:30:00',50.00,1200000.00),(2,1,2,3,'2025-08-25 09:15:00',30.00,630000.00),(3,2,3,2,'2025-08-25 10:00:00',40.00,880000.00),(4,2,4,4,'2025-08-25 10:30:00',25.00,500000.00),(5,3,5,1,'2025-08-25 11:00:00',60.00,1440000.00),(6,1,1,1,'2025-08-25 11:30:00',20.00,480000.00),(7,2,3,2,'2025-08-25 12:00:00',35.00,770000.00),(8,3,5,1,'2025-08-25 12:45:00',45.00,1080000.00),(9,1,2,3,'2025-08-25 13:15:00',50.00,1050000.00),(10,2,4,4,'2025-08-25 14:00:00',30.00,600000.00);
/*!40000 ALTER TABLE `giaodich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hanghoa`
--

DROP TABLE IF EXISTS `hanghoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hanghoa` (
  `hanghoa_id` int NOT NULL AUTO_INCREMENT,
  `ten_hanghoa` varchar(50) NOT NULL,
  `loai` varchar(20) DEFAULT NULL,
  `don_vi` varchar(10) DEFAULT 'lit',
  `don_gia` decimal(10,2) NOT NULL,
  PRIMARY KEY (`hanghoa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hanghoa`
--

LOCK TABLES `hanghoa` WRITE;
/*!40000 ALTER TABLE `hanghoa` DISABLE KEYS */;
INSERT INTO `hanghoa` VALUES (1,'Xăng RON95','xăng','lit',24000.00),(2,'Xăng RON92','xăng','lit',22000.00),(3,'Dầu Diesel','dầu','lit',21000.00),(4,'Dầu Hỏa','dầu','lit',20000.00);
/*!40000 ALTER TABLE `hanghoa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tramxang`
--

DROP TABLE IF EXISTS `tramxang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tramxang` (
  `tram_id` int NOT NULL AUTO_INCREMENT,
  `ten_tram` varchar(100) NOT NULL,
  `dia_chi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`tram_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tramxang`
--

LOCK TABLES `tramxang` WRITE;
/*!40000 ALTER TABLE `tramxang` DISABLE KEYS */;
INSERT INTO `tramxang` VALUES (1,'Trạm Xăng A','123 Đường Lê Lợi, TP.HCM'),(2,'Trạm Xăng B','456 Đường Nguyễn Huệ, TP.HCM'),(3,'Trạm Xăng C','789 Đường Hai Bà Trưng, TP.HCM');
/*!40000 ALTER TABLE `tramxang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trubom`
--

DROP TABLE IF EXISTS `trubom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trubom` (
  `trubom_id` int NOT NULL AUTO_INCREMENT,
  `tram_id` int NOT NULL,
  `hanghoa_id` int NOT NULL,
  `so_hieu` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`trubom_id`),
  KEY `idx_tram` (`tram_id`),
  KEY `idx_hanghoa` (`hanghoa_id`),
  CONSTRAINT `trubom_ibfk_1` FOREIGN KEY (`tram_id`) REFERENCES `tramxang` (`tram_id`),
  CONSTRAINT `trubom_ibfk_2` FOREIGN KEY (`hanghoa_id`) REFERENCES `hanghoa` (`hanghoa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trubom`
--

LOCK TABLES `trubom` WRITE;
/*!40000 ALTER TABLE `trubom` DISABLE KEYS */;
INSERT INTO `trubom` VALUES (1,1,1,'TB01'),(2,1,3,'TB02'),(3,2,2,'TB01'),(4,2,4,'TB02'),(5,3,1,'TB01');
/*!40000 ALTER TABLE `trubom` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-25  0:48:57
