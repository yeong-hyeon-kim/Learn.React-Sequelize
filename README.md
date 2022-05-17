## Reactive
* 리액트 생성, 조회, 업데이트, 삭제 예제
* React C.R.U.D(Create, Read, Update, Delete) Template(Feat. Sequelize)

### 프로젝트 실행
> `npm run start`

### API 서버 실행
> `npm start server`

## Packages
* 패키지 복원
  >`npm install`


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

## Sequelize

1. 시퀼라이즈에 알맞게 프로젝트 디렉토리를 구성

`npx sequelize init`
<br>

2. 데이터베이스(Database) 생성

`npx sequelize db:create --env development`
<br>

3. 테이블(Table) 생성

`npx sequelize model:generate --name테이블명 --attributes 속성1:타입,속성2:타입,속성3:타입`
`npx sequelize model:generate --name Board --attributes index:integer,title:string contents:string,date:string`
<br>

4. 마이그레이션 적용

 `npx sequelize db:migrate`
 <br>
 
5. 기초(Seed) 데이터 삽입

`npx sequelize seed:generate --name 초기 데이터 이름`
`npx sequelize seed:generate --name initialData`
<br>

6. 기초 데이터 파일 적용, 삽입
`npx sequelize db:seed:all  --debug`
