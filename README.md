## 📕 프로젝트 개요(Introduce Project)
### Reactive
* 리액트 Sequelize CRUD 예제 입니다.
* React C.R.U.D(Create, Read, Update, Delete) Template(Feat. Sequelize)

## 🏷️ 기능(Function)

1. [Sequelize-CREATE](#Sequelize-CREATE)
2. [Sequelize-READ](#Sequelize-READ)
3. [Sequelize-UPDATE](#Sequelize-UPDATE)
4. [Sequelize-DELETE](#Sequelize-DELETE)

#### Sequelize-CREATE
#### Sequelize-READ
#### Sequelize-UPDATE
#### Sequelize-DELETE

## 💡 Sequelize-CLI 사용법

1. 시퀼라이즈에 알맞게 프로젝트 디렉토리를 구성
   1. `npx sequelize init`

2. 데이터베이스(Database) 생성
   1. `npx sequelize db:create --env development`

3. 테이블(Table) 생성
   1. `npx sequelize model:generate --name 테이블명 --attributes 속성1:타입,속성2:타입,속성3:타입`
   2. `npx sequelize model:generate --name Board --attributes index:integer,title:string contents:string,date:string`
   3. `Output`:`../model/테이블명.js`

4. 마이그레이션 적용
   1. `npx sequelize db:migrate`
   2. `Output`:`../migrations/'yyyyMMddHHmmSS-create-테이블명.js'`

5. 기초(Seed) 데이터 생성
   1. `npx sequelize seed:generate --name 초기 데이터 이름`
   2. `npx sequelize seed:generate --name initialData`
   3. `Output`:`../seeders/'yyyyMMddHHmmSS-초기 데이터 이름.js'`

6. 기초 데이터 파일 적용, 삽입
   1. `npx sequelize db:seed:all  --debug`

## 📖 비고(Remark)

### 프로젝트 실행

> `npm run start`

### API 서버 실행

> `npm start server`

### 🛠️ 패키지 복원(Packages Recovery)

* `npm install`

### Required

* `typescript`
* `sequelize`
* `sequelize-cli`
* `axios`
* `mysql2`
* `react`
* `express`

### Optional

* `nodemon`
* `cors`
* `react-router-dom`

### index.js

* `Sequelize`를 사용하기 위한 설정으로 추정.
