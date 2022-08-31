# 📕 Reactive

* 리액트 Sequelize CRUD 예제 입니다.
* React C.R.U.D(Create, Read, Update, Delete) Template(Feat. Sequelize)

## 🏷️ 기능(Function)

1. [Sequelize-CREATE](#Sequelize-CREATE)
2. [Sequelize-READ](#Sequelize-READ)
3. [Sequelize-UPDATE](#Sequelize-UPDATE)
4. [Sequelize-DELETE](#Sequelize-DELETE)

### Sequelize-CREATE

### Sequelize-READ

### Sequelize-UPDATE

### Sequelize-DELETE

## 💡 Sequelize-CLI 사용법

1. 시퀼라이즈에 알맞게 프로젝트 디렉토리를 구성합니다.
   1. `npx sequelize init`

2. 데이터베이스(Database) 생성합니다.
   1. `npx sequelize db:create --env development`

3. 테이블(Table) 생성합니다.
   1. `npx sequelize model:generate --name 테이블명 --attributes 속성1:타입,속성2:타입,속성3:타입`
   2. `npx sequelize model:generate --name Board --attributes index:integer,title:string contents:string,date:string`
   3. `Output`:`../model/테이블명.js`

4. 마이그레이션 적용합니다.
   1. `npx sequelize db:migrate`
   2. `Output`:`../migrations/'yyyyMMddHHmmSS-create-테이블명.js'`

5. 기초(Seed) 데이터 생성합니다.
   1. `npx sequelize seed:generate --name 초기 데이터 이름`
   2. `npx sequelize seed:generate --name initialData`
   3. `Output`:`../seeders/'yyyyMMddHHmmSS-초기 데이터 이름.js'`

6. 기초 데이터 파일 적용, 삽입합니다.
   1. `npx sequelize db:seed:all  --debug`

* index.js
   -`Sequelize`를 사용하기 위한 설정입니다.

## 💻 개발 환경(Develop Environment)

### 시스템 환경(System Environment)

||운영체제(OS)|언어(Language)|프레임워크(Framework)|종속성(Dependency)|
|-|:-:|:-:|:-:|:-:|
|명칭(Name)|![Windows](https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=Windows&logoColor=white)|![TYPESCRIPT](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=flat-square&logo=TypeScript&logoColor=white)|![REACT](https://img.shields.io/badge/REACT-61DAFB?style=flat-square&logo=React&logoColor=black)|![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white)|
|버전(Version)|`10, 11`|`4.6.4`|`18.1.0`|`8.13.2`|

### 브라우저 지원(Browser Support)

|Chrome|Microsoft Edge|Firefox|
|:-:|:-:|:-:|
|![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=flat-square&logo=GoogleChrome&logoColor=white)|![MicrosoftEdge](https://img.shields.io/badge/Edge-0078D7?style=flat-square&logo=MicrosoftEdge&logoColor=white)|![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=flat-square&logo=FirefoxBrowser&logoColor=white)
|`Latest` ✔|`Latest` ✔|`Latest` ✔|

## 🔍 정보(Information)

### 🖋️ 저자(Author)

* [Yeonghyeon Kim](https://github.com/yeong-hyeon-kim) – codechemi@gmail.com

### ⚖️ 라이센스(License)

다음 라이센스를 준수하며 [License](./License)에서 자세한 정보를 확인할 수 있습니다.

## 📖 비고(Remark)

### 프로젝트 실행

> `npm run start`

### API 서버 실행

> `npm start server`

### 패키지 복원(Packages Recovery)

* `npm install`
* [packages.json](./package.json)
