CREATE DATABASE  IF NOT EXISTS `mesc` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mesc`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: mesc
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `block`
--

DROP TABLE IF EXISTS `block`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block` (
  `BLOCK_ID` int NOT NULL AUTO_INCREMENT,
  `BLOCK_NAME` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `IS_POSSIBLE` tinyint DEFAULT '0',
  `state` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'ACTIVE',
  PRIMARY KEY (`BLOCK_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18904 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block`
--

LOCK TABLES `block` WRITE;
/*!40000 ALTER TABLE `block` DISABLE KEYS */;
INSERT INTO `block` VALUES (1,'작업자 1번 블록',0,'DELETE'),(2,'개발자 1번 블록',0,'DELETE'),(3,'공정목록',0,'ACTIVE'),(4,'공정조회',0,'ACTIVE'),(5,'로그보기',1,'ACTIVE'),(6,'보고하기',0,'ACTIVE'),(7,'직접입력',1,'ACTIVE'),(8,'직접수정결과',0,'ACTIVE'),(9,'직접조회결과',0,'ACTIVE'),(10,'로그결과',0,'ACTIVE'),(11,'작업자 시작',0,'ACTIVE'),(12,'개발자 시작',0,'ACTIVE'),(13,'로그data입력',1,'ACTIVE'),(14,'로그level입력',1,'ACTIVE'),(15,'commit 완료',0,'ACTIVE'),(16,'commit 실패',0,'ACTIVE'),(17,'rollback',0,'ACTIVE'),(20,'공정목록2',0,'ACTIVE'),(999,'휴지통',0,'DELETE'),(1035,'queryrollback',1,'ACTIVE'),(1067,'테스트용',1,'DELETE'),(1069,'test용_v2',0,'DELETE'),(18746,'BLOCK_Testing_CH1',0,'DELETE'),(18747,'CH1_test',0,'DELETE'),(18748,'CH1_test',0,'DELETE'),(18749,'안녕하세요.',0,'DELETE'),(18755,'test11',0,'DELETE'),(18756,'test11',0,'DELETE'),(18757,'Test1',0,'DELETE'),(18758,'1',0,'DELETE'),(18759,'2',0,'DELETE'),(18760,'',0,'DELETE'),(18761,'1',0,'DELETE'),(18762,'Test',0,'DELETE'),(18763,'1',0,'DELETE'),(18764,'testtttt',0,'DELETE'),(18765,'1에서 5으로 변경',0,'DELETE'),(18766,'13:30test',0,'DELETE'),(18767,'Test2가 test3',0,'DELETE'),(18769,'test11',0,'DELETE'),(18770,'손승연짱짱맨아님',0,'DELETE'),(18771,'가라가라뿅간다',0,'DELETE'),(18772,'rrr',0,'DELETE'),(18773,'TX_Testing',0,'DELETE'),(18774,'TA_test',0,'DELETE'),(18775,'TA_test',0,'DELETE'),(18776,'TA_axios 되는지?',0,'DELETE'),(18777,'안녕하세요.',0,'DELETE'),(18778,'TA(20:44)',0,'DELETE'),(18779,'TA(20:45)',0,'DELETE'),(18780,'CH1(20:49)',0,'DELETE'),(18781,'cardTest1',0,'DELETE'),(18782,'cardTest2',0,'DELETE'),(18783,'',0,'DELETE'),(18784,'',0,'DELETE'),(18785,'',0,'DELETE'),(18786,'',0,'DELETE'),(18787,'',0,'DELETE'),(18788,'',0,'DELETE'),(18789,'',0,'DELETE'),(18790,'',0,'DELETE'),(18792,'blockTest',0,'DELETE'),(18796,'CHtest',0,'DELETE'),(18797,'CH1_test(10:05)',0,'DELETE'),(18798,'CH1_test(10:05)',0,'DELETE'),(18799,'CH2_test(10:27)',0,'DELETE'),(18800,'CH2_test(10:39)',0,'DELETE'),(18801,'시연Test(1)',0,'DELETE'),(18802,'시연Test(2)',0,'DELETE'),(18803,'수정하기 예시',0,'DELETE'),(18804,'시연하기3',0,'DELETE'),(18805,'(4)시연하기',0,'DELETE'),(18806,'',0,'DELETE'),(18807,'(4)시연하기',0,'DELETE'),(18808,'다중카드저장',0,'DELETE'),(18809,'다중카드저장',0,'DELETE'),(18810,'다중카드저장(1)',0,'DELETE'),(18811,'재이(04:36)',0,'DELETE'),(18812,'다중카드저장(3)',0,'DELETE'),(18813,'다중카드',0,'DELETE'),(18814,'시연',0,'DELETE'),(18815,'Test',0,'DELETE'),(18816,'Test',0,'DELETE'),(18817,'Test1234',0,'DELETE'),(18818,'이게 버튼이다',0,'DELETE'),(18819,'Test',0,'DELETE'),(18826,'TEST',0,'DELETE'),(18827,'가라데이터 없을 때',0,'DELETE'),(18828,'',0,'DELETE'),(18829,'텍스트형',0,'DELETE'),(18830,'버튼형',0,'DELETE'),(18831,'안녕하세요.',0,'DELETE'),(18832,'안녕하세요.',0,'DELETE'),(18833,'Ta 생성 테스트',0,'DELETE'),(18835,'카드변경test!!!!!!!!',0,'DELETE'),(18836,'ㄹㅇㄹㄹㅇㄻㅇㄹ',0,'DELETE'),(18837,'ㅆㄸㄴㅆ',0,'DELETE'),(18838,'ㄹㅇㄴㄻㅇㄴㅁ',0,'DELETE'),(18839,'블록 추가',0,'DELETE'),(18843,'블록 추가',0,'DELETE'),(18844,'ㄹㅇㄴㄹ',0,'DELETE'),(18845,'ㄹㅇㄹㄴㅇㄹㄴㄹ',0,'DELETE'),(18846,'ㅇㄹㄴㅇㄹㅇㄹ',0,'DELETE'),(18847,'ㄹㄴㅇㄹㅇㄴㄹ',0,'DELETE'),(18848,'TEST',0,'DELETE'),(18849,'tx 생성되나?',0,'DELETE'),(18850,'Tx Test1',0,'DELETE'),(18851,'tx test3',0,'DELETE'),(18852,'카드추가test!!!!!!!!',0,'DELETE'),(18853,'test(01:30)',0,'DELETE'),(18854,'',0,'DELETE'),(18855,'Add test',0,'DELETE'),(18856,'test(03:46)',0,'DELETE'),(18857,'카드변경test허ㅓ라',0,'DELETE'),(18858,'HI',0,'DELETE'),(18859,'TEST18859',0,'DELETE'),(18860,'TEST  갱싱ㄴ',0,'DELETE'),(18861,'TEST',0,'DELETE'),(18862,'Testjkdl',0,'DELETE'),(18863,'TEST1234',0,'DELETE'),(18864,'HI',0,'DELETE'),(18865,'gfdfsdf',0,'DELETE'),(18866,'fdsfd',0,'DELETE'),(18867,'ggg',0,'DELETE'),(18868,'fddsf',0,'DELETE'),(18869,'fdsfdf',0,'DELETE'),(18870,'ggg',0,'DELETE'),(18871,'ㄹㄹㄹㄹ',0,'DELETE'),(18872,'카드추가test!!!!!!!!',0,'DELETE'),(18873,'카드추가test!!!!!!!!',0,'DELETE'),(18874,'카드추가test!!!!!!!!',0,'DELETE'),(18875,'ㅎㅎㅎㅎ',0,'DELETE'),(18876,'Test다 이것들아',0,'DELETE'),(18877,'카드추가',0,'DELETE'),(18878,'ㅎㅎㅎㅎ',0,'DELETE'),(18879,'이제 Component추가된다 ㅎㅎㅎ',0,'DELETE'),(18880,'Test - TXCard',0,'DELETE'),(18881,'Text-Ch1Card',0,'DELETE'),(18882,'Test-Ch2Card',0,'DELETE'),(18883,'Test-TACard',0,'DELETE'),(18884,'Test-Complex Mixed',0,'DELETE'),(18885,'Say Anything',0,'DELETE'),(18886,'수ㅡ정',0,'DELETE'),(18887,'dddd',0,'DELETE'),(18888,'test',0,'DELETE'),(18889,'테스트 111122',0,'DELETE'),(18890,'시연하는중',0,'DELETE'),(18891,'시연용입니다',0,'DELETE'),(18892,'시연용',0,'DELETE'),(18893,'시연입니다',0,'DELETE'),(18894,'test',0,'DELETE'),(18895,'시연용',0,'DELETE'),(18896,'시연용',0,'DELETE'),(18897,'시연용',0,'DELETE'),(18898,'시연',0,'ACTIVE'),(18899,'시연 테스트',0,'DELETE'),(18900,'테스트 시연',0,'DELETE'),(18901,'테스트 시연',0,'ACTIVE'),(18902,'test블록수정',0,'ACTIVE'),(18903,'카드추가',0,'ACTIVE');
/*!40000 ALTER TABLE `block` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `button`
--

DROP TABLE IF EXISTS `button`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `button` (
  `BUTTON_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `LINK_TYPE` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '정적, 동적API, 동적변수',
  `LINK` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '블록, url',
  `ICON_ID` smallint DEFAULT NULL COMMENT '아이콘 정보',
  `RESPONSE` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `RESPONSE_TYPE` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT 'S(정적), D(동적)',
  `ICON` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `STATE` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'ACTIVE',
  `ACTION_ID` int DEFAULT NULL,
  PRIMARY KEY (`BUTTON_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=258 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `button`
--

LOCK TABLES `button` WRITE;
/*!40000 ALTER TABLE `button` DISABLE KEYS */;
INSERT INTO `button` VALUES (1,'데이터 조회','B','3',NULL,'데이터조회','S',NULL,'ACTIVE',0),(2,'데이터 조회','B','3',NULL,NULL,NULL,NULL,'ACTIVE',0),(3,'로그 조회','B','5',NULL,NULL,NULL,'5','ACTIVE',0),(4,'전체 작업 조회','B','4',NULL,'전체 작업 조회','S',NULL,'ACTIVE',23),(5,'전체 작업 조회(라인, 공정)','B','4',NULL,'전체 작업 조회','S',NULL,'ACTIVE',26),(6,'전체 작업 조회(라인, 공정, 설계)','B','4',NULL,'전체 작업 조회','S',NULL,'ACTIVE',27),(7,'라인 별 작업 조회','B','4',NULL,'전체 작업 조회','S',NULL,'ACTIVE',25),(8,'공정 별 작업 조회','B','4',NULL,'전체 작업 조회','S',NULL,'ACTIVE',31),(9,'설비 별 작업 조회','B','4',NULL,'전체 작업 조회','S',NULL,'ACTIVE',32),(10,'라인 조회','B','4',NULL,'전체 작업 조회','S',NULL,'DELETE',30),(11,'공정 조회','B','4',NULL,'전체 작업 조회',NULL,NULL,'ACTIVE',28),(12,'설비 조회','B','4',NULL,'설비 조회',NULL,NULL,'DELETE',29),(21,'조건 변경','C','22',NULL,'조건 변경','S',NULL,'ACTIVE',0),(22,'조건 변경 확인','B','4',NULL,'조건 작업 조회','S',NULL,'ACTIVE',0),(91,'comTest1','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(92,'comTest2','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(93,'comTest1','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(94,'comTest2','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(99,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',23),(100,'CHTest1(component_Btn)','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(101,'CH1_component(10:05)','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(102,'CH1_component(10:05)','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(103,'CH2_test(10:27)-Btn2','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(104,'Btn1(10:40)','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(105,'Btn2(10:40)','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(106,'시연 시작하기','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(107,'시연 시작','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(108,'(1)수정하기버튼','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(109,'시연3버튼박스버튼','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(110,'(4)시연버튼박스버튼','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(111,'(4)시연버튼박스버튼','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(112,'(4)시연버튼박스버튼','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(113,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(114,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(115,'다중카드저장1(버튼)','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(116,'다중카드저장(3-1)-버튼','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(117,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(118,'다중카드test(5)-버튼','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(119,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(120,'ㅁㄹㅇㅁ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(121,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(122,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(123,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(124,'test11111','B','1000',NULL,NULL,NULL,NULL,'DELETE',NULL),(125,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(126,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(127,'전체 작업 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',23),(128,'전체 작업 조회(라인, 공정)','B','4',NULL,NULL,NULL,NULL,'ACTIVE',26),(129,'전체 작업 조회(라인, 공정, 설계)','B','4',NULL,NULL,NULL,NULL,'ACTIVE',27),(130,'라인 별 작업 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',25),(131,'공정 별 작업 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',23),(132,'설비 별 작업 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',23),(133,'라인 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',30),(134,'공정 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',28),(135,'설비 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',29),(136,'됩니다.','B','0',NULL,NULL,NULL,NULL,'ACTIVE',0),(137,'','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(138,'','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(139,'ㄹㅇㄴㄹㅇㅁㄶ','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(140,'','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(145,'testButton','B','1',NULL,NULL,NULL,NULL,'ACTIVE',NULL),(146,'CH2-1','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(147,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',23),(148,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',NULL),(149,'','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(150,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(151,'','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(152,'','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(153,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(154,'(4) 내용변경','B','0',NULL,NULL,NULL,NULL,'DELETE',0),(155,'시연버튼이름 수정','B','0',NULL,NULL,NULL,NULL,'DELETE',0),(156,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(157,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(158,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(159,'ㄹㄴㅇㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(160,'ㄹㄴㅇㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(161,'ㄹㅇㄴㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(162,'ㄹㄴㅇㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(163,'ㄹㅇㄴㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(164,'ㄹㄴㅇㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(165,'fsdfaadf','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(166,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(167,'공정리스트1','B','1',NULL,NULL,NULL,NULL,'DELETE',3),(168,'공정리스트2','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(169,'공정리스트2','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(170,'공정리스트2','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(171,'ㅋㅋㅋ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(172,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(173,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(174,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(175,'테스트 조회','B','4',NULL,NULL,NULL,NULL,'DELETE',32),(176,'ㅁ','B','0',NULL,NULL,NULL,NULL,'DELETE',0),(177,'테스트 조회2','B','4',NULL,NULL,NULL,NULL,'DELETE',2),(178,'테스트 조회1','B','4',NULL,NULL,NULL,NULL,'DELETE',31),(179,'유저 조회','B','4',NULL,NULL,NULL,NULL,'DELETE',24),(180,'testButton','B','1',NULL,NULL,NULL,NULL,'ACTIVE',2),(181,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(182,'testButton','B','1',NULL,NULL,NULL,NULL,'ACTIVE',2),(183,'유저 조회','B','4',NULL,NULL,NULL,NULL,'DELETE',24),(184,'유저 조회','B','4',NULL,NULL,NULL,NULL,'DELETE',24),(185,'테스트 1','B','4',NULL,NULL,NULL,NULL,'DELETE',31),(186,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(187,'','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(188,'','B','1',0,'',NULL,NULL,'DELETE',0),(189,'','B','1',0,'',NULL,NULL,'DELETE',0),(190,'','B','1',0,'',NULL,NULL,'DELETE',0),(191,'','B','1',0,'',NULL,NULL,'DELETE',0),(192,'','B','1',0,'',NULL,NULL,'DELETE',0),(193,'','B','1',0,'',NULL,NULL,'DELETE',0),(194,'','B','1',0,'',NULL,NULL,'DELETE',0),(195,'','B','1',0,'',NULL,NULL,'DELETE',0),(196,'','B','1',0,'',NULL,NULL,'DELETE',0),(197,'','B','1',0,'',NULL,NULL,'DELETE',0),(198,'','B','1',0,'',NULL,NULL,'DELETE',0),(199,'','B','1',0,'',NULL,NULL,'DELETE',0),(200,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(201,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(202,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(203,'testButton','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(204,'ㅋㅋㅋㅋ성공임','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(205,'ㅋㅋㅋㅋ성공임','B','1',NULL,NULL,NULL,NULL,'DELETE',2),(206,'','B','1',0,'',NULL,NULL,'DELETE',0),(207,'','B','1',0,'',NULL,NULL,'DELETE',0),(208,'','B','1',0,'',NULL,NULL,'DELETE',0),(209,'','B','1',0,'',NULL,NULL,'DELETE',0),(210,'','B','1',0,'',NULL,NULL,'DELETE',0),(211,'','B','1',0,'',NULL,NULL,'DELETE',0),(212,'','B','1',0,'',NULL,NULL,'DELETE',0),(213,'','B','1',0,'',NULL,NULL,'DELETE',0),(214,'','B','1',0,'',NULL,NULL,'DELETE',0),(215,'','B','1',0,'',NULL,NULL,'DELETE',0),(216,'','B','1',0,'',NULL,NULL,'DELETE',0),(217,'','B','1',0,'',NULL,NULL,'DELETE',0),(218,'','B','1',0,'',NULL,NULL,'DELETE',0),(219,'','B','1',0,'',NULL,NULL,'DELETE',0),(220,'','B','1',0,'',NULL,NULL,'DELETE',0),(221,'','B','1',0,'',NULL,NULL,'DELETE',0),(222,'ㄹㅇㄹㅇㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(223,'ㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(224,'ㄹㅇㄴㄹ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(225,'버튼 링크다','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(226,'버튼1','B','1',0,'',NULL,NULL,'DELETE',0),(227,'버튼2','B','1',0,'',NULL,NULL,'DELETE',0),(228,'공정보기','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(229,'로그보기','B','18880',NULL,NULL,NULL,NULL,'DELETE',0),(230,'ㅋㅋㅋㅋㅋㅋ','B','18882',NULL,NULL,NULL,NULL,'DELETE',0),(231,'손승연 구라','B','4',NULL,NULL,NULL,NULL,'DELETE',31),(232,'버튼f','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(233,'보튼','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(234,'test','B','4',NULL,NULL,NULL,NULL,'DELETE',32),(235,'버튼1','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(236,'ㅇㄹㅇㄹㅇㄹㅇㄹㅇ','B','1',NULL,NULL,NULL,NULL,'DELETE',0),(237,'바로가기','B','1',0,'',NULL,NULL,'DELETE',0),(238,'버튼 1','B','1',0,'',NULL,NULL,'DELETE',0),(239,'버튼 1','B','1',0,'',NULL,NULL,'DELETE',0),(240,'','B','4',NULL,NULL,NULL,NULL,'DELETE',30),(241,'시연용','B','4',NULL,NULL,NULL,NULL,'DELETE',30),(242,'설비 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',29),(243,'새로운 버튼','B','1',0,'',NULL,NULL,'DELETE',0),(244,'버튼','B','1',0,'',NULL,NULL,'DELETE',0),(245,'바로가기','B','1',0,'',NULL,NULL,'DELETE',0),(246,'바로가기','B','1',0,'',NULL,NULL,'DELETE',0),(247,'바로가기','B','1',0,'',NULL,NULL,'DELETE',0),(248,'버튼','B','1',0,'',NULL,NULL,'ACTIVE',0),(249,'버튼을 누르세요','B','0',NULL,NULL,NULL,NULL,'DELETE',0),(250,'새로운 데이터 조회','B','4',NULL,NULL,NULL,NULL,'DELETE',30),(251,'바로가기','B','18898',NULL,NULL,NULL,NULL,'DELETE',0),(252,'바로가기','B','1',0,'',NULL,NULL,'ACTIVE',0),(253,'테스트 조회','B','4',NULL,NULL,NULL,NULL,'ACTIVE',30),(254,'수정1','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(255,'수정2','B','1',NULL,NULL,NULL,NULL,'ACTIVE',0),(256,'버튼1','B','1',0,'',NULL,NULL,'ACTIVE',0),(257,'버튼2','B','1',0,'',NULL,NULL,'ACTIVE',0);
/*!40000 ALTER TABLE `button` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `CARD_ID` int NOT NULL AUTO_INCREMENT,
  `CARD_NAME` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `CARD_SEQUENCE` int NOT NULL,
  `CARD_TYPE` char(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'La(라벨), Tb(테이블), Tx(텍스트),Dtx(동적텍스트),Dw(서랍), Qu(쿼리)',
  `BLOCK_ID` int NOT NULL,
  `CONTENT` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `CONTENT_KEY` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'ACTIVE',
  PRIMARY KEY (`CARD_ID`),
  KEY `FKqlamb5rlfyl6mt71hfauq7eru` (`BLOCK_ID`),
  CONSTRAINT `FKqlamb5rlfyl6mt71hfauq7eru` FOREIGN KEY (`BLOCK_ID`) REFERENCES `block` (`BLOCK_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=316 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,'챗봇 시작하기',0,'TX',3,'조회를 원하는 [데이터 목록]을 \n선택해주세요.',NULL,'ACTIVE'),(4,'공정 리스트',1,'ML',3,'공정 리스트',NULL,'ACTIVE'),(5,'공정조희텍스트',1,'DT',4,'다음은 {title} \n[조회], [쿼리문] 결과입니다.\n추가적으로 메뉴탭에서 [테이블]을 \n선택하면 해당 테이블의 데이터를 \n확인할 수 있습니다. ',NULL,'ACTIVE'),(6,'공정테이블',2,'TA',4,'공정 테이블',NULL,'ACTIVE'),(10,'wo_start_text',1,'DTX',11,'https://www.mesc.kr/api/api/start-message','message','ACTIVE'),(11,'시작하기',2,'CH1',11,'아래 버튼을 선택하세요.',NULL,'ACTIVE'),(12,'dev_start_text',1,'DTX',12,'https://www.mesc.kr/api/api/start-message','message','ACTIVE'),(13,'시작하기',2,'CH2',12,'아래 버튼을 선택하세요.',NULL,'ACTIVE'),(14,'report_text',1,'TX',6,'보고하실 [그룹] 및 [구성원]을 \n선택하세요.',NULL,'ACTIVE'),(16,'직접입력',1,'TX',7,'아래의 [입력창]을 통해 \n원하는 [쿼리문]을 작성하세요.',NULL,'ACTIVE'),(17,'조회결과텍스트',1,'TX',9,'다음은 작성하신 [쿼리문]의 \n[조회 결과]입니다.',NULL,'ACTIVE'),(18,'조회결과테이블',2,'QU',9,NULL,NULL,'ACTIVE'),(19,'수정결과텍스트',1,'TX',8,'다음은 작성하신 [쿼리문]의 \n[실행 결과]입니다.',NULL,'ACTIVE'),(20,'수정결과텍스트',2,'QTX',8,'','','ACTIVE'),(21,'보고하기카드',2,'RE',6,NULL,NULL,'ACTIVE'),(22,'조건변경',3,'MC',999,NULL,NULL,'ACTIVE'),(23,'로그보기텍스트',1,'TX',5,'로그 조회를 원하는 [검색어]를\n입력해주세요.',NULL,'ACTIVE'),(63,'로그date입력',1,'TX',13,'조회를 원하는 [날짜]를 입력해주세요.\r ex) 2023112211',NULL,'ACTIVE'),(64,'로그level입력',1,'TX',14,'조회를 원하는 [로그레벨]을 \n모두 선택해주세요.',NULL,'ACTIVE'),(82,'로그결과텍스트',1,'TX',10,'다음은 조회한 [로그 결과]입니다.',NULL,'ACTIVE'),(83,'로그결과',2,'LO',10,NULL,NULL,'ACTIVE'),(84,'쿼리롤백텍스트',1,'TX',1035,'다음은 실행한 \n[데이터 조작 결과]입니다.',NULL,'ACTIVE'),(85,'쿼리롤백테이블',2,'QR',1035,NULL,NULL,'ACTIVE'),(89,'commit 성공 텍스트',1,'TX',15,'commit 성공하였습니다.',NULL,'ACTIVE'),(90,'commit 실패 텍스트',1,'TX',16,'commit 실패하였습니다.',NULL,'ACTIVE'),(91,'rollback 텍스트',1,'TX',17,'rollback 성공하였습니다.',NULL,'ACTIVE'),(94,'block2번 card추가',1,'TX',2,'block2번에 card추가',NULL,'ACTIVE'),(95,'TA_testing',1,'TA',2,'카드 내용을 작성해주세요.',NULL,'ACTIVE'),(96,'바꾼 카드명222',1,'TX',1067,'test',NULL,'DELETE'),(97,'바꾼 카드명',1,'TX',1067,'test',NULL,'DELETE'),(98,'바꾼 카드명',1,'TX',1067,'test',NULL,'DELETE'),(99,'시작하기',1,'CH1',999,'CH1_testing',NULL,'ACTIVE'),(100,'Btn2Test',1,'CH2',1067,'CH2_post',NULL,'DELETE'),(114,'카드 이름을 작성해주세요.',1,'TX',1,'카드 내용을 작성해주세요.',NULL,'ACTIVE'),(115,'카드 이름을 작성해주세요.',1,'CH1',999,'카드 내용을 작성해주세요.',NULL,'ACTIVE'),(116,'카드 이름을 작성해주세요.',1,'CH1',999,'카드 내용을 작성해주세요.',NULL,'ACTIVE'),(122,'tc1',1,'TX',18755,'testCard1',NULL,'DELETE'),(123,'tc1',1,'TX',18756,'testCard1',NULL,'DELETE'),(124,'바꾼 카드명',1,'TX',18764,'test',NULL,'DELETE'),(127,'tc1',1,'TX',18769,'testCard1',NULL,'DELETE'),(128,'testCard2',2,'TA',18777,'testCard2',NULL,'DELETE'),(129,'카드 이름을 작성해주세요.',1,'CH2',18788,'카드 내용을 작성해주세요.',NULL,'DELETE'),(130,'카드 이름을 작성해주세요.',1,'CH2',18789,'카드 내용을 작성해주세요.',NULL,'DELETE'),(131,'카드 이름을 작성해주세요.',1,'CH1',18790,'카드 내용을 작성해주세요.',NULL,'DELETE'),(133,'인사보내기',1,'TX',18792,'카드 내용을 작성해주세요.',NULL,'DELETE'),(134,'CHTest1',1,'CH1',18796,'CHTest1(content)',NULL,'DELETE'),(135,'CH1_test(10:05)',1,'CH1',18797,'CH1_content',NULL,'DELETE'),(136,'CH1_test(10:05)',1,'CH1',18798,'CH1_content',NULL,'DELETE'),(137,'CH2_test(10:27)-name',1,'CH2',18799,'CH2_test(10:27)-content',NULL,'DELETE'),(138,'CH2_test(10:39)-name',1,'CH2',18800,'CH2_test(10:39)-content',NULL,'DELETE'),(139,'인사하기',2,'CH1',18801,'MESC 입니다.',NULL,'DELETE'),(140,'시연시작하기',2,'CH1',18802,'시연 시작하기',NULL,'DELETE'),(141,'(1)수정하기 시작',2,'CH1',18803,'(1)수정하기 내용1',NULL,'DELETE'),(142,'시연3버튼박스',2,'CH1',18804,'시연3버튼박스내용',NULL,'DELETE'),(143,'(4)시연버튼박스',2,'CH1',18805,'(4)시연버튼박스내용',NULL,'DELETE'),(144,'(4)시연버튼박스',2,'CH1',18806,'(4)시연버튼박스내용',NULL,'DELETE'),(145,'(4)시연텍스트박스',1,'TX',18807,'왜 안되는거지?',NULL,'DELETE'),(146,'다중카드저장1',6,'TX',18808,'',NULL,'DELETE'),(147,'다중카드저장1-1',1,'TX',18809,'',NULL,'DELETE'),(148,'다중카드저장1',2,'CH1',18810,'다중카드저장1(내용)',NULL,'DELETE'),(149,'다중카드저장(3-1)',1,'CH1',18812,'다중카드저장(3-1)-내용',NULL,'DELETE'),(150,'다중카드저장(3-2)',0,'TX',18811,'다중카드저장(3-2) 내용',NULL,'DELETE'),(151,'삭제하지마,,,',0,'CH1',18813,'수정123',NULL,'DELETE'),(152,'다중카드test(5-1)',1,'TX',18813,'수정(04:17)',NULL,'DELETE'),(153,'시연',2,'CH1',18814,'시염ㄴ이ㅏㅁㄹ',NULL,'DELETE'),(154,'카드 이름을 작성해주세요.',1,'TX',18815,'Test입니다...',NULL,'DELETE'),(155,'카드 이름을 작성해주세요.',1,'TX',18816,'Test입니다...',NULL,'DELETE'),(156,'카드 이름을 작성해주세요.',1,'TX',18817,'Test1234',NULL,'DELETE'),(157,'카드 이름을 작성해주세요.',1,'CH1',18818,'ㅎㅇㅈㅇㄹㄴㅇ',NULL,'DELETE'),(172,'카드 이름을 작성해주세요.',1,'TX',18819,'HI',NULL,'DELETE'),(179,'카드 이름을 작성해주세요.',1,'TX',18826,'TEST',NULL,'DELETE'),(180,'챗봇 시작하기',1,'TX',20,'조회를 원하는 [데이터 목록]을 \n선택해주세요.',NULL,'ACTIVE'),(181,'공정 리스트',2,'ML',20,'공정 리스트',NULL,'ACTIVE'),(182,'CH2 카드 변경',1,'CH2',18857,'CH2 카드 변경ㅎㅎ',NULL,'DELETE'),(183,'testCard2',2,'TX',18835,'testCard2',NULL,'DELETE'),(185,'(4)시연버튼박스',0,'CH1',18806,'(4)시연버튼박스내용',NULL,'DELETE'),(186,'(4)시연버튼박스',0,'CH1',18806,'(4)시연버튼박스내용',NULL,'DELETE'),(190,'카드 이름을 작성해주세요.',1,'TX',18839,'안....되잖어...',NULL,'DELETE'),(194,'카드 이름을 작성해주세요.',1,'TX',18843,'ㄹㄴㅇㄹㅇㄴㄹ',NULL,'DELETE'),(195,'카드 이름을 작성해주세요.',1,'TX',18844,'ㄹㅇㄴㄹㄴㅇㄹ',NULL,'DELETE'),(196,'카드 이름을 작성해주세요.',1,'CH2',18845,'ㄹㅇㄴㄹ',NULL,'DELETE'),(197,'카드 이름을 작성해주세요.',1,'CH2',18846,'ㄹㅇㄴㄹ',NULL,'DELETE'),(198,'카드 이름을 작성해주세요.',1,'CH2',18847,'ㄹㄴㅇㄹ',NULL,'DELETE'),(199,'카드 이름을 작성해주세요.',1,'CH1',18848,'fdsdfdsffdsfd',NULL,'DELETE'),(200,NULL,1,'TX',18849,'tx 생성될까?',NULL,'DELETE'),(201,'카드 이름을 작성해주세요.',1,'TX',18850,'컴포넌트 생기면 안됌',NULL,'DELETE'),(202,'CH2 카드 변경',1,'TX',18835,'CH2 카드 변경',NULL,'DELETE'),(203,NULL,1,'TX',18851,'컴포넌트 생기면 안됌333',NULL,'DELETE'),(204,'CH2 카드 변경',1,'ML',18852,'CH2 카드 변경',NULL,'DELETE'),(205,'ㅋㅋ',3,'TX',18853,'ㅋㅋ',NULL,'DELETE'),(206,'카드 이름을 작성해주세요.',0,'TX',18854,'test1',NULL,'DELETE'),(207,'카드 이름을 작성해주세요.',1,'TX',18855,'test1234ㄹㅇㄴㄹㄴㅇㅁ',NULL,'DELETE'),(208,'카드 이름을 작성해주세요.',1,'TX',18854,'ㄹㅇㄴㄹㅇㄴㅇㄹ',NULL,'DELETE'),(209,'ㅗㅑㅗㅑㅗsork 요.',1,'CH1',18853,'내가 이겼지',NULL,'DELETE'),(210,'ㅋㅋㅋㅋ',2,'CH2',18854,'ㅋㅋㅋ',NULL,'DELETE'),(211,'ㅋㅋ',3,'CH2',18853,'ㅋㅋ',NULL,'DELETE'),(212,'카드 이름을 작성해주세요.',0,'TX',18856,'수정수정',NULL,'DELETE'),(213,'카드 ㄹㅇㄴㄹ이름을 작성해주세요.',4,'CH2',18853,'ㄹㅇㄴㄹ',NULL,'DELETE'),(214,'카드 ㄹㅇㄴㄹ이름을 작성해주세요.',4,'CH2',18853,'ㄹㅇㄴㄹ',NULL,'DELETE'),(215,'카드 ㄹㅇㄴㄹ이름을 작성해주세요.',4,'CH2',18853,'ㄹㅇㄴㄹ',NULL,'DELETE'),(216,'카드 ㄹㅇㄴㄹ이름을 작성해주세요.',4,'CH2',18853,'ㄹㅇㄴㄹ',NULL,'DELETE'),(217,'testCH2',1,'CH2',18856,'testCH2_1',NULL,'DELETE'),(229,'testCH1',2,'CH1',18856,'testCH1_1',NULL,'DELETE'),(230,'카드 이름을 작성해주세요.',1,'TX',18852,'',NULL,'DELETE'),(231,'카드 이름을 작성해주세요.',1,'TX',18852,'ㄹㄹㄹㄹ',NULL,'DELETE'),(232,'카드 이름을 작성해주세요.',1,'TX',18852,'',NULL,'DELETE'),(233,'CH2 카드 변경',1,'ML',18857,'CH2 카드 변경',NULL,'DELETE'),(234,'카드 이름을 작성해주세요.',2,'TX',18857,'',NULL,'DELETE'),(235,'카드 이름을 작성해주세요.',2,'TX',18811,'ㄹㅇㄹㅇㄴㄻㅇㅊㅊㅇㅁㅊ',NULL,'DELETE'),(236,'ㄹㅇㄴㄻ',2,'CH1',18813,'ㄹㅇㄴㄹㅇ',NULL,'DELETE'),(237,'카드 이름을 작성해주세요.',3,'TA',18813,'',NULL,'DELETE'),(238,'카드 이름을 작성해주세요.',2,'TX',18857,'ㅎㅎㅎ',NULL,'DELETE'),(239,'카드 이름을 작성해주세요.',2,'TX',18857,'1. CH1 기본적인 ComponentList[ComponentItem]\n2. CH2 \nComponentList[\nComponentItem x 2]\n\n1번재 카드에만 쌓이고있다..',NULL,'DELETE'),(240,'=',3,'CH1',18857,'ㄹㅇㄹㄴㅇㄹㅇㄹㅇ',NULL,'DELETE'),(241,'카드 이름을 작성해주세요.',3,'TX',18857,'ㅋㅋㅋㅋ',NULL,'DELETE'),(242,'카드 이름을 작성해주세요.',1,'TX',18858,'HI',NULL,'DELETE'),(243,'카드 이름을 작성해주세요.',1,'TX',18859,'HI',NULL,'DELETE'),(244,'카드 이름을 작성해주세요.',1,'TX',18860,'ㅎ,...',NULL,'DELETE'),(245,'카드 이름을 작성해주세요.',1,'TX',18861,'fdsfdfdsafdf',NULL,'DELETE'),(246,'카드 이름을 작성해주세요.',1,'TX',18862,'fdsfsadf',NULL,'DELETE'),(247,'카드 이름을 작성해주세요.',1,'TX',18863,'gdsfsdf',NULL,'DELETE'),(248,'카드 이름을 작성해주세요.',1,'TX',18864,'fdsfsf',NULL,'DELETE'),(249,'카드 이름을 작성해주세요.',1,'TX',18865,'fdsfdsf',NULL,'DELETE'),(250,'카드 이름을 작성해주세요.',1,'TX',18866,'gggg',NULL,'DELETE'),(251,'카드 이름을 작성해주세요.',1,'TX',18868,'fdsfdf',NULL,'DELETE'),(252,'카드 이름을 작성해주세요.',1,'TX',18869,'fdsfsf',NULL,'DELETE'),(253,'카드 이름을 작성해주세요.',1,'TX',18870,'fdsf',NULL,'DELETE'),(254,'카드 이름을 작성해주세요.',1,'TX',18871,'ㅎㅇㄴㄹㅇㄹ',NULL,'DELETE'),(255,'CH2 카드 변경',1,'ML',18872,'CH2 카드 변경',NULL,'DELETE'),(256,'CH2 카드 변경',1,'CH2',18872,'CH2 카드 변경',NULL,'DELETE'),(257,'CH2 카드 변경',1,'ML',18873,'CH2 카드 변경',NULL,'DELETE'),(258,'CH2 카드 변경',1,'CH2',18873,'CH2 카드 변경',NULL,'DELETE'),(259,'CH2 카드 변경',1,'ML',18874,'CH2 카드 변경',NULL,'DELETE'),(260,'CH2 카드 변경',1,'CH2',18874,'CH2 카드 변경',NULL,'DELETE'),(261,'카드 이름을 작성해주세요.',1,'TX',18875,'ㄹㅇㄴㄹ',NULL,'DELETE'),(262,'카드 이름을 작성해주세요.',2,'TX',18858,'',NULL,'DELETE'),(263,'카드 이름을 작성해주세요.',1,'TX',18876,'ㅎㅎㅎ',NULL,'DELETE'),(264,'ㅁㅇㄹㅇㄹ세요.',2,'CH1',18876,'ㄹㅇㄴㄹ',NULL,'DELETE'),(265,'ㄹㅇㄴㄹ',3,'CH2',18876,'ㄹㅇㄴㄹ',NULL,'DELETE'),(266,'카드 이름을 작성해주세요.',1,'CH1',18877,'',NULL,'DELETE'),(267,'카드 이름을 작성해주세요.',2,'TX',18877,'',NULL,'DELETE'),(268,'ㄹㅇㄹ',1,'CH1',18878,'ㄹㅇㄴㄹ',NULL,'DELETE'),(269,'ㅇㄹㄴㄹ',2,'CH2',18878,'ㄹㅇㄴㄹㅇㄴㄹ',NULL,'DELETE'),(270,'카드 이름ㄹㄹㄹ을 작성해주세요.',1,'CH1',18879,'ㄹㅇㄹㄴㅇㄹ',NULL,'DELETE'),(271,'카드 ㄹㅇㅁㄹ작성해주세요.',2,'CH2',18879,'ㄹㅇㄴㄹㄴㅇㄹ',NULL,'DELETE'),(272,'카드 이름을 작성해주세요.',1,'TX',18880,'TX card 예시',NULL,'DELETE'),(273,'챗봇 ㅎㅇ',1,'CH1',18881,'이거 새로운 기능',NULL,'DELETE'),(274,'ㅎㅎ 드디어 성공',1,'CH2',18882,'이제 진짜 되요.. 힘들었어요',NULL,'DELETE'),(275,'카드 이름을 작성해주세요.',1,'TA',18883,'',NULL,'DELETE'),(276,'카드 이름을 작성해주세요.',1,'TX',18884,'챗봇 연동',NULL,'DELETE'),(277,'공정',2,'CH2',18884,'공정을 보려면 버튼을 선택하세요',NULL,'DELETE'),(278,'카드 이름을 작성해주세요.',1,'TX',18885,'ㅋㅋ쿄쿄쿄쿄쿜ㅋㅋ',NULL,'DELETE'),(279,'안녕',2,'CH1',18885,'이제된다',NULL,'DELETE'),(280,'카드 이름을 작성해주세요.',1,'TX',18886,'test',NULL,'DELETE'),(281,'카드1',2,'CH1',18886,'ㅇㄹㅇㄹ',NULL,'DELETE'),(282,'카드',1,'CH1',18887,'내용',NULL,'DELETE'),(283,'카드 이름을 작성해주세요.',1,'TX',18888,'시연용입니다.',NULL,'DELETE'),(284,'카드',2,'CH1',18888,'테스트',NULL,'DELETE'),(285,'카드 이름을 작성해주세요.',3,'TX',18888,'두번째 말풍선',NULL,'DELETE'),(286,'카드 이름을 작성해주세요.',1,'TX',18889,'ㅇㄹㅇㄹ',NULL,'DELETE'),(287,'ㅇㄹㅇㄹ',2,'CH1',18889,'ㅇㄹㅇㄹ',NULL,'DELETE'),(288,'카드 이름을 작성해주세요.',1,'TX',18890,'안녕하세요\n저는\n새로운 기능입니다!!',NULL,'DELETE'),(289,'싸피최고',2,'CH1',18890,'좋아요',NULL,'DELETE'),(290,'카드 이름을 작성해주세요.',1,'TX',18891,'안녕하세요!!',NULL,'DELETE'),(291,'싸피',2,'CH1',18891,'안녕하세요',NULL,'DELETE'),(292,'카드 이름을 작성해주세요.',1,'TX',18892,'안녕하세요',NULL,'DELETE'),(293,'싸피',2,'CH1',18892,'안녕',NULL,'DELETE'),(294,'카드 이름을 작성해주세요.',1,'TX',18893,'안녕하세요!!',NULL,'DELETE'),(295,'싸피',2,'CH1',18893,'하이',NULL,'DELETE'),(296,'카드 이름을 작성해주세요.',1,'TX',18894,'안녕하세요\nMESC 입니다\n시연 카드 추가하겠습니다.',NULL,'DELETE'),(297,'싸피',2,'CH1',18894,'',NULL,'DELETE'),(298,'카드 이름을 작성해주세요.',1,'TX',18895,'안녕하세요\nMESC 입니다\n시연 카드 추가하겠습니다.',NULL,'DELETE'),(299,'싸피',2,'CH1',18895,'',NULL,'DELETE'),(300,'카드 이름을 작성해주세요.',1,'TX',18896,'안녕하세요',NULL,'DELETE'),(301,'싸피',2,'CH1',18896,'좋은 하루 되세요',NULL,'DELETE'),(302,'카드 이름을 작성해주세요.',1,'TX',18897,'안녕하세요\nMESC 입니다\n시연 카드 추가하겠습니다.',NULL,'DELETE'),(303,'카드',2,'CH1',18897,'좋은 하루 되세요 :)',NULL,'DELETE'),(304,'카드 이름을 작성해주세요.',1,'TX',18898,'안녕하세요\nMESC 입니다\n시연 카드 추가하겠습니다.',NULL,'ACTIVE'),(305,'카드',2,'CH1',18898,'좋은 하루 되세요 :)',NULL,'ACTIVE'),(306,'카드 이름을 작성해주세요.',1,'TX',18899,'테스트 입니다',NULL,'DELETE'),(307,'시연용',2,'CH1',18899,'안녕하세요',NULL,'DELETE'),(308,'카드 이름을 작성해주세요.',1,'TX',18900,'시연입니다',NULL,'DELETE'),(309,'시연',2,'CH1',18900,'시연입니다',NULL,'DELETE'),(310,'카드 이름을 작성해주세요.',1,'TX',18901,'시연',NULL,'ACTIVE'),(311,'시연',2,'CH1',18901,'시연입니다',NULL,'ACTIVE'),(312,'카드 이름을 작성해주세요.',1,'TX',18902,'카드추가로 수정',NULL,'ACTIVE'),(313,'안녕수정1',2,'CH2',18902,'안녕하세요수정수정',NULL,'ACTIVE'),(314,'카드 이름을 작성해주세요.',1,'TX',18903,'카드추가test',NULL,'ACTIVE'),(315,'카드추가',2,'CH2',18903,'카드추가하기',NULL,'ACTIVE');
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkbox`
--

DROP TABLE IF EXISTS `checkbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkbox` (
  `CHECKBOX_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'ACTIVE',
  PRIMARY KEY (`CHECKBOX_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkbox`
--

LOCK TABLES `checkbox` WRITE;
/*!40000 ALTER TABLE `checkbox` DISABLE KEYS */;
INSERT INTO `checkbox` VALUES (1,'1번','ACTIVE'),(2,'2번','ACTIVE');
/*!40000 ALTER TABLE `checkbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `component`
--

DROP TABLE IF EXISTS `component`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `component` (
  `COMPONENT_ID` int NOT NULL AUTO_INCREMENT,
  `CTYPE` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT 'B(button), I(input text), D(drop down), C(check box)',
  `CARD_ID` int NOT NULL,
  `SEQUENCE` int DEFAULT NULL,
  `LINK_ID` int DEFAULT NULL,
  `entity_state` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'ACTIVE',
  PRIMARY KEY (`COMPONENT_ID`),
  KEY `FKk7aqcgbwmg56v85tg6nhx0cem` (`CARD_ID`),
  CONSTRAINT `FKk7aqcgbwmg56v85tg6nhx0cem` FOREIGN KEY (`CARD_ID`) REFERENCES `card` (`CARD_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=267 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `component`
--

LOCK TABLES `component` WRITE;
/*!40000 ALTER TABLE `component` DISABLE KEYS */;
INSERT INTO `component` VALUES (1,'BU',11,1,1,NULL,'ACTIVE'),(2,'BU',13,1,2,NULL,'ACTIVE'),(3,'BU',13,2,3,NULL,'ACTIVE'),(4,'BU',4,1,4,NULL,'ACTIVE'),(5,'BU',4,2,5,NULL,'ACTIVE'),(6,'BU',4,3,6,NULL,'ACTIVE'),(7,'BU',4,4,7,NULL,'ACTIVE'),(8,'BU',4,5,8,NULL,'ACTIVE'),(9,'BU',4,6,9,NULL,'ACTIVE'),(10,'BU',4,7,10,NULL,'DELETE'),(11,'BU',4,8,11,NULL,'ACTIVE'),(12,'BU',4,9,12,NULL,'DELETE'),(13,'BU',4,10,13,NULL,'ACTIVE'),(14,'BU',6,1,21,NULL,'ACTIVE'),(23,'DD',22,3,4,NULL,'DELETE'),(24,'DD',22,1,5,NULL,'ACTIVE'),(25,'DD',1,2,6,NULL,'ACTIVE'),(100,'BU',22,4,22,NULL,'ACTIVE'),(101,'DD',122,2,28,NULL,'DELETE'),(102,'BU',114,1,91,NULL,'ACTIVE'),(103,'BU',114,2,92,NULL,'ACTIVE'),(104,'DD',123,1,29,NULL,'DELETE'),(105,'DD',123,2,30,NULL,'DELETE'),(106,'BU',114,1,93,NULL,'ACTIVE'),(107,'BU',114,2,94,NULL,'ACTIVE'),(112,'BU',127,1,99,NULL,'DELETE'),(113,'DD',22,3,31,NULL,'ACTIVE'),(114,'BU',134,1,100,NULL,'DELETE'),(115,'BU',135,1,101,NULL,'DELETE'),(116,'BU',136,1,102,NULL,'DELETE'),(117,'BU',137,1,103,NULL,'DELETE'),(118,'BU',138,1,104,NULL,'DELETE'),(119,'BU',138,1,105,NULL,'DELETE'),(120,'BU',139,1,106,NULL,'DELETE'),(121,'BU',140,1,107,NULL,'DELETE'),(122,'BU',141,1,108,NULL,'DELETE'),(123,'BU',142,1,109,NULL,'DELETE'),(124,'BU',143,1,110,NULL,'DELETE'),(125,'BU',144,1,111,NULL,'DELETE'),(126,'BU',145,1,112,NULL,'DELETE'),(127,'BU',146,1,113,NULL,'DELETE'),(128,'BU',147,1,114,NULL,'DELETE'),(129,'BU',148,1,115,NULL,'DELETE'),(130,'BU',150,1,117,NULL,'DELETE'),(131,'BU',149,1,116,NULL,'DELETE'),(132,'BU',151,1,118,NULL,'DELETE'),(133,'BU',152,1,119,NULL,'DELETE'),(134,'BU',153,1,120,NULL,'DELETE'),(135,'BU',154,1,121,NULL,'DELETE'),(136,'BU',155,1,122,NULL,'DELETE'),(137,'BU',156,1,123,NULL,'DELETE'),(138,'BU',157,1,124,NULL,'DELETE'),(139,'BU',124,1,124,NULL,'DELETE'),(140,'BU',172,1,125,NULL,'DELETE'),(141,'BU',179,1,126,NULL,'DELETE'),(142,'BU',181,1,127,NULL,'ACTIVE'),(143,'BU',181,2,128,NULL,'ACTIVE'),(144,'BU',181,3,129,NULL,'ACTIVE'),(145,'BU',181,4,130,NULL,'ACTIVE'),(146,'BU',181,5,131,NULL,'ACTIVE'),(147,'BU',181,6,132,NULL,'ACTIVE'),(148,'BU',181,7,133,NULL,'ACTIVE'),(149,'BU',181,8,134,NULL,'ACTIVE'),(150,'BU',181,9,135,NULL,'ACTIVE'),(152,'BU',182,1,146,NULL,'DELETE'),(153,'BU',182,2,186,NULL,'DELETE'),(154,'BU',183,1,147,NULL,'DELETE'),(155,'BU',183,2,148,NULL,'DELETE'),(156,'BU',182,2,150,NULL,'DELETE'),(157,'DD',182,3,32,NULL,'DELETE'),(158,'BU',185,0,154,NULL,'DELETE'),(159,'BU',186,0,155,NULL,'DELETE'),(160,'BU',190,1,156,NULL,'DELETE'),(161,'BU',194,1,157,NULL,'DELETE'),(162,'BU',195,1,158,NULL,'DELETE'),(163,'BU',196,1,159,NULL,'DELETE'),(164,'BU',196,1,160,NULL,'DELETE'),(165,'BU',197,1,161,NULL,'DELETE'),(166,'BU',197,1,162,NULL,'DELETE'),(167,'BU',198,1,163,NULL,'DELETE'),(168,'BU',198,1,164,NULL,'DELETE'),(169,'BU',199,1,165,NULL,'DELETE'),(170,'BU',201,1,166,NULL,'DELETE'),(171,'BU',204,1,167,NULL,'DELETE'),(172,'BU',204,2,168,NULL,'DELETE'),(173,'BU',204,2,169,NULL,'DELETE'),(174,'BU',204,2,170,NULL,'DELETE'),(175,'BU',205,1,171,NULL,'DELETE'),(176,'BU',206,1,172,NULL,'DELETE'),(177,'BU',207,1,173,NULL,'DELETE'),(178,'BU',212,1,174,NULL,'DELETE'),(179,'BU',181,1,175,NULL,'DELETE'),(180,'BU',212,0,176,NULL,'DELETE'),(181,'BU',181,2,177,NULL,'DELETE'),(182,'BU',181,1,178,NULL,'DELETE'),(183,'BU',181,1,179,NULL,'DELETE'),(184,'BU',233,1,146,NULL,'DELETE'),(185,'BU',233,2,181,NULL,'DELETE'),(186,'BU',181,1,183,NULL,'DELETE'),(187,'BU',4,1,184,NULL,'DELETE'),(188,'BU',4,1,185,NULL,'DELETE'),(189,'DD',182,3,33,NULL,'DELETE'),(190,'BU',242,0,187,NULL,'DELETE'),(191,'BU',243,0,188,NULL,'DELETE'),(192,'BU',244,0,189,NULL,'DELETE'),(193,'BU',245,0,190,NULL,'DELETE'),(194,'BU',246,0,191,NULL,'DELETE'),(195,'BU',247,0,192,NULL,'DELETE'),(196,'BU',248,0,193,NULL,'DELETE'),(197,'BU',249,0,194,NULL,'DELETE'),(198,'BU',250,0,195,NULL,'DELETE'),(199,'BU',251,0,196,NULL,'DELETE'),(200,'BU',252,0,197,NULL,'DELETE'),(201,'BU',253,0,198,NULL,'DELETE'),(202,'BU',254,0,199,NULL,'DELETE'),(203,'BU',255,1,146,NULL,'DELETE'),(204,'BU',255,2,200,NULL,'DELETE'),(205,'BU',256,1,146,NULL,'DELETE'),(206,'BU',256,2,201,NULL,'DELETE'),(207,'BU',257,1,146,NULL,'DELETE'),(208,'BU',257,2,202,NULL,'DELETE'),(209,'BU',258,1,146,NULL,'DELETE'),(210,'BU',258,2,203,NULL,'DELETE'),(211,'BU',259,1,146,NULL,'DELETE'),(212,'BU',259,2,204,NULL,'DELETE'),(213,'BU',260,1,146,NULL,'DELETE'),(214,'BU',260,2,205,NULL,'DELETE'),(215,'BU',261,0,206,NULL,'DELETE'),(216,'BU',262,0,207,NULL,'DELETE'),(217,'BU',263,1,208,NULL,'DELETE'),(218,'BU',263,1,209,NULL,'DELETE'),(219,'BU',264,1,210,NULL,'DELETE'),(220,'BU',264,1,211,NULL,'DELETE'),(221,'BU',265,1,212,NULL,'DELETE'),(222,'BU',265,1,213,NULL,'DELETE'),(223,'BU',266,1,214,NULL,'DELETE'),(224,'BU',266,1,215,NULL,'DELETE'),(225,'BU',267,1,216,NULL,'DELETE'),(226,'BU',267,1,217,NULL,'DELETE'),(227,'BU',268,1,218,NULL,'DELETE'),(228,'BU',268,2,219,NULL,'DELETE'),(229,'BU',269,1,220,NULL,'DELETE'),(230,'BU',269,2,221,NULL,'DELETE'),(231,'BU',270,1,222,NULL,'DELETE'),(232,'BU',271,1,223,NULL,'DELETE'),(233,'BU',271,2,224,NULL,'DELETE'),(234,'BU',273,1,225,NULL,'DELETE'),(235,'BU',274,1,226,NULL,'DELETE'),(236,'BU',274,2,227,NULL,'DELETE'),(237,'BU',277,1,228,NULL,'DELETE'),(238,'BU',277,2,229,NULL,'DELETE'),(239,'BU',279,1,230,NULL,'DELETE'),(240,'BU',4,1,231,NULL,'DELETE'),(241,'BU',281,1,232,NULL,'DELETE'),(242,'BU',282,1,233,NULL,'DELETE'),(243,'BU',4,1,234,NULL,'DELETE'),(244,'BU',284,1,235,NULL,'DELETE'),(245,'BU',287,1,236,NULL,'DELETE'),(246,'BU',289,1,237,NULL,'DELETE'),(247,'BU',291,1,238,NULL,'DELETE'),(248,'BU',293,1,239,NULL,'DELETE'),(249,'BU',4,1,240,NULL,'DELETE'),(250,'BU',4,1,241,NULL,'DELETE'),(251,'BU',4,1,242,NULL,'ACTIVE'),(252,'BU',295,1,243,NULL,'DELETE'),(253,'BU',297,1,244,NULL,'DELETE'),(254,'BU',299,1,245,NULL,'DELETE'),(255,'BU',301,1,246,NULL,'DELETE'),(256,'BU',303,1,247,NULL,'DELETE'),(257,'BU',305,1,248,NULL,'ACTIVE'),(258,'BU',307,1,249,NULL,'DELETE'),(259,'BU',4,1,250,NULL,'DELETE'),(260,'BU',309,1,251,NULL,'DELETE'),(261,'BU',311,1,252,NULL,'ACTIVE'),(262,'BU',4,1,253,NULL,'ACTIVE'),(263,'BU',313,1,254,NULL,'ACTIVE'),(264,'BU',313,2,255,NULL,'ACTIVE'),(265,'BU',315,1,256,NULL,'ACTIVE'),(266,'BU',315,2,257,NULL,'ACTIVE');
/*!40000 ALTER TABLE `component` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `component_values`
--

DROP TABLE IF EXISTS `component_values`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `component_values` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `VALUE` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `LINK_ID` int DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'ACTIVE',
  `COMPONENT_ID` int DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK6639q2a16cnd2pcu4wlb59eww` (`LINK_ID`),
  CONSTRAINT `FK53qjiyibsdjp09y4ic1cdie42` FOREIGN KEY (`LINK_ID`) REFERENCES `dropdown` (`DROPDOWN_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `component_values`
--

LOCK TABLES `component_values` WRITE;
/*!40000 ALTER TABLE `component_values` DISABLE KEYS */;
INSERT INTO `component_values` VALUES (1,'웨이퍼 형성',4,'DELETE',1),(2,'웨이퍼 세정',4,'DELETE',2),(3,'웨이퍼 절단',4,'DELETE',3),(4,'실리콘 코팅',4,'DELETE',4),(5,'실리콘 테이핑',4,'DELETE',5),(6,'슬라이싱 검사',4,'DELETE',6),(7,'코팅',4,'DELETE',7),(8,'건조',4,'DELETE',8),(9,'코팅 검사',4,'DELETE',9),(15,'CPU',7,'ACTIVE',0),(16,'DRAM',7,'ACTIVE',0),(17,'반도체 센서',7,'ACTIVE',0),(18,'반도체 레이저 다이오드',7,'ACTIVE',0),(19,'클린룸',7,'ACTIVE',0),(20,'제조장비',7,'ACTIVE',0),(21,'화학물질 및 원재자 저장 및 공급 시스템',7,'ACTIVE',0),(22,'생산 제어 시스템',7,'ACTIVE',0),(23,'개발 시설',7,'ACTIVE',0),(24,'안전 시설',7,'ACTIVE',0),(29,'제품3',33,'DELETE',NULL),(30,'제품4',33,'DELETE',NULL),(31,'웨어퍼 평화화',5,'ACTIVE',3),(32,'양극재 코팅',5,'ACTIVE',4),(33,'음극재 코팅',5,'ACTIVE',5),(34,'세포 조립',5,'ACTIVE',6),(35,'세포 적층',5,'ACTIVE',7),(36,'모듈 캡슐화',5,'ACTIVE',8),(37,'전선 연결',5,'ACTIVE',9),(38,'포장 검사',5,'ACTIVE',10),(39,'포장 밀봉',5,'ACTIVE',11),(40,'라벨링',5,'ACTIVE',12),(41,'용량 테스트',5,'ACTIVE',13),(42,'충전/방전 테스트',5,'ACTIVE',14),(43,'안전성 테스트',5,'ACTIVE',15),(44,'성분 분리',5,'ACTIVE',16),(45,'재활용 가능한 부품 추출',5,'ACTIVE',17),(60,'INR18650-25R',31,'ACTIVE',1),(61,'INR18650-30Q',31,'ACTIVE',2),(62,'INR21700-40T',31,'ACTIVE',3),(63,'INR18650-20S',31,'ACTIVE',4),(64,'INR18650-35E',31,'ACTIVE',5),(65,'INR21700-30T',31,'ACTIVE',6),(66,'INR18650-29E',31,'ACTIVE',7),(67,'INR18650-22P',31,'ACTIVE',8),(68,'INR21700-50E',31,'ACTIVE',9),(69,'\'INR18650-24S',31,'ACTIVE',10);
/*!40000 ALTER TABLE `component_values` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dcb_map`
--

DROP TABLE IF EXISTS `dcb_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dcb_map` (
  `dcb_map_id` int NOT NULL,
  `block_id` int DEFAULT NULL,
  `dcb_id` int DEFAULT NULL,
  PRIMARY KEY (`dcb_map_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dcb_map`
--

LOCK TABLES `dcb_map` WRITE;
/*!40000 ALTER TABLE `dcb_map` DISABLE KEYS */;
/*!40000 ALTER TABLE `dcb_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direct_connect_button`
--

DROP TABLE IF EXISTS `direct_connect_button`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direct_connect_button` (
  `dcb_id` int NOT NULL AUTO_INCREMENT,
  `dcb_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dcb_link_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dcb_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `response` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `response_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dcbb_sequence` int DEFAULT NULL,
  PRIMARY KEY (`dcb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direct_connect_button`
--

LOCK TABLES `direct_connect_button` WRITE;
/*!40000 ALTER TABLE `direct_connect_button` DISABLE KEYS */;
/*!40000 ALTER TABLE `direct_connect_button` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direct_connection_button`
--

DROP TABLE IF EXISTS `direct_connection_button`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direct_connection_button` (
  `DCB_ID` int NOT NULL AUTO_INCREMENT,
  `DCB_NAME` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `DCB_LINK` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `DCB_LINK_TYPE` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '정적, 동적API, 동적변수',
  `DCB_SEQUENCE` smallint NOT NULL,
  `BLOCK_ID` int NOT NULL,
  `ICON_ID` tinyint DEFAULT NULL,
  `RESPONSE` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `RESPONSE_TYPE` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'S(정적), D(동적)',
  PRIMARY KEY (`DCB_ID`),
  KEY `FKp1dib1yb0v8mncsfdiusd4fpb` (`BLOCK_ID`),
  CONSTRAINT `FKp1dib1yb0v8mncsfdiusd4fpb` FOREIGN KEY (`BLOCK_ID`) REFERENCES `block` (`BLOCK_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direct_connection_button`
--

LOCK TABLES `direct_connection_button` WRITE;
/*!40000 ALTER TABLE `direct_connection_button` DISABLE KEYS */;
/*!40000 ALTER TABLE `direct_connection_button` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dropdown`
--

DROP TABLE IF EXISTS `dropdown`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dropdown` (
  `DROPDOWN_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `REAL_COLUMN_NAME` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `REAL_TABLE_NAME` varchar(45) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `TYPE` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'N(일반), C(캘린더)',
  `state` varchar(255) COLLATE utf8mb4_general_ci DEFAULT 'ACTIVE',
  PRIMARY KEY (`DROPDOWN_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dropdown`
--

LOCK TABLES `dropdown` WRITE;
/*!40000 ALTER TABLE `dropdown` DISABLE KEYS */;
INSERT INTO `dropdown` VALUES (1,'1번','column',NULL,'N','ACTIVE'),(2,'2번','c_ad',NULL,'N','ACTIVE'),(3,'3번','c_',NULL,'N','ACTIVE'),(4,'공정','STEP_ID','WO_INFO','N','DELETE'),(5,'라인','LINE_ID','WO_INFO','N','ACTIVE'),(6,'날짜','WO_YMD','WO_INFO','C','ACTIVE'),(7,'휴지통','PROD_ID','WO_INFO','N','DELETE'),(27,'tDD1','PROD_ID','WO_INFO','N','DELETE'),(28,'tDD2','SHOP_ID','WO_INFO','N','DELETE'),(29,'tDD1','PROD_ID','WO_INFO','N','DELETE'),(30,'tDD2','SHOP_ID','WO_INFO','N','DELETE'),(31,'제품','PROD_ID','WO_INFO','N','ACTIVE'),(32,'tDD3','PROD_ID','WO_INFO','N','DELETE'),(33,'tDD3','PROD_ID','WO_INFO','N','DELETE');
/*!40000 ALTER TABLE `dropdown` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `FAQ_ID` int NOT NULL AUTO_INCREMENT,
  `QUESTION` varchar(255) DEFAULT NULL,
  `ANSWER` varchar(255) DEFAULT NULL,
  `SECTION` int DEFAULT NULL,
  PRIMARY KEY (`FAQ_ID`),
  KEY `FKarfg7g6f6fm2ogr735u0jkv3p` (`SECTION`),
  CONSTRAINT `FKarfg7g6f6fm2ogr735u0jkv3p` FOREIGN KEY (`SECTION`) REFERENCES `faq_section` (`FAQ_SECTION_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (1,'로그인이 안 되는 경우 어떻게 해야 하나요?','로그인에 문제가 있는 경우, 먼저 녹스 계정을 확인해주세요. 녹스 계정이 없으시다면 저희 서비스를 이용할 수 없습니다.',1),(2,'소셜 미디어로 로그인하는 방법이 있나요?','현재 저희 서비스는 삼성과 관련된 중요한 정보들이 있어, 녹스에서만 지원 가능합니다.',1),(3,'두 번째 계정으로 로그인하려면 어떻게 해야 하나요?','두번째계정? 장난해?',1),(4,'계정 보안을 강화하는 방법은 무엇인가요?','계정 보안을 강화하려면, 강력한 암호를 사용하고 정기적으로 녹스 비밀번호를 변경하는 것이 좋습니다.',1),(5,'로그인 시도가 제한되었을 때 어떻게 해결하나요?','일정 횟수 이상의 실패하신경우는 없습니다. 왜냐면 기능이 없거든유...',1),(6,'데이터베이스(DB) 연결이 실패할 때 어떻게 해야 하나요?','DB 연결에 문제가 있는 경우, 먼저 정확한 연결 정보를 확인해주세요. 사용자 이름, 비밀번호, 호스트 주소 등이 올바른지 확인하고, 필요에 따라 DB 관리자 또는 호스팅 서비스에 연락하여 연결 상태를 확인해보세요.',2),(7,'새로운 데이터를 추가하는 방법은 무엇인가요?','데이터를 추가하려면 앱 내에서 제공하는 쿼리문작성 페이지에 직접 추가하실 수 있습니다.데이터베이스에 새로운 정보를 추가할 때 필수 입력 사항이나 형식을 준수하는지 확인하세요.',2),(8,'데이터를 수정 또는 업데이트하는 방법은 어떤가요?','기존 데이터를 수정하려면 해당 데이터의 고유 식별자(주로 프라이머리 키)를 사용하여 수정할 수 있는 인터페이스를 찾아 이용하세요. 수정 사항을 저장하기 전에 신중히 검토하여 데이터 일관성을 유지하세요.',2),(9,'데이터를 삭제하는 것은 어떻게 하나요?','데이터 삭제는 주의해서 진행해야 합니다. 보통 관리자 페이지나 특별한 삭제 폼을 통해 삭제할 데이터를 선택하고 확인 단계를 거칩니다. 삭제하기 전에 데이터의 중요성을 신중히 평가하고, 필요한 경우 백업을 만들어두는 것이 좋습니다.',2),(10,'DB 성능 최적화를 위한 팁은 무엇인가요?','DB 성능을 최적화하려면 쿼리를 효율적으로 작성하고, 인덱스를 적절히 사용하세요. 불필요한 데이터를 정기적으로 정리하고, 필요한 경우 캐싱을 활용하여 성능 향상을 도모하세요. 또한, 서버 리소스와 연결 풀링을 관리하여 최상의 성능을 유지하세요.',2),(11,'연락처를 추가하는 방법은 무엇인가요?','새로운 연락처를 추가하는 방법은 없습니다. 삼성 SDI 임직원만 쓸수 있기 때문에 보안상의 문제로 직접 추가는 어렵습니다.',3),(12,'연락처를 수정하는 방법은 어떤가요?','기존 연락처를 수정하는 방법도 없습니다.삼성 SDI 임직원만 쓸수 있기 때문에 보안상의 문제로 직접 수정은 어렵습니다.',3),(13,'연락처를 검색하는 방법은 무엇인가요?','앱 내에서 연락처를 검색하려면 검색 창이나 필터 기능을 이용하세요. 이름, 전화번호, 이메일 주소 등으로 검색하여 원하는 연락처를 빠르게 찾을 수 있습니다.',3),(14,'연락처를 그룹화하는 방법이 있나요?','일부 앱은 연락처를 그룹으로 관리할 수 있는 기능을 제공합니다. 연락처를 그룹으로 묶어서 관리하면 특정 그룹에 속한 연락처에 대해 일괄 작업이 가능하며, 필요한 경우 그룹을 생성하고 편리하게 관리할 수 있습니다.',3),(23,'연락처 삭제에 관한 테스트','faq 연락처 삭제에 관한 테스트',3);
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq_section`
--

DROP TABLE IF EXISTS `faq_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq_section` (
  `FAQ_SECTION_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`FAQ_SECTION_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq_section`
--

LOCK TABLES `faq_section` WRITE;
/*!40000 ALTER TABLE `faq_section` DISABLE KEYS */;
INSERT INTO `faq_section` VALUES (1,'로그인'),(2,'챗봇'),(3,'연락처');
/*!40000 ALTER TABLE `faq_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_member`
--

DROP TABLE IF EXISTS `group_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_member` (
  `group_member_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `group_id` int DEFAULT NULL,
  PRIMARY KEY (`group_member_id`),
  KEY `FKillbee5bqt7tkquggcjccltuh` (`group_id`),
  CONSTRAINT `FKillbee5bqt7tkquggcjccltuh` FOREIGN KEY (`group_id`) REFERENCES `organization` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_member`
--

LOCK TABLES `group_member` WRITE;
/*!40000 ALTER TABLE `group_member` DISABLE KEYS */;
INSERT INTO `group_member` VALUES (1,2,1),(2,3,1),(4,1,2),(5,2,2),(7,1,23),(9,3,23),(74,1,20),(75,2,20),(76,3,20),(77,4,20),(78,5,20),(79,6,20),(85,6,45),(92,1,51),(93,2,51),(94,3,51),(95,4,51),(96,5,51),(97,6,51),(98,1,45),(99,2,45),(100,2,50),(102,5,50),(103,6,50),(105,3,50),(107,7,45),(108,3,45),(109,4,45),(111,7,50),(112,1,53),(114,3,53),(115,4,54),(116,6,54),(117,7,54),(118,1,55),(119,3,55),(120,6,55),(121,7,55),(122,7,53),(123,9,53),(124,1,57),(125,2,57),(126,3,57),(127,4,57);
/*!40000 ALTER TABLE `group_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `input_text`
--

DROP TABLE IF EXISTS `input_text`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `input_text` (
  `INPUT_TEXT_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `HINT` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `COMPONENT_ID` int NOT NULL,
  PRIMARY KEY (`INPUT_TEXT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `input_text`
--

LOCK TABLES `input_text` WRITE;
/*!40000 ALTER TABLE `input_text` DISABLE KEYS */;
/*!40000 ALTER TABLE `input_text` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `label` (
  `LABEL_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `SEQUENCE` int DEFAULT NULL,
  `CARD_ID` int NOT NULL,
  `LABEL_TYPE` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `component_id` int NOT NULL,
  PRIMARY KEY (`LABEL_ID`),
  KEY `FKplid7r3y7lj645d6orprn8bk6` (`CARD_ID`),
  CONSTRAINT `FKplid7r3y7lj645d6orprn8bk6` FOREIGN KEY (`CARD_ID`) REFERENCES `card` (`CARD_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organization` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `sequence` int DEFAULT NULL,
  `state` varchar(10) COLLATE utf8mb4_general_ci DEFAULT 'ACTIVE',
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES (1,'A그룹',1,'ACTIVE',10),(2,'C그룹',2,'ACTIVE',10),(11,'C그룹',NULL,'ACTIVE',10),(15,'C그룹',NULL,'DELETE',4),(19,'last',NULL,'DELETE',4),(20,'yeah!!!!',NULL,'DELETE',4),(21,'C그룹',NULL,'DELETE',4),(22,'C그룹',NULL,'DELETE',4),(23,'D그룹',4,'ACTIVE',10),(24,'test1',1,'ACTIVE',10),(25,'test1',2,'ACTIVE',10),(26,'C그룹',NULL,'DELETE',4),(27,'test',NULL,'DELETE',4),(28,'rest',NULL,'DELETE',4),(29,'test',NULL,'DELETE',4),(30,'fuck',NULL,'DELETE',4),(31,'test',NULL,'DELETE',4),(32,'32',NULL,'DELETE',4),(33,'test',NULL,'DELETE',4),(34,'HI',NULL,'DELETE',4),(35,'test',NULL,'DELETE',4),(36,'dfdsfda',NULL,'DELETE',4),(37,'test',NULL,'DELETE',4),(38,'test',NULL,'DELETE',4),(39,'test',NULL,'DELETE',4),(40,'test',NULL,'DELETE',4),(41,'test',NULL,'DELETE',4),(42,'test',NULL,'DELETE',4),(43,'test',NULL,'DELETE',4),(44,'teset',NULL,'DELETE',4),(45,'test',NULL,'ACTIVE',4),(46,'test',NULL,'DELETE',4),(47,'test',NULL,'DELETE',4),(48,'test',NULL,'DELETE',4),(49,'test',NULL,'DELETE',4),(50,'test',NULL,'ACTIVE',4),(51,'test',NULL,'ACTIVE',4),(52,'test',NULL,'DELETE',12),(53,'코팅B',NULL,'ACTIVE',12),(54,'Ghjj',NULL,'DELETE',12),(55,'웨이퍼 테스트A',NULL,'ACTIVE',12),(56,'배터리 테스트A',NULL,'ACTIVE',12),(57,'배터리 제조A',NULL,'ACTIVE',12),(58,'mes',NULL,'DELETE',100),(59,'mes',NULL,'ACTIVE',100),(60,'fjfk',NULL,'DELETE',100);
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `section`
--

DROP TABLE IF EXISTS `section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `section` (
  `SECTION_ID` int NOT NULL AUTO_INCREMENT,
  `SECTION_TYPE` smallint DEFAULT NULL,
  `BLOCK_ID` int DEFAULT NULL,
  PRIMARY KEY (`SECTION_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `section`
--

LOCK TABLES `section` WRITE;
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
INSERT INTO `section` VALUES (1,0,11),(2,0,12),(3,2,6),(4,1,7),(5,1,8),(6,1,9),(7,1,10),(8,1,4),(9,2,5),(10,2,3),(11,1,15),(12,1,16),(13,1,17),(14,1,1035),(15,2,13);
/*!40000 ALTER TABLE `section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone_number` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_user_id` int NOT NULL,
  `roles` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  KEY `FKkv46dn3qakjvsk7ra33nd5sns` (`user_user_id`),
  CONSTRAINT `FKkv46dn3qakjvsk7ra33nd5sns` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-29 17:49:20
