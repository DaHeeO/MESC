# ![image](https://github.com/YeonySon/MESC/assets/116241870/e7bf4ed9-f511-424d-9de1-0e0f6807128e) MESC (삼성SDI 연계 프로젝트)

**🏆삼성 청년 SW아카데미(SSAFY) 9th 기업연계 프로젝트 우수상(2위)🏆**

![image](https://github.com/YeonySon/MESC/assets/116241870/c8194f79-d24f-4ce8-9b61-081301a30d7c)
<br>

## ✅ 프로젝트 진행 기간

### 23.10.10 ~ 23.11.17 (6주)

## 📖 프로젝트 개요
**⭐MES : 공장 생산 운영을 위해 제조 공정을 시각화하여 관리하는 시스템⭐**

현재 MES 시스템은 사내 PC를 통해서만 사용 가능하다는 접근성 제한이 있기 때문에 PC 사용이 불가한 공간에서 긴급하게 데이터 확인/변경이 가능한 챗봇 어플리케이션 개발

## 🔖 프로젝트 목표
1. **챗봇을 통한 시스템 데이터 조회 기능**
2. **챗봇을 통한 시스템 데이터 조작 기능 (로그, DB 등)**
3. **사용자에 따른 권한 구분 기능**
4. **이슈 발생시 담당자에게 메일 발송 기능**

## **💻 기술스택**
<table>
<tr>
<td><b>Back-end</b></td>
<td>
<img src="https://img.shields.io/badge/Java-17.0.8-007396?style=flat&logo=Java&logoColor=white"/>
<img src="https://img.shields.io/badge/Spring Boot-3.0.6-6DB33F?style=flat-square&logo=Spring Boot&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-8.0-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/JPA-6DB23E?style=flat-square&logo=Hibernate&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/Spring Security-3.0.4-6DB33F?style=flat-square&logo=Spring Security&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON Web Tokens&logoColor=white"/>
</td>
</tr>

<tr>
<td><b>Front-end</b></td>
<td>
<img src="https://img.shields.io/badge/TypeScript-F7DF1E?style=flat-square&logo=typescript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Reactnative-0.72.6-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-3958FF?style=flat-square&logo=Recoil&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/Npm-10.2.0-CB3837?style=flat-square&logo=Npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Node-18.18.2-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=c
ss3&logoColor=white"/>
</td>
</tr>

<tr>
<td><b>Infra</b></td>
<td>
<img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-4479A1?style=flat-square&logo=Docker&logoColor=white"/>
<img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=Jenkins&logoColor=white"/>
<img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=NGINX&logoColor=white"/>
</td>
</tr>

<tr>
<td><b>Tools</b></td>
<td>
<img src="https://img.shields.io/badge/Notion-333333?style=flat-square&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/GitLab-FCA121?style=flat-square&logo=GitLab&logoColor=white"/>
<img src="https://img.shields.io/badge/JIRA-0052CC?style=flat-square&logo=JIRA Software&logoColor=white"/>
</td>
</tr>
</table>
<br>

## 📱 주요 기능 - 앱

### 1. 공정 리스트 조회
1-1. 선택한 공정 테이블 조회
<br>
1-2. 선택한 공정 테이블 쿼리문 조회
<br>
1-3. 선택한 공정 테이블과 연관된 단일 테이블 조회
<br>
| 공정 선택 및 조회 | 조건 선택 조회 |
|:------:|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/73ff3cfe-ac04-4a55-b306-99963ec00f76" width="200" height="400"> | <img src="https://github.com/YeonySon/MESC/assets/116241870/1f4bbfca-2fcb-4396-93dc-740086667657" width="200" height="400"> |

### 2. 데이터 조작(쿼리문 입력)
2-1. 데이터 조작(update문)
<br>
2-2. 자동완성
<br>
2-3. 커밋(지문인식)
<br>
2-4. 롤백
<br>
| 데이터 조작(쿼리문 입력) | 커밋(지문인식) | 롤백 |
|:------:|:------:|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/a20760d7-e7b8-48d5-a595-e1fae3cf78b5" width="200" height="400"> | <img src="https://github.com/YeonySon/MESC/assets/116241870/8e11158f-1db0-4122-b669-149d068fae2c" width="200" height="400"> | <img src="https://github.com/YeonySon/MESC/assets/116241870/d3596f89-d5ed-4d04-9a91-ca185611697e" width="200" height="400"> |

### 3. 최근 공정 조회
| 최근 공정 조회 |
|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/4fdcf6f6-07d0-4a78-b22d-0bedc9fc23e1" width="200" height="400"> |

### 4. 로그 조회
4-1. 포함할 검색어 입력
<br>
4-2. 조회할 날짜 선택
<br>
4-3. 로그 레벨 선택
<br>
| 로그 조회 |
|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/41bf0299-7315-4b92-9e91-f13302be6b04" width="200" height="400"> |

### 5. 보고하기
| 보고 하기 |
|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/33eaaf3a-7eef-4a0f-bdd4-1eba17a5a7e0" width="200" height="400"> |


## 🖥️ 주요 기능 - 관리자 웹

### 1. 블록 조회
| 블록 조회 |
|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/0e9bd3d8-fae8-4a16-8a16-3fca552c8a9e" width="800" height="400"> |

### 2. 블록 추가/수정/삭제
2-1. 블록 추가/수정/삭제
<br>
2-2. 버튼 링크 수정
<br>
| 카드 추가 |
|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/01ee1bc1-c9bb-46da-b7c1-1ca894234953" width="800" height="400"> |

| 카드 수정 |
|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/250d9fed-a24e-4d1a-a14f-d48f8d0d25f2" width="800" height="400"> |

### 3. 액션맵 조회/추가
| 액션맵 조회/추가 |
|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/d255ca4e-6be1-4666-8038-27703dc920a8" width="800" height="400"> |

### 4. FAQ
| FAQ |
|:------:|
| <img src="https://github.com/YeonySon/MESC/assets/116241870/5e37ee90-d7c1-41d7-a937-2594e4ccde87" width="800" height="400"> |
<br>


## 💫 아키텍처
![아키텍처](https://github.com/YeonySon/MESC/assets/116241870/e76ba915-f794-452c-be39-2579751d8ca4)

## 🎨 ERD
![ChatbotErd](https://github.com/YeonySon/MESC/assets/116241870/dbb3303d-4982-4d93-b4c8-93b758b8eee9)

## 📂 API 문서

[https://www.notion.so/937ae79e34c447e79552c3d9fb2c6e82?v=55f77af58d674a45a6e9ba9a9613718e](https://www.notion.so/937ae79e34c447e79552c3d9fb2c6e82?pvs=21)

## 📒 빌드 환경
<details>
  <summary><b>포팅 메뉴얼</b></summary>
  <div markdown="1">
                
- Frontend
    - IDE : VScode
    - React : 18.18.2
        
        <pre markdown="1">
        "dependencies": {
        "@emotion/react": "^11.11.1",
        "@emotion/styled": "^11.11.0",
        "@gorhom/bottom-sheet": "^4.5.1",
        "@mui/icons-material": "^5.14.16",
        "@mui/material": "^5.14.17",
        "@react-native-async-storage/async-storage": "^1.19.4",
        "@react-native-community/checkbox": "^0.5.16",
        "@react-native-community/datetimepicker": "^7.6.1",
        "@react-native-firebase/app": "^18.6.1",
        "@react-native-firebase/messaging": "^18.6.1",
        "@react-navigation/bottom-tabs": "^6.5.11",
        "@react-navigation/native": "^6.1.9",
        "@react-navigation/stack": "^6.3.19",
        "axios": "^1.6.0",
        "date-fns": "^2.30.0",
        "lodash": "^4.17.21",
        "react": "18.2.0",
        "react-native": "0.72.6",
        "react-native-autocomplete-dropdown": "^3.1.0",
        "react-native-biometrics": "^3.0.1",
        "react-native-checkbox": "^2.0.0",
        "react-native-date-picker": "^4.3.3",
        "react-native-dropdown-picker": "^5.4.6",
        "react-native-gesture-handler": "^2.13.3",
        "react-native-keychain": "^8.1.2",
        "react-native-modal-datetime-picker": "^17.1.0",
        "react-native-reanimated": "^3.5.4",
        "react-native-reanimated-carousel": "^3.5.1",
        "react-native-safe-area-context": "^4.7.3",
        "react-native-screens": "^3.26.0",
        "react-native-svg": "^13.14.0",
        "react-native-toast-message": "^2.1.7",
        "react-native-touch-id": "^4.4.1",
        "recoil": "^0.7.7",
        "styled-components": "^5.3.10"
        },
        <br>
        "devDependencies": {
        "@babel/core": "^7.20.0",
        "@babel/preset-env": "^7.20.0",
        "@babel/runtime": "^7.20.0",
        "@react-native/eslint-config": "^0.72.2",
        "@react-native/metro-config": "^0.72.11",
        "@tsconfig/react-native": "^3.0.0",
        "@types/lodash": "^4.14.200",
        "@types/react": "^18.0.24",
        "@types/react-test-renderer": "^18.0.0",
        "@types/styled-components": "^5.1.29",
        "@types/styled-components-react-native": "^5.2.4",
        "@typescript-eslint/parser": "^5.62.0",
        "babel-jest": "^29.2.1",
        "eslint": "^8.19.0",
        "eslint-config-prettier": "^9.0.0",
        "eslint-plugin-prettier": "^5.0.1",
        "jest": "^29.2.1",
        "metro-react-native-babel-preset": "0.76.8",
        "prettier": "^3.0.3",
        "react-native-svg-transformer": "^1.1.0",
        "react-test-renderer": "18.2.0",
        "typescript": "4.8.4"
        },
        "engines": {
        "node": ">=16"
        }
    </pre>
        
- Backend
    - IDE : Intellij 2022.02.01 (Ultimate), MobaXterm
    - SpringBoot : 3.0.12
    - Java 17
    - MySQL 8.0
    - Redis 7.2.3
    - Docker
    - Jenkins

  </div>
</details>
    

## **😃 팀원 소개**
|![손승연](https://github.com/YeonySon/MESC/assets/116241870/b2d7849a-eb59-466a-91d1-8840b87530cd)|![김재이](https://github.com/YeonySon/MESC/assets/116241870/712799b4-146c-45b3-80b1-5116ae7546d6)|![오다희](https://github.com/YeonySon/MESC/assets/116241870/207fdcef-667d-424c-972e-f0304c5c0e32) |![송소연](https://github.com/YeonySon/MESC/assets/116241870/83891dc4-5860-4163-8419-e2fa05dea03a)| ![김지희](https://github.com/YeonySon/MESC/assets/116241870/bde46854-ef43-4ba2-a7d5-864adf56ca9d) |![이덕용](https://github.com/YeonySon/MESC/assets/116241870/a0ccdda9-a227-4589-95c3-7c5af7b1e9b2)|
|:------:|:------:|:------:|:------:|:------:|:------:|
| **손승연** | **김재이** | **오다희** | **송소연** | **김지희** | **이덕용** |
| Front-End | Front-End | Front-End | Front-End & Back-End | Back-End | AWS & Back-End |
| zzangookd@gmail.com | dobbykim0320@gmail.com | dhekgml1234@gmail.com | songsoy95@gmail.com | jihee9945@gmail.com | leedeok1996@gmail.com |
