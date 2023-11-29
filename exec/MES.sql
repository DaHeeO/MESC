CREATE DATABASE  IF NOT EXISTS `mes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mes`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: k9b201a.p.ssafy.io    Database: mes
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
-- Table structure for table `action_map`
--

DROP TABLE IF EXISTS `action_map`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `action_map` (
  `ACTION_ID` int NOT NULL AUTO_INCREMENT,
  `QUERY` text NOT NULL,
  `QUERY_TYPE` varchar(10) NOT NULL COMMENT '조회, 수정, 삭제 여부',
  PRIMARY KEY (`ACTION_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_map`
--

LOCK TABLES `action_map` WRITE;
/*!40000 ALTER TABLE `action_map` DISABLE KEYS */;
INSERT INTO `action_map` VALUES (23,'select WO_ID `작업 번호`, PROD_NAME `제품`, WO_YMD `작업지시 일자`, WO_STS `작업 상태`,  MFG_TYPE `제조 유형`\nfrom WO_INFO\njoin PROD_INFO\non WO_INFO.PROD_ID=PROD_INFO.PROD_ID','SELECT'),(24,'select * from user','SELECT'),(25,'SELECT WO_ID `작업 번호`, PROD_NAME `제품`, WO_YMD `작업지시 일자`, WO_STS `상태`,  MFG_TYPE `제조 유형`,  LINE_RPRS_GROUP_NAME `라인 대분류`, LINE_GROUP_NAME `라인 분류`, LINE_NAME `라인`\n FROM WO_INFO\n JOIN PROD_INFO\n ON WO_INFO.PROD_ID=PROD_INFO.PROD_ID\n JOIN LINE_INFO\n ON WO_INFO.LINE_ID=LINE_INFO.LINE_ID\n JOIN LINE_RPRS_GROUP_INFO\n ON LINE_INFO.LINE_RPRS_GROUP_ID=LINE_RPRS_GROUP_INFO.LINE_RPRS_GROUP_ID\n JOIN LINE_GROUP_INFO\n ON LINE_INFO.LINE_GROUP_ID=LINE_GROUP_INFO.LINE_GROUP_ID','SELECT'),(26,'SELECT ROW_NUMBER() OVER (ORDER BY WO_INFO.WO_ID) `번호`, PROD_NAME `제품`, WO_YMD `작업지시 일자`, WO_STS `상태`, MFG_TYPE `제조 유형`, LINE_RPRS_GROUP_NAME `라인 대분류`, LINE_GROUP_NAME `라인 분류`, LINE_NAME `라인`, STEP_LARGE_GROUP_INFO_NAME `공정 대분류`, STEP_MID_GROUP_INFO_NAME `공정 중분류`, STEP_GROUP_INFO_NAME `공정 분류`, STEP_NAME `공정`\n  FROM WO_INFO\n  JOIN PROD_INFO\n  ON WO_INFO.PROD_ID=PROD_INFO.PROD_ID\n  JOIN LINE_INFO\n  ON WO_INFO.LINE_ID=LINE_INFO.LINE_ID\n  JOIN LINE_RPRS_GROUP_INFO\n  ON LINE_INFO.LINE_RPRS_GROUP_ID=LINE_RPRS_GROUP_INFO.LINE_RPRS_GROUP_ID\n  JOIN LINE_GROUP_INFO\n  ON LINE_INFO.LINE_GROUP_ID=LINE_GROUP_INFO.LINE_GROUP_ID\n  JOIN STEP_INFO\n  ON LINE_INFO.LINE_ID=STEP_INFO.LINE_ID\n  JOIN STEP_GROUP_INFO\n  ON STEP_INFO.STEP_GROUP_INFO_ID=STEP_GROUP_INFO.STEP_GROUP_INFO_ID\n  JOIN STEP_MID_GROUP_INFO\n  ON STEP_INFO.STEP_MID_GROUP_INFO_ID=STEP_MID_GROUP_INFO.STEP_MID_GROUP_INFO_ID\n  JOIN STEP_LARGE_GROUP_INFO\n  ON STEP_INFO.STEP_LARGE_GROUP_INFO_ID=STEP_LARGE_GROUP_INFO.STEP_LARGE_GROUP_INFO_ID','SELECT'),(27,'SELECT ROW_NUMBER() OVER (ORDER BY WO_INFO.WO_ID) `번호`, WO_STS `상태`, WO_YMD `작업지시 일자`, MFG_TYPE `제조 유형`, PROD_NAME `제품`, LINE_RPRS_GROUP_NAME `라인 대분류`, LINE_GROUP_NAME `라인 분류`, LINE_NAME `라인`, STEP_LARGE_GROUP_INFO_NAME `공정 대분류`, STEP_MID_GROUP_INFO_NAME `공정 중분류`, STEP_GROUP_INFO_NAME `공정 분류`, STEP_NAME `공정`, FACILITY_LARGE_GROUP_NAME `설비 대분류`, FACILITY_MID_GROUP_NAME `설비 중분류`, FACILITY_GROUP_NAME `설비 분류`, FACILITY_NAME `설비`\n  FROM WO_INFO\n  JOIN PROD_INFO\n  ON WO_INFO.PROD_ID=PROD_INFO.PROD_ID\n  JOIN LINE_INFO\n  ON WO_INFO.LINE_ID=LINE_INFO.LINE_ID\n  JOIN LINE_RPRS_GROUP_INFO\n  ON LINE_INFO.LINE_RPRS_GROUP_ID=LINE_RPRS_GROUP_INFO.LINE_RPRS_GROUP_ID\n  JOIN LINE_GROUP_INFO\n  ON LINE_INFO.LINE_GROUP_ID=LINE_GROUP_INFO.LINE_GROUP_ID\n  JOIN STEP_INFO\n  ON LINE_INFO.LINE_ID=STEP_INFO.LINE_ID\n  JOIN STEP_GROUP_INFO\n  ON STEP_INFO.STEP_GROUP_INFO_ID=STEP_GROUP_INFO.STEP_GROUP_INFO_ID\n  JOIN STEP_MID_GROUP_INFO\n  ON STEP_INFO.STEP_MID_GROUP_INFO_ID=STEP_MID_GROUP_INFO.STEP_MID_GROUP_INFO_ID\n  JOIN STEP_LARGE_GROUP_INFO\n  ON STEP_INFO.STEP_LARGE_GROUP_INFO_ID=STEP_LARGE_GROUP_INFO.STEP_LARGE_GROUP_INFO_ID\n  JOIN FACILITY_INFO\n  ON STEP_INFO.STEP_ID = FACILITY_INFO.STEP_ID\n  JOIN FACILITY_GROUP_INFO\n  ON FACILITY_INFO.FACILITY_GROUP_ID = FACILITY_GROUP_INFO.FACILITY_GROUP_ID\n  JOIN FACILITY_MID_GROUP_INFO\n  ON FACILITY_MID_GROUP_INFO.FACILITY_MID_GROUP_ID = FACILITY_MID_GROUP_INFO.FACILITY_MID_GROUP_ID\n  JOIN FACILITY_LARGE_GROUP_INFO\n  ON FACILITY_MID_GROUP_INFO.FACILITY_LARGE_GROUP_ID = FACILITY_LARGE_GROUP_INFO.FACILITY_LARGE_GROUP_ID','SELECT'),(28,'SELECT STEP_ID `공정 번호`, STEP_NAME `공정 이름`, START_TIME `공정 시작 시간`, END_TIME `공정 종료 시간`, STEP_LARGE_GROUP_INFO_NAME `대분류`, STEP_MID_GROUP_INFO_NAME `중분류`, STEP_GROUP_INFO_NAME `소분류`\n FROM STEP_INFO\n JOIN STEP_GROUP_INFO\n ON STEP_INFO.STEP_GROUP_INFO_ID=STEP_GROUP_INFO.STEP_GROUP_INFO_ID\n JOIN STEP_MID_GROUP_INFO\n ON STEP_INFO.STEP_MID_GROUP_INFO_ID=STEP_MID_GROUP_INFO.STEP_MID_GROUP_INFO_ID\n JOIN STEP_LARGE_GROUP_INFO\n ON STEP_INFO.STEP_LARGE_GROUP_INFO_ID=STEP_LARGE_GROUP_INFO.STEP_LARGE_GROUP_INFO_ID','SELECT'),(29,'SELECT ROW_NUMBER() OVER (ORDER BY FACILITY_ID) `번호`, FACILITY_NAME `설비 이름`, CREATE_DATE `설비 시작 시간`, STATE `상태`, FACILITY_LARGE_GROUP_NAME `대분류`, FACILITY_MID_GROUP_NAME `중분류`, FACILITY_GROUP_NAME `소분류`\n  FROM FACILITY_INFO\n  JOIN FACILITY_GROUP_INFO\n  ON FACILITY_INFO.FACILITY_GROUP_ID = FACILITY_GROUP_INFO.FACILITY_GROUP_ID\n  JOIN FACILITY_MID_GROUP_INFO\n  ON FACILITY_MID_GROUP_INFO.FACILITY_MID_GROUP_ID = FACILITY_MID_GROUP_INFO.FACILITY_MID_GROUP_ID\n  JOIN FACILITY_LARGE_GROUP_INFO\n  ON FACILITY_MID_GROUP_INFO.FACILITY_LARGE_GROUP_ID = FACILITY_LARGE_GROUP_INFO.FACILITY_LARGE_GROUP_ID','SELECT'),(30,'SELECT LINE_ID `라인 번호`, LINE_NAME `라인 이름`, LINE_RPRS_GROUP_NAME `대분류`, LINE_GROUP_NAME `분류`\n FROM LINE_INFO\n JOIN LINE_RPRS_GROUP_INFO\n ON LINE_INFO.LINE_RPRS_GROUP_ID=LINE_RPRS_GROUP_INFO.LINE_RPRS_GROUP_ID\n JOIN LINE_GROUP_INFO\n ON LINE_INFO.LINE_GROUP_ID=LINE_GROUP_INFO.LINE_GROUP_ID','SELECT'),(31,'SELECT ROW_NUMBER() OVER (ORDER BY STEP_INFO.STEP_ID) `번호`, WO_STS `상태`, WO_YMD `작업지시 일자`, MFG_TYPE `제조 유형`, PROD_NAME `제품`, STEP_LARGE_GROUP_INFO_NAME `공정 대분류`, STEP_MID_GROUP_INFO_NAME `공정 중분류`, STEP_GROUP_INFO_NAME `공정 분류`, STEP_NAME `공정`\nFROM WO_INFO\nJOIN PROD_INFO\nON WO_INFO.PROD_ID=PROD_INFO.PROD_ID\nJOIN LINE_INFO\nON WO_INFO.LINE_ID=LINE_INFO.LINE_ID\nJOIN LINE_RPRS_GROUP_INFO\nON LINE_INFO.LINE_RPRS_GROUP_ID=LINE_RPRS_GROUP_INFO.LINE_RPRS_GROUP_ID\nJOIN LINE_GROUP_INFO\nON LINE_INFO.LINE_GROUP_ID=LINE_GROUP_INFO.LINE_GROUP_ID\nJOIN STEP_INFO\nON LINE_INFO.LINE_ID=STEP_INFO.LINE_ID\nJOIN STEP_GROUP_INFO\nON STEP_INFO.STEP_GROUP_INFO_ID=STEP_GROUP_INFO.STEP_GROUP_INFO_ID\nJOIN STEP_MID_GROUP_INFO\nON STEP_INFO.STEP_MID_GROUP_INFO_ID=STEP_MID_GROUP_INFO.STEP_MID_GROUP_INFO_ID\nJOIN STEP_LARGE_GROUP_INFO\nON STEP_INFO.STEP_LARGE_GROUP_INFO_ID=STEP_LARGE_GROUP_INFO.STEP_LARGE_GROUP_INFO_ID','SELECT'),(32,'SELECT ROW_NUMBER() OVER (ORDER BY FACILITY_INFO.FACILITY_ID) `번호`, WO_STS `상태`, WO_YMD `작업지시 일자`, MFG_TYPE `제조 유형`, PROD_NAME `제품`, FACILITY_LARGE_GROUP_NAME `설비 대분류`, FACILITY_MID_GROUP_NAME `설비 중분류`, FACILITY_GROUP_NAME `설비 분류`, FACILITY_NAME `설비`\n   FROM WO_INFO\n   JOIN PROD_INFO\n   ON WO_INFO.PROD_ID=PROD_INFO.PROD_ID\n   JOIN LINE_INFO\n   ON WO_INFO.LINE_ID=LINE_INFO.LINE_ID\n   JOIN LINE_RPRS_GROUP_INFO\n   ON LINE_INFO.LINE_RPRS_GROUP_ID=LINE_RPRS_GROUP_INFO.LINE_RPRS_GROUP_ID\n   JOIN LINE_GROUP_INFO\n   ON LINE_INFO.LINE_GROUP_ID=LINE_GROUP_INFO.LINE_GROUP_ID\n   JOIN STEP_INFO\n   ON LINE_INFO.LINE_ID=STEP_INFO.LINE_ID\n   JOIN STEP_GROUP_INFO\n   ON STEP_INFO.STEP_GROUP_INFO_ID=STEP_GROUP_INFO.STEP_GROUP_INFO_ID\n   JOIN STEP_MID_GROUP_INFO\n   ON STEP_INFO.STEP_MID_GROUP_INFO_ID=STEP_MID_GROUP_INFO.STEP_MID_GROUP_INFO_ID\n   JOIN STEP_LARGE_GROUP_INFO\n   ON STEP_INFO.STEP_LARGE_GROUP_INFO_ID=STEP_LARGE_GROUP_INFO.STEP_LARGE_GROUP_INFO_ID\n   JOIN FACILITY_INFO\n   ON STEP_INFO.STEP_ID = FACILITY_INFO.STEP_ID\n   JOIN FACILITY_GROUP_INFO\n   ON FACILITY_INFO.FACILITY_GROUP_ID = FACILITY_GROUP_INFO.FACILITY_GROUP_ID\n   JOIN FACILITY_MID_GROUP_INFO\n   ON FACILITY_MID_GROUP_INFO.FACILITY_MID_GROUP_ID = FACILITY_MID_GROUP_INFO.FACILITY_MID_GROUP_ID\n   JOIN FACILITY_LARGE_GROUP_INFO\n   ON FACILITY_MID_GROUP_INFO.FACILITY_LARGE_GROUP_ID = FACILITY_LARGE_GROUP_INFO.FACILITY_LARGE_GROUP_ID','SELECT');
/*!40000 ALTER TABLE `action_map` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility_group_info`
--

DROP TABLE IF EXISTS `facility_group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility_group_info` (
  `FACILITY_GROUP_ID` int NOT NULL AUTO_INCREMENT,
  `FACILITY_GROUP_NAME` varchar(20) NOT NULL,
  `FACILITY_MID_GROUP_ID` int NOT NULL,
  PRIMARY KEY (`FACILITY_GROUP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility_group_info`
--

LOCK TABLES `facility_group_info` WRITE;
/*!40000 ALTER TABLE `facility_group_info` DISABLE KEYS */;
INSERT INTO `facility_group_info` VALUES (1,'화학적 증착기',1),(2,'웨이퍼 세정기',2),(3,'평평화 코팅기',3),(4,'웨이퍼 절단기',2),(5,'슬라이싱 검사기',4),(6,'테이핑 기계',5),(7,'양극재 코팅기',6),(8,'건조 시스템',7),(9,'건조 검사기',4),(10,'음극재 코팅기',6);
/*!40000 ALTER TABLE `facility_group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility_info`
--

DROP TABLE IF EXISTS `facility_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility_info` (
  `FACILITY_ID` int NOT NULL AUTO_INCREMENT,
  `FACILITY_NAME` varchar(30) NOT NULL,
  `CREATE_DATE` date NOT NULL,
  `STATE` varchar(20) NOT NULL,
  `FACILITY_GROUP_ID` int NOT NULL,
  `STEP_ID` int NOT NULL,
  `FCT_ID` int NOT NULL,
  PRIMARY KEY (`FACILITY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility_info`
--

LOCK TABLES `facility_info` WRITE;
/*!40000 ALTER TABLE `facility_info` DISABLE KEYS */;
INSERT INTO `facility_info` VALUES (1,'WaferB101','2022-02-22','ACTIVE',1,1,1),(2,'CleanerA22','2022-02-22','ACTIVE',1,2,1),(3,'CoatingA98','2022-02-22','ACTIVE',1,3,1),(4,'WaferC12','2022-02-22','ACTIVE',1,1,1),(5,'WaferB102','2022-02-22','ACTIVE',1,2,1),(6,'CleanerA23','2022-02-22','ACTIVE',1,3,1),(7,'CoatingA99','2022-02-22','ACTIVE',1,1,1),(8,'WaferC13','2022-02-22','ACTIVE',1,2,1),(9,'WaferB103','2022-02-22','ACTIVE',1,3,1),(10,'WaferB104','2022-02-22','ACTIVE',1,3,2),(11,'WaferB105','2022-02-22','ACTIVE',1,3,2),(12,'WaferB106','2022-02-22','ACTIVE',2,3,2),(13,'RefinerB13','2022-02-22','ACTIVE',2,2,2),(14,'RefinerB14','2022-02-22','ACTIVE',2,2,2),(15,'RefinerB15','2022-02-22','ACTIVE',2,1,2),(16,'RefinerB16','2022-02-22','ACTIVE',2,1,2),(17,'CleanerA24','2022-02-22','ACTIVE',2,1,2),(18,'CleanerA25','2022-02-22','ACTIVE',2,1,2),(19,'CleanerA55','2022-02-22','ACTIVE',2,2,3),(20,'CleanerA66','2022-02-22','ACTIVE',2,2,3),(21,'RefinerB12','2022-02-22','ACTIVE',3,2,3),(22,'RefinerB12','2022-02-22','ACTIVE',3,2,3),(23,'RefinerB12','2022-02-22','ACTIVE',3,2,3),(24,'RefinerB12','2022-02-22','ACTIVE',3,2,3),(25,'CoatingA101','2022-02-22','ACTIVE',4,2,3),(26,'CoatingA301','2022-02-22','ACTIVE',4,2,3),(27,'CoatingA302','2022-02-22','ACTIVE',4,2,3),(28,'CoatingA201','2022-02-22','ACTIVE',5,2,1),(29,'CoatingA202','2022-02-22','ACTIVE',5,2,1);
/*!40000 ALTER TABLE `facility_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility_large_group_info`
--

DROP TABLE IF EXISTS `facility_large_group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility_large_group_info` (
  `FACILITY_LARGE_GROUP_ID` int NOT NULL AUTO_INCREMENT,
  `FACILITY_LARGE_GROUP_NAME` varchar(20) NOT NULL,
  PRIMARY KEY (`FACILITY_LARGE_GROUP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility_large_group_info`
--

LOCK TABLES `facility_large_group_info` WRITE;
/*!40000 ALTER TABLE `facility_large_group_info` DISABLE KEYS */;
INSERT INTO `facility_large_group_info` VALUES (1,'가공설비'),(2,'특성화설비'),(3,'검사설비');
/*!40000 ALTER TABLE `facility_large_group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility_mid_group_info`
--

DROP TABLE IF EXISTS `facility_mid_group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility_mid_group_info` (
  `FACILITY_MID_GROUP_ID` int NOT NULL AUTO_INCREMENT,
  `FACILITY_MID_GROUP_NAME` varchar(20) NOT NULL,
  `FACILITY_LARGE_GROUP_ID` int NOT NULL,
  PRIMARY KEY (`FACILITY_MID_GROUP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility_mid_group_info`
--

LOCK TABLES `facility_mid_group_info` WRITE;
/*!40000 ALTER TABLE `facility_mid_group_info` DISABLE KEYS */;
INSERT INTO `facility_mid_group_info` VALUES (1,'화학적 가공 장비',1),(2,'절삭 장비',2),(3,'표면처리 장비',1),(4,'시각 검사 장비',3),(5,'특수 가공 장비',1),(6,'코팅 장비',1),(7,'건조 장비',1);
/*!40000 ALTER TABLE `facility_mid_group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fct_info`
--

DROP TABLE IF EXISTS `fct_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fct_info` (
  `FCT_ID` int NOT NULL AUTO_INCREMENT,
  `FCT_NAME` varchar(20) NOT NULL,
  PRIMARY KEY (`FCT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fct_info`
--

LOCK TABLES `fct_info` WRITE;
/*!40000 ALTER TABLE `fct_info` DISABLE KEYS */;
INSERT INTO `fct_info` VALUES (1,'경기공장'),(2,'모바일 디바이스 배터리 공장'),(3,'청라 기술 연구소'),(4,'대전 생산기지'),(5,'영동공장');
/*!40000 ALTER TABLE `fct_info` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_member`
--

LOCK TABLES `group_member` WRITE;
/*!40000 ALTER TABLE `group_member` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `line_group_info`
--

DROP TABLE IF EXISTS `line_group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `line_group_info` (
  `LINE_GROUP_ID` int NOT NULL AUTO_INCREMENT,
  `LINE_GROUP_NAME` varchar(20) NOT NULL,
  `LINE_RPRS_GROUP_ID` int NOT NULL,
  PRIMARY KEY (`LINE_GROUP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `line_group_info`
--

LOCK TABLES `line_group_info` WRITE;
/*!40000 ALTER TABLE `line_group_info` DISABLE KEYS */;
INSERT INTO `line_group_info` VALUES (1,'웨이퍼 제조 라인',11),(2,'세포 제조 라인',12),(3,'모듈 조립 라인',13),(4,'포장 라인',14),(5,'테스트 라인',15),(6,'배터리 재활용 라인',16);
/*!40000 ALTER TABLE `line_group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `line_info`
--

DROP TABLE IF EXISTS `line_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `line_info` (
  `LINE_ID` int NOT NULL AUTO_INCREMENT,
  `LINE_NAME` varchar(20) NOT NULL,
  `LINE_GROUP_ID` int NOT NULL,
  `SHOP_ID` int NOT NULL,
  `FCT_ID` int NOT NULL,
  `LINE_RPRS_GROUP_ID` int NOT NULL,
  PRIMARY KEY (`LINE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `line_info`
--

LOCK TABLES `line_info` WRITE;
/*!40000 ALTER TABLE `line_info` DISABLE KEYS */;
INSERT INTO `line_info` VALUES (1,'Si 웨이퍼 제조',1,1,1,11),(2,'실리콘 슬라이싱',1,2,1,11),(3,'웨어퍼 평화화',1,3,1,11),(4,'양극재 코팅',2,1,2,12),(5,'음극재 코팅',2,2,2,12),(6,'세포 조립',2,3,2,12),(7,'세포 적층',3,1,3,13),(8,'모듈 캡슐화',3,2,3,13),(9,'전선 연결',3,3,3,13),(10,'포장 검사',4,1,4,14),(11,'포장 밀봉',4,2,4,14),(12,'라벨링',4,3,4,14),(13,'용량 테스트',5,1,5,15),(14,'충전/방전 테스트',5,2,5,15),(15,'안전성 테스트',5,3,5,15),(16,'성분 분리',6,3,5,16),(17,'재활용 가능한 부품 추출',6,4,5,16);
/*!40000 ALTER TABLE `line_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `line_rprs_group_info`
--

DROP TABLE IF EXISTS `line_rprs_group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `line_rprs_group_info` (
  `LINE_RPRS_GROUP_ID` int NOT NULL AUTO_INCREMENT,
  `LINE_RPRS_GROUP_NAME` varchar(20) NOT NULL,
  `SHOP_ID` int DEFAULT NULL,
  PRIMARY KEY (`LINE_RPRS_GROUP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `line_rprs_group_info`
--

LOCK TABLES `line_rprs_group_info` WRITE;
/*!40000 ALTER TABLE `line_rprs_group_info` DISABLE KEYS */;
INSERT INTO `line_rprs_group_info` VALUES (1,'리튬 이온 배터리',1),(2,'니켈 금속수소 배터리',1),(3,'알카라인 건전지',1),(4,'리튬 폴리머 배터리',3),(5,'철 인산 리튬 이온 배터리',3),(6,'수은 셀 배터리',3),(7,'납 산화물 배터리',5),(8,'니켈 산화물 배터리',5),(9,'리튬 플로우 배터리',2),(10,'리튬 이온 포스페이트 배터리',2),(11,'Wafer 제조',1),(12,'배터리 제조',1),(13,'베너리 조립',2),(14,'배터리 포장',2),(15,'배터리 테스트',3),(16,'재활용',5);
/*!40000 ALTER TABLE `line_rprs_group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organization` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) DEFAULT NULL,
  `sequence` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES (1,'1',1,10);
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prod_info`
--

DROP TABLE IF EXISTS `prod_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prod_info` (
  `PROD_ID` int NOT NULL AUTO_INCREMENT,
  `PROD_NAME` varchar(20) NOT NULL,
  PRIMARY KEY (`PROD_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prod_info`
--

LOCK TABLES `prod_info` WRITE;
/*!40000 ALTER TABLE `prod_info` DISABLE KEYS */;
INSERT INTO `prod_info` VALUES (53,'INR18650-25R'),(54,'INR18650-30Q'),(55,'INR21700-40T'),(56,'INR18650-20S'),(57,'INR18650-35E'),(58,'INR21700-30T'),(59,'INR18650-29E'),(60,'INR18650-22P'),(61,'INR21700-50E');
/*!40000 ALTER TABLE `prod_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `query_view`
--

DROP TABLE IF EXISTS `query_view`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `query_view` (
  `QUERY_ID` int NOT NULL,
  `USER_ID` varchar(30) NOT NULL,
  `QUERY` text NOT NULL,
  `DATE_TIME` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `USER_ID2` int NOT NULL,
  PRIMARY KEY (`QUERY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `query_view`
--

LOCK TABLES `query_view` WRITE;
/*!40000 ALTER TABLE `query_view` DISABLE KEYS */;
/*!40000 ALTER TABLE `query_view` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_info`
--

DROP TABLE IF EXISTS `shop_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_info` (
  `SHOP_ID` int NOT NULL AUTO_INCREMENT,
  `SHOP_NAME` varchar(20) NOT NULL,
  `FCT_ID` int NOT NULL,
  PRIMARY KEY (`SHOP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_info`
--

LOCK TABLES `shop_info` WRITE;
/*!40000 ALTER TABLE `shop_info` DISABLE KEYS */;
INSERT INTO `shop_info` VALUES (1,'믹싱/극판',1),(2,'조립',1),(3,'화성',1),(4,'모듈/팩',1);
/*!40000 ALTER TABLE `shop_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `step_group_info`
--

DROP TABLE IF EXISTS `step_group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `step_group_info` (
  `STEP_GROUP_INFO_ID` int NOT NULL AUTO_INCREMENT,
  `STEP_GROUP_INFO_NAME` varchar(20) NOT NULL,
  `STEP_MID_GROUP_INFO_ID` int NOT NULL,
  PRIMARY KEY (`STEP_GROUP_INFO_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step_group_info`
--

LOCK TABLES `step_group_info` WRITE;
/*!40000 ALTER TABLE `step_group_info` DISABLE KEYS */;
INSERT INTO `step_group_info` VALUES (1,'실리콘  원료 선별',1),(2,'웨이퍼 절단',2),(3,'웨이퍼 평평화',3),(4,'웨이퍼 분할',4),(5,'양극재 투입',5),(6,'건조',5),(7,'건조 검사',5),(8,'음극재 투입',6),(9,'건조',6);
/*!40000 ALTER TABLE `step_group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `step_info`
--

DROP TABLE IF EXISTS `step_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `step_info` (
  `STEP_ID` int NOT NULL AUTO_INCREMENT,
  `STEP_NAME` varchar(20) NOT NULL,
  `START_TIME` timestamp NOT NULL,
  `END_TIME` timestamp NOT NULL,
  `STEP_GROUP_INFO_ID` int NOT NULL,
  `LINE_ID` int NOT NULL,
  `FCT_ID` int NOT NULL,
  `SHOP_ID` int NOT NULL,
  `STEP_LARGE_GROUP_INFO_ID` int NOT NULL,
  `STEP_MID_GROUP_INFO_ID` int NOT NULL,
  PRIMARY KEY (`STEP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step_info`
--

LOCK TABLES `step_info` WRITE;
/*!40000 ALTER TABLE `step_info` DISABLE KEYS */;
INSERT INTO `step_info` VALUES (1,'웨이퍼 형성','2023-11-01 08:15:23','2023-11-08 22:18:36',1,1,1,1,1,1),(2,'웨이퍼 세정','2023-11-02 14:32:45','2023-11-08 22:18:36',2,1,1,2,2,2),(3,'실리콘 코팅','2023-11-03 10:05:12','2023-11-12 20:09:37',3,1,1,3,1,3),(4,'웨이퍼 절단','2023-11-04 18:42:30','2023-11-12 20:09:37',4,2,1,1,1,4),(5,'슬라이싱 검사','2023-11-04 18:42:30','2023-11-12 20:09:37',4,2,1,2,1,4),(6,'실리콘 테이핑','2023-11-04 18:42:30','2023-11-12 20:09:37',4,2,1,3,1,4),(7,'코팅','2023-11-05 09:20:54','2023-11-12 20:09:37',5,4,1,1,3,5),(8,'건조','2023-11-05 09:20:54','2023-11-14 12:40:24',6,4,1,2,3,5),(9,'코팅 검사','2023-11-05 09:20:54','2023-11-14 12:40:24',7,4,2,3,3,5),(10,'코팅2','2023-11-06 13:11:27','2023-11-14 12:40:24',8,5,2,1,4,6),(11,'건조2','2023-11-06 13:11:27','2023-11-14 12:40:24',9,5,2,2,4,6),(12,'전해질 제조','2023-11-06 13:11:27','2023-11-16 23:45:29',3,4,2,1,3,5),(13,'모듈 제조','2023-11-07 17:30:09','2023-11-17 14:33:57',3,4,3,1,3,5),(14,'팩 제조','2023-11-07 17:30:09','2023-11-16 23:45:29',2,4,5,2,3,5),(15,'조립 및 셀 제조','2023-11-07 17:30:09','2023-11-17 14:33:57',2,2,5,3,2,3),(16,'포장1','2023-11-07 17:30:09','2023-11-17 14:33:57',2,2,5,4,2,2),(17,'테스트 및 품질관리','2023-11-07 17:30:09','2023-11-16 23:45:29',1,2,5,4,2,2),(18,'팩 테스트 및 품질관리','2023-11-08 22:18:36','2023-11-17 14:33:57',1,3,4,5,1,1),(19,'포장2','2023-11-08 22:18:36','2023-11-16 23:45:29',1,3,5,6,1,1),(20,'포장3','2023-11-08 22:18:36','2023-11-16 23:45:29',1,3,5,6,1,1),(21,'포장4','2023-11-08 22:18:36','2023-11-16 23:45:29',1,3,5,6,1,1);
/*!40000 ALTER TABLE `step_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `step_large_group_info`
--

DROP TABLE IF EXISTS `step_large_group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `step_large_group_info` (
  `STEP_LARGE_GROUP_INFO_ID` int NOT NULL AUTO_INCREMENT,
  `STEP_LARGE_GROUP_INFO_NAME` varchar(20) NOT NULL,
  `SHOP_ID` int DEFAULT NULL,
  PRIMARY KEY (`STEP_LARGE_GROUP_INFO_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step_large_group_info`
--

LOCK TABLES `step_large_group_info` WRITE;
/*!40000 ALTER TABLE `step_large_group_info` DISABLE KEYS */;
INSERT INTO `step_large_group_info` VALUES (1,'실리콘 가공',1),(2,'Si 웨이퍼 제조',1),(3,'양극재 가공',2),(4,'음극재 가공',2);
/*!40000 ALTER TABLE `step_large_group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `step_mid_group_info`
--

DROP TABLE IF EXISTS `step_mid_group_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `step_mid_group_info` (
  `STEP_MID_GROUP_INFO_ID` int NOT NULL AUTO_INCREMENT,
  `STEP_MID_GROUP_INFO_NAME` varchar(20) NOT NULL,
  `STEP_LARGE_GROUP_INFO_ID` int NOT NULL,
  PRIMARY KEY (`STEP_MID_GROUP_INFO_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `step_mid_group_info`
--

LOCK TABLES `step_mid_group_info` WRITE;
/*!40000 ALTER TABLE `step_mid_group_info` DISABLE KEYS */;
INSERT INTO `step_mid_group_info` VALUES (1,'웨이퍼 원재료 처리',1),(2,'웨이퍼 특성화',2),(3,'Si 웨이퍼 마무리',1),(4,'실리콘 슬라이싱',2),(5,'코팅',3),(6,'코팅',4);
/*!40000 ALTER TABLE `step_mid_group_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(80) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7090 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'weakhyun@ssafy.com','강현','$2a$10$8zmWnFyCcFCQdI2hjeLmzubjHctFinfGIFyjyZ6S6HkrAmwqUUQYu','01021812222'),(2,'zzingzzing@ssafy.com','김라현','$2a$10$d6hWAhXM0NQ/JvcP3YRBOenZG3D26jJrkBw/t0uLV/eZKNkeB0tjW','01012344444'),(3,'pengso@ssafy.com','김소연','$2a$10$Oa9XERyUsZPyJpiuy11/SOmcqNZs.RY2dkgPHiA9QYs0MxlTDF5sm','01028391834'),(4,'eungg@ssafy.com','김은지','$2a$10$aAwgUHWsEHHJsTUNCThVo.Ro4TcW/lj/s3gx0EC473Eerz1Pu87Mi',NULL),(5,'dobbykim0320@gmail.com','김재이','$2a$10$SXoSNVJD/7EGxkzNFj9w7OvUfLcPyU2gmaK0mD07lxzveJQ293N5W','01037931012'),(6,'jihee9945@gmail.com','김지희','$2a$10$Oa9XERyUsZPyJpiuy11/SOmcqNZs.RY2dkgPHiA9QYs0MxlTDF5sm','01021987212'),(7,'moon@ssafy.com','문준호','$2a$10$CeRuOQfzo3q.Q0VgyMeOPuX0/JV3hnv2DoMHwOMzk82w0Tw.IoklS',NULL),(8,'qkrrlgus@ssafy.com','박기현','$2a$10$ee4BOpHN5SDYVyt61IepTeQ0Ssc4yP1Sfg5g2cDqPqDl.ZB7CbR3y','01012345678'),(9,'hand@ssafy.com','손수형','$2a$10$QRmT8UaI.NeJnz4.TLZKo.5.ciB5BNLx9RWOomYA7WwgkuHbGI.vS',NULL),(10,'zzangookd@gmail.com','손승연','$2a$10$NHtYdtNLPKfjhGPu1E6Dce7yRYddEAVgKhEY.W59cE.5CXVUIp10a',NULL),(11,'songsoy95@gmail.com','송소연','$2a$10$EjPmjwEP6DmYJFl7evMXnex35017/wJIxhK1WUT8079.a81w9SkjK','01012987202'),(12,'economy@ssafy.com','연제경','$2a$10$FDlk80.rfHWf91hCHdnFyutPJ2n8yS6aFbS4F8oMOvYFOmBssNXQS',NULL),(13,'dhekgml1234@gmail.com','오다희','$2a$10$Oa9XERyUsZPyJpiuy11/SOmcqNZs.RY2dkgPHiA9QYs0MxlTDF5sm','01012345678'),(14,'mingming@ssafy.com','유민국','$2a$10$cKhUVSYSQRZ0gIINrzJTe.zECgN4IgWjEteWKYMAVM5gJHINz2R8O',NULL),(15,'leedeok1996@naver.com','이덕용','$2a$10$Oa9XERyUsZPyJpiuy11/SOmcqNZs.RY2dkgPHiA9QYs0MxlTDF5sm','01048291840'),(16,'ozinghun@gmail.com','이세훈','$2a$10$Oa9XERyUsZPyJpiuy11/SOmcqNZs.RY2dkgPHiA9QYs0MxlTDF5sm','01014273980'),(17,'darksung@ssafy.com','이은성','$2a$10$/pFd56t3cLcm0L6jcAuxKumJwJ18H/GQDMqI3XI/8xsukqVr5hcjW',NULL),(18,'whitesung@ssafy.com','이은성','$2a$10$5/Lw.i7/CpVv0siLNYwLi.GruMbJP3Hzp61ZKVjVZYyPCVRRqTksa',NULL),(19,'jslee@ssafy.com','이정섭','$2a$10$xGfVSiA36uN5QviZF7CkTu378wguCJlo8PDSur2N9dgzRY2eMDIXW',NULL),(20,'chacha@ssafy.com','이채림','$2a$10$XZcDLwhGWqBuG5/FmR2OEu0.kwrSrv9RHoXUojI2kMF3W/H4NquhC',NULL),(21,'jojo@ssafy.com','조환희','$2a$10$H3.pXTxTzF7DoKS4BcJtTe7szBKc1gXjqKO3nODEZ/RVOLhofI1n.',NULL),(22,'chacha@ssafy.com','차지은','$2a$10$KnsJY.aIlLemXgRzcMrw1etg8Iq0rFB5gqk61T.K.SvcyGBNuhOq6',NULL),(23,'pongpong@ssafy.com','최규호','$2a$10$jBJ0/P8nDSUVs04j/zcqnOnM8j1FdBw9G4lnglDaO2dvN3EEe56h2',NULL),(24,'ssafy@gmail.com','한성현','$2a$10$/yBy0jXS/CQnJ73uxwgJUOz5yy.PMvNyXO3zdKd6jzxgaa1xBUVM.',NULL),(25,'honghong@ssafy.com','홍지민','$2a$10$m4yAXv18IsY2Ctw8jYp4Ye3m6bS8oYtLLIYtAZ1iGsyJn3FSNVosi',NULL),(99,'admin@admin.com','관리자','$2a$10$OjqkPPJJk2jThZcwQbugXOaRrwzKysYlkAsy9CA0C4stxAocdWL1e','01012345678'),(100,'test1234@naverr.com','김싸피','$2a$10$GETQbNrxmHXQbysPC2grPeUv0NP.yiKhY9.3KQ8umlJAd9.9hBOyy','01012345678'),(101,'worker@ssafy.com','작업자','$2a$10$PAdBVvKhFI7wiiAHQSeDS.8L5kE4/oHRIqMc1OhDdrc7vUta3gTE.',NULL);
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
  `roles` varchar(255) DEFAULT NULL,
  KEY `FKkv46dn3qakjvsk7ra33nd5sns` (`user_user_id`),
  CONSTRAINT `FKkv46dn3qakjvsk7ra33nd5sns` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (100,'DEVELOPER'),(101,'WORKER'),(99,'ADMIN');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wo_info`
--

DROP TABLE IF EXISTS `wo_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wo_info` (
  `WO_ID` int NOT NULL AUTO_INCREMENT,
  `WO_YMD` date NOT NULL,
  `WO_STS` char(4) NOT NULL,
  `MFG_TYPE` varchar(50) NOT NULL,
  `PROD_ID` int NOT NULL,
  `LINE_ID` int NOT NULL,
  `WORK_ID` int NOT NULL,
  `FCT_ID` int NOT NULL,
  `SHOP_ID` int NOT NULL,
  PRIMARY KEY (`WO_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11549 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wo_info`
--

LOCK TABLES `wo_info` WRITE;
/*!40000 ALTER TABLE `wo_info` DISABLE KEYS */;
INSERT INTO `wo_info` VALUES (11500,'2023-11-22','진행','Battery Pack',55,14,120,3,4),(11501,'2023-11-22','진행','Battery Pack',55,14,120,3,4),(11502,'2023-11-22','진행','Battery Pack',56,14,121,3,4),(11503,'2023-11-22','대기','Battery Cell',56,4,121,3,3),(11504,'2023-11-22','대기','Battery Cell',56,4,211,3,3),(11505,'2023-11-22','완료','Battery Cell',56,2,211,3,1),(11506,'2023-11-22','완료','Battery Pack',55,9,211,3,1),(11507,'2023-11-22','완료','Battery Testing',57,13,171,3,2),(11508,'2023-11-22','완료','Battery Pack',55,8,172,3,3),(11509,'2023-11-22','완료','Battery Pack',55,13,177,3,2),(11510,'2023-11-22','완료','Battery Pack',55,13,158,3,3),(11511,'2023-11-22','진행','Battery Pack',55,9,159,3,3),(11512,'2023-11-22','진행','Battery Pack',55,9,160,3,3),(11513,'2023-11-22','중단','Battery Testing',57,9,160,3,1),(11514,'2023-11-22','중단','Battery Pack',55,3,132,3,2),(11515,'2023-11-22','진행','Battery Pack',55,3,134,3,1),(11516,'2023-11-22','진행','Battery Pack',55,3,167,3,1),(11517,'2023-11-22','진행','Battery Cell',56,12,167,3,2),(11518,'2023-11-22','에러','Battery Cell',56,11,165,3,3),(11519,'2023-11-22','대기','Battery Cell',56,17,154,3,4),(11520,'2023-11-22','진행','Battery Cell',56,1,154,3,4),(11521,'2023-11-22','대기','Battery Cell',56,2,122,3,5),(11522,'2023-11-22','진행','Battery Cell',56,6,122,3,7),(11523,'2023-11-22','완료','Battery Cell',56,6,133,3,7),(11524,'2023-11-22','완료','Battery Cell',56,6,133,3,7),(11525,'2023-11-22','완료','Battery Cell',56,6,99,3,7),(11526,'2023-11-22','대기','Battery Testing',57,3,99,3,7),(11527,'2023-11-22','대기','Battery Testing',57,3,154,3,7),(11528,'2023-11-22','대기','Battery Testing',57,3,154,3,7),(11529,'2023-11-22','대기','Battery Testing',57,3,136,3,6),(11530,'2023-11-22','대기','Battery Testing',57,2,136,3,8),(11531,'2023-11-22','대기','Battery Testing',57,1,137,3,8),(11532,'2023-11-22','대기','Battery Testing',57,1,137,3,8),(11533,'2023-11-22','대기','Battery Testing',57,2,156,3,8),(11534,'2023-11-22','대기','Battery Testing',57,3,157,3,8),(11535,'2023-11-22','대기','Battery Pack',55,4,214,3,8),(11536,'2023-11-23','대기','Battery Pack',55,1,215,3,5),(11537,'2023-11-23','대기','Battery Pack',55,5,216,3,5),(11538,'2023-11-23','대기','Battery Pack',55,6,217,3,5),(11539,'2023-11-23','대기','Battery Pack',55,7,218,3,5),(11540,'2023-11-23','대기','Battery Pack',55,5,218,3,5),(11541,'2023-11-23','대기','Battery Pack',55,1,100,3,5),(11542,'2023-11-23','대기','Battery Pack',55,2,100,3,5),(11543,'2023-11-23','대기','Battery Pack',55,3,152,3,3),(11544,'2023-11-23','대기','Battery Pack',55,4,153,3,3),(11545,'2023-11-23','대기','Battery Pack',55,1,159,3,3),(11546,'2023-11-23','대기','Battery Pack',55,2,159,3,3),(11547,'2023-11-23','대기','Battery Pack',55,3,160,3,3),(11548,'2023-11-23','대기','Battery Cell',56,5,161,3,2);
/*!40000 ALTER TABLE `wo_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-29 17:48:38
