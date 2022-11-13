-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: cheatsheet
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bash`
--

DROP TABLE IF EXISTS `bash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bash` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bash`
--

LOCK TABLES `bash` WRITE;
/*!40000 ALTER TABLE `bash` DISABLE KEYS */;
INSERT INTO `bash` VALUES (1,'SSH','ssh -i \'./chave\' -u user -p'),(2,'List processes listening to port','lsof -i:port'),(3,'List active processes with given name','ps -x | grep ./processname'),(4,'List directories with readable size','du -sh ./'),(5,'Disk usage info','df -h'),(6,'Find files with given text inside','find path -type f -exec grep -l \'text-to-find-here\' {} \\;'),(7,'Install certbot','sudo apt install certbot && sudo apt install python3-certbot-nginx'),(8,'Add free ssl certificate for a domain on nginx','sudo certbot --nginx -d example.com -d www.example.com'),(9,'Add user','sudo adduser nomedousuario'),(10,'Append user to a group (sudo e.)','sudo usermod sudo nomedousuario');
/*!40000 ALTER TABLE `bash` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `git`
--

DROP TABLE IF EXISTS `git`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `git` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `git`
--

LOCK TABLES `git` WRITE;
/*!40000 ALTER TABLE `git` DISABLE KEYS */;
INSERT INTO `git` VALUES (1,'remember the next git credentials for further logins','git config credential.helper store'),(2,'remove python cached','git rm -r --cached __pycache__');
/*!40000 ALTER TABLE `git` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `javascript`
--

DROP TABLE IF EXISTS `javascript`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `javascript` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `javascript`
--

LOCK TABLES `javascript` WRITE;
/*!40000 ALTER TABLE `javascript` DISABLE KEYS */;
/*!40000 ALTER TABLE `javascript` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mysql`
--

DROP TABLE IF EXISTS `mysql`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mysql` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mysql`
--

LOCK TABLES `mysql` WRITE;
/*!40000 ALTER TABLE `mysql` DISABLE KEYS */;
/*!40000 ALTER TABLE `mysql` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `powershell`
--

DROP TABLE IF EXISTS `powershell`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `powershell` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `powershell`
--

LOCK TABLES `powershell` WRITE;
/*!40000 ALTER TABLE `powershell` DISABLE KEYS */;
/*!40000 ALTER TABLE `powershell` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `python`
--

DROP TABLE IF EXISTS `python`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `python` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `python`
--

LOCK TABLES `python` WRITE;
/*!40000 ALTER TABLE `python` DISABLE KEYS */;
INSERT INTO `python` VALUES (1,'Replace characters inside a string','string = string.replace(\"old_char\", \"new_char\")'),(2,'\'Concatenate\' dictionary','d3 = dict(d1)<br>d3.update(d2)'),(3,'String slicing','\'string\'[2:] = \'ring\''),(4,'Run a terminal command','os.system(\'command\')'),(8,'Sleep','system.sleep(seconds)');
/*!40000 ALTER TABLE `python` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-13 14:35:55
