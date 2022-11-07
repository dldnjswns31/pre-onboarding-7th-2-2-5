# 원티드 프리온보딩 프론트엔드 - Week 2-2

원티드 프리온보딩 **프론트엔드 5팀**입니다.<br>
해당 레포지토리는 원티드 프리온보딩 4차 과제로 광고 현황 대시보드 및 광고 관리 서비스 구현한 웹 사이트입니다.<br>
해당 프로젝트에서는 기업에서 제공한 mock data를 사용하였습니다.

## 📅 프로젝트 기간

기간 : 2022년 11월 5일 ~ 2022년 11월 7일

## 👥 팀원 소개

| 이름 | github |
| --- | --- |
| 류승연 (팀장) | https://github.com/seungyeon-rr |
| 차혜인 (부팀장) | https://github.com/hyeincha |
| 박지현 | https://github.com/hyoniiii |
| 배창현 | https://github.com/baechanghyeon |
| 이원준 | https://github.com/dldnjswns31 |
| 임연주 | https://github.com/yeondooo |
| 지재영 | https://github.com/jaeyeong815 |

## 🛠 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <br>

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=Chart.js&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <br>
</div>

## 🏁 프로젝트 실행 방법

1. 의존성 패키지를 설치합니다.

```
$ npm install
```

2. 프로젝트를 실행합니다.

```
$ npm start
```

- 현재 repository를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

## 🔰 사용한 패키지와 버전

```
"axios": "^1.1.3",
"chart.js": "^3.9.1",
"date-fns": "^2.29.3",
"react": "^18.2.0",
"react-chartjs-2": "^4.3.1",
"react-datepicker": "^4.8.0",
"react-dom": "^18.2.0",
"react-icons": "^4.6.0",
"react-router-dom": "^6.4.3",
"styled-components": "^5.3.6",
"eslint-config-prettier": "^8.5.0",
"eslint-plugin-prettier": "^4.2.1",
"husky": "^8.0.1",
"prettier": "^2.7.1"
```

<details>
<summary>사용한 패키지 간략한 설명</summary>
<div markdown="1">

- styled-components : 스타일 적용<br>
- react-router-dom : 라우터 적용<br>
- eslint : 팀원간 코드 컨벤션 통일<br>
- prettier : 팀원간 코드 포맷 통일<br>
- husky : Git Hooks 적용<br>
- chart.js : 차트 및 그래프 라이브러리<br>
- react-chartjs-2 : React를 위한 chart.js 컴포넌트 라이브러리<br>
- react-datepicker : 날짜 선택 위젯 적용<br>
- date-fns : 날짜 포맷팅 라이브러리<br>
- react-icons : 아이콘 적용<br>
</div>
</details>

## 🔗 배포 링크

//링크추가

- 해당 프로젝트는 AWS S3를 통해 배포하였습니다.
- 상단 링크에 접속하시면 바로 대시보드 및 광고 관련 데이터를 확인할 수 있습니다.

## 📦 파일 구조

<details>
<summary>파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜apis.js
 ┣ 📂assets
 ┃ ┣ 📂database
 ┃ ┃ ┣ 📜adListDataSet.json               // 광고 목록 db
 ┃ ┃ ┗ 📜trendDataSet.json                // chart에서 사용되는 db
 ┣ 📂components
 ┃ ┣ 📂UI
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜Card.jsx
 ┃ ┃ ┣ 📜Desc.jsx
 ┃ ┃ ┗ 📜Dropdown.jsx
 ┃ ┣ 📂admin                              // 광고 관리 페이지 컴포넌트
 ┃ ┃ ┣ 📜AdItem.jsx
 ┃ ┃ ┣ 📜AdItemList.jsx
 ┃ ┃ ┗ 📜AdminLayout.jsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂sidebar
 ┃ ┃ ┃ ┣ 📜AdvertisementCenterTab.jsx
 ┃ ┃ ┃ ┣ 📜Guide.jsx
 ┃ ┃ ┃ ┣ 📜ServiceTab.jsx
 ┃ ┃ ┃ ┗ 📜Sidebar.jsx
 ┃ ┃ ┣ 📂title
 ┃ ┃ ┃ ┣ 📜RangeDatePicker.jsx
 ┃ ┃ ┃ ┗ 📜Title.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Loading.jsx
 ┃ ┗ 📂dashboard                          // 대시보드 페이지 컴포넌트
 ┃ ┃ ┣ 📜Bear.jsx
 ┃ ┃ ┣ 📜Bull.jsx
 ┃ ┃ ┣ 📜Chart.jsx
 ┃ ┃ ┣ 📜ChartFilter.jsx
 ┃ ┃ ┣ 📜ChartFilterOption.jsx
 ┃ ┃ ┣ 📜Dashboard.jsx
 ┃ ┃ ┣ 📜Summary.jsx
 ┃ ┃ ┗ 📜SummaryItem.jsx
 ┣ 📂context
 ┃ ┣ 📜adDataContext.js                   // 광고 관리 - ad 리스트 관리하는 컨텍스트
 ┃ ┣ 📜chartOptionContext.js              // 대시보드 - chart 옵션 관리하는 컨텍스트
 ┃ ┗ 📜dateContext.js                     // 대시보드 - 선택한 날짜 관리하는 컨텍스트 
 ┣ 📂data
 ┃ ┗ 📜filterCategory.js                  // 대시보드 - chart에 사용되는 필터 카테고리
 ┣ 📂db
 ┃ ┣ 📜ad_list.json
 ┃ ┣ 📜media_channel_data.json
 ┃ ┗ 📜trend_data.json
 ┣ 📂hooks
 ┃ ┣ 📜useGetChartValues.jsx
 ┃ ┗ 📜useToggle.js
 ┣ 📂pages
 ┃ ┣ 📜AdAdminPage.jsx
 ┃ ┗ 📜DashboardPage.jsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.js
 ┣ 📂utils
 ┃ ┣ 📜constants.js                        // 상수 데이터
 ┃ ┣ 📜functions.js                        // 데이터 치환 함수
 ┃ ┣ 📜getChartDataOption.js               // 차트 filter에 따라 달라지는 chart dataSet과 option을 구하는 함수
 ┃ ┣ 📜getDayDiff.js                       // 두 날짜의 차이를 구하는 함수
 ┃ ┣ 📜getPrevDayRange.js                  // 데이터를 비교할 날짜 범위를 구하는 함수
 ┃ ┣ 📜numberToKorean.js                   // 금액 단위 변환 함수
 ┃ ┗ 📜trendDataConverter.js               // trendDataSet 가공 함수
 ┣ 📜App.js
 ┣ 📜Router.jsx
 ┗ 📜index.js
