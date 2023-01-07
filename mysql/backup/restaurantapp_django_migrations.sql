-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: restaurantapp
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_bin NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-01-04 14:46:21.579384'),(2,'auth','0001_initial','2023-01-04 14:46:22.167450'),(3,'admin','0001_initial','2023-01-04 14:46:22.274725'),(4,'admin','0002_logentry_remove_auto_add','2023-01-04 14:46:22.284631'),(5,'admin','0003_logentry_add_action_flag_choices','2023-01-04 14:46:22.293605'),(6,'contenttypes','0002_remove_content_type_name','2023-01-04 14:46:22.358586'),(7,'auth','0002_alter_permission_name_max_length','2023-01-04 14:46:22.407082'),(8,'auth','0003_alter_user_email_max_length','2023-01-04 14:46:22.430176'),(9,'auth','0004_alter_user_username_opts','2023-01-04 14:46:22.439153'),(10,'auth','0005_alter_user_last_login_null','2023-01-04 14:46:22.487606'),(11,'auth','0006_require_contenttypes_0002','2023-01-04 14:46:22.492594'),(12,'auth','0007_alter_validators_add_error_messages','2023-01-04 14:46:22.500572'),(13,'auth','0008_alter_user_username_max_length','2023-01-04 14:46:22.551196'),(14,'auth','0009_alter_user_last_name_max_length','2023-01-04 14:46:22.613787'),(15,'auth','0010_alter_group_name_max_length','2023-01-04 14:46:22.636726'),(16,'auth','0011_update_proxy_permissions','2023-01-04 14:46:22.645703'),(17,'auth','0012_alter_user_first_name_max_length','2023-01-04 14:46:22.698836'),(18,'sessions','0001_initial','2023-01-04 14:46:22.728623'),(19,'authtoken','0001_initial','2023-01-04 15:18:30.707901'),(20,'authtoken','0002_auto_20160226_1747','2023-01-04 15:18:30.728861'),(21,'authtoken','0003_tokenproxy','2023-01-04 15:18:30.733848');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-06 23:50:24
