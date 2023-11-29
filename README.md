# ![mesc](/uploads/66de32e2bfcc55f6b81c31f38b8cb9a1/mesc.PNG){: width="24" height="24"} MESC (삼성SDI 연계 프로젝트)

**🏆삼성 청년 SW아카데미(SSAFY) 9th 기업연계 프로젝트 우수상(2위)🏆**

![MESC2](/uploads/c928d87579837d7669f0028de540b84d/MESC2.PNG){: width="750" height="400"}
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
<img src="https://img.shields.io/badge/Spring Security-3.0.4-6DB33F?style=flat-square&logo=Spring Security&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/MariaDB-8.0-4479A1?style=flat-square&logo=MariaDB&logoColor=white"/>
<img src="https://img.shields.io/badge/JPA-59666C?style=flat-square&logo=Hibernate&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/Gradle-C71A36?style=flat-square&logo=Gradle&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=JSON Web Tokens&logoColor=white"/>
<img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white"/>
<img src="https://img.shields.io/badge/Smartthings-15BFFF?style=flat-square&logo=smartthings&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Pytorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white"/>
</td>
</tr>

<tr>
<td><b>Front-end</b></td>
<td>
<img src="https://img.shields.io/badge/Npm-10.2.0-CB3837?style=flat-square&logo=Npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Node-18.18.2-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-18.2.0-61DAFB?style=flat-square&logo=Recoil&logoColor=white"/>
<img src="https://img.shields.io/badge/Reactnative-0.72.6-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-F7DF1E?style=flat-square&logo=typescript&logoColor=black"/>
<img src="https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
</td>
</tr>

<tr>
<td><b>Infra</b></td>
<td>
<img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon aws&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-4479A1?style=flat-square&logo=Docker&logoColor=white"/>
<img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=Kubernetes&logoColor=white"/>
<img src="https://img.shields.io/badge/NGINX-1.18.0(Ubuntu)-009639?style=flat-square&logo=NGINX&logoColor=white"/>
<img src="https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=Grafana&logoColor=white"/>
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
| ![select__1_](/uploads/059ad33cbcf7fb7ec518353db3a8eb47/select__1_.gif){: width="200" height="400"} | ![조건변경1](/uploads/be7e59f5c09c20f588f6ff1a32bfa92e/조건변경1.gif){: width="200" height="400"} |

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
| ![update__1_](/uploads/3cab161b4cfec2206608e90a6f3717b9/update__1_.gif){: width="200" height="400"} | ![지문인식commit](/uploads/b9bedf196833d8d3d53e8cd5ed852aee/지문인식commit.gif){: width="200" height="400"} | ![검색조건변경1](/uploads/ec389505f51b5a641a0ae84d391dca72/검색조건변경1.gif){: width="200" height="400"} |

### 3. 최근 공정 조회
| 최근 공정 조회 |
|:------:|
| ![최근공정조회1](/uploads/e1fd7370ab87d488bb07055fb94d25dd/최근공정조회1.gif){: width="200" height="400"} |

### 4. 로그 조회
4-1. 포함할 검색어 입력
<br>
4-2. 조회할 날짜 선택
<br>
4-3. 로그 레벨 선택
<br>
| 로그 조회 |
|:------:|
| ![로그보기](/uploads/bdbff1cef0b66929e052655dc60f7730/로그보기.gif){: width="200" height="400"} |

### 5. 보고하기
| 보고 하기 |
|:------:|
| ![보고하기1](/uploads/a471defbbef27ade723c2fcd4075b26b/보고하기1.gif){: width="200" height="400"} |

### 6. FAQ
| FAQ |
|:------:|
| ![faq](/uploads/8e9f371a89324ced6dce80380129608f/faq.png){: width="800" height="400"} |
<br>

## 🖥️ 주요 기능 - 관리자 웹

### 1. 블록 조회
| 블록 조회 |
|:------:|
| ![블록조회](/uploads/87af9a49bb7fd67826aad3f4dd59458a/블록조회.gif){: width="800" height="400"} |

### 2. 블록 추가/수정/삭제
2-1. 블록 추가/수정/삭제
<br>
2-2. 버튼 링크 수정
<br>
| 블록 추가/수정/삭제 |
|:------:|
| ![카드추가](/uploads/4382abb233294272afe58fb409608c1f/카드추가.gif){: width="800" height="400"} |

### 3. 액션맵 조회/추가
| 액션맵 조회/추가 |
|:------:|
| ![쿼리보기](/uploads/e3f69d1c31913040606e94f0362c7b3e/쿼리보기.gif){: width="800" height="400"} |


## 💫 아키텍처
<img src="https://github.com/Gitgloo/tempimage/assets/130892737/446744a5-d022-4446-a64e-3d9123b77d7f" width="750" height="350"/>

## 🎨 ERD

<img src="https://github.com/Gitgloo/tempimage/assets/130892737/4ac7e79d-e1e7-47b5-a2f1-517808a907c0" width="750" height="400"/>

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
| 손승연 | 김재이 | 오다희 | 송소연 | 김지희 | 이덕용 |
| --- | --- | --- | --- | --- | --- |
|![손승연](/uploads/be587f4b42311a585bd601c807c12807/손승연.png)|![김재이](/uploads/facc88b3ce93bec37d88e0e1efe76871/김재이.png)|![오다희](/uploads/a4daf4ee77a1c82907daab44d42a0c7e/오다희.png)  |![송소연](/uploads/95ca4633529f311a5232a0d991d88b61/송소연.png)| ![사진_50](/uploads/b88af508fd2d02c5d2fd5587537931cc/사진_50.jpg){: width="110" height="128"} |![이덕용](/uploads/9bbd2174d4f6491006fd427d6d5cb356/이덕용.png)|
| Front-End | Front-End | Front-End | Front-End & Back-End | Back-End | AWS & Back-End |