```

</div>
</details>

## ✨ 주요 기능

| 페이지 | API 연결 및 기능 |
| --- | --- |
| 대시보드 | ✅ 통합 광고 현황을 차트로 가시적으로 확인할 수 있습니다.<br> ✅ 지정한 기간과 선택한 옵션(ROAS, 광고비, 노출수, 클릭수, 전환 수, 매출)에 따라 실시간으로 바뀌는 그래프를 볼 수 있습니다.<br> |
| 광고 관리 | ✅ 광고의 진행중/중단됨 상태 표시<br>✅ ‘상태, 광고 생성일, 일 희망 예산, 광고 수익률, 매출, 광고 비용' 표시<br>✅  받아온 데이터를 수정해서 표기할 수 있습니다. |
| 공통 nav | ✅ 두 페이지는 공통 헤더와 nav를 공유합니다.<br>✅ 다른 페이지에 이동했다 하더라도, 다시 기존 페이지로 복귀할 시 마지막 상태가 유지됩니다.<br> |

## ❗️ 필수 요구사항

1. 사이드바
    - 서비스 추가 버튼까지만, 실제 추가 기능은 구현 X
2. 대시보드
    - 통합광고현황까지만 구현
    - 매체현황은 구현 X
3. 광고관리
    - 광고 표시 및 수정하기까지만 구현
        - 백엔드가 없으므로 수정한 데이터는 새로고침 시 초기화되어도 무방함
    - 광고만들기는 구현 X
    - 서비스 추가 버튼까지만, 실제 추가 기능은 구현 X
- 어떤 상태로 다른 페이지에 이동했다 하더라도, 다시 기존 페이지로 복귀 할 시 마지막 상태가 유지되어야 함 (필터링 상태 등)
- 임의적으로 Fetch 타임을 만들어 로딩 시간 지연

## ✂︎ 개선 방법

### Context API

상태관리 라이브러리를 따로 사용하지 않고 react 앱에 내장되어 있는 Context API를 사용하여

props를 넘겨주지 않아도 각 component에서 전역적으로 관리되는 데이터를 필요한 곳에서만 사용하였습니다.

이로 인해 페이지를 이동하거나 뒤로가기를 해도 페이지의 상태를 유지할 수 있습니다.

**1) 뒤로가기 시 상태 유지**

- Chart Option Context 생성

[https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-2-5/blob/6c293a9e847a91c0f576c4361cae7244b732ddb5/src/components/dashboard/ChartFilterOption.jsx#L8-L11](https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-2-5/blob/6c293a9e847a91c0f576c4361cae7244b732ddb5/src/components/dashboard/ChartFilterOption.jsx#L8-L11)

**2) 광고 관리 데이터**

- Ad Data Context 생성

[https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-2-5/blob/6c293a9e847a91c0f576c4361cae7244b732ddb5/src/components/dashboard/ChartFilterOption.jsx#L8-L11](https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-2-5/blob/6c293a9e847a91c0f576c4361cae7244b732ddb5/src/components/dashboard/ChartFilterOption.jsx#L8-L11)

### Chart 옵션 중복 선택 불가

- Chart 옵션을 상수 데이터로 저장
- 첫 번째 Chart 옵션을 택하면 두 번째 Chart 옵션에선 해당 옵션이 사라지게 설정
- 또한 두 번째 Chart 옵션을 택하면 첫 번째 Chart 옵션에서 해당 옵션이 사라지게끔 하여 데이터 중복을 방지

[https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-2-5/blob/8f892035deb4c1b8b630037387cdff50f5290ec7/src/data/filterCategory.js#L10-L17](https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-2-5/blob/8f892035deb4c1b8b630037387cdff50f5290ec7/src/data/filterCategory.js#L10-L17)

[https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-2-5/blob/8f892035deb4c1b8b630037387cdff50f5290ec7/src/components/dashboard/ChartFilterOption.jsx#L19-L37](https://github.com/WantedPreonboardingFE5team/pre-onboarding-7th-2-2-5/blob/8f892035deb4c1b8b630037387cdff50f5290ec7/src/components/dashboard/ChartFilterOption.jsx#L19-L37)
