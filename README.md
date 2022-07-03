# 슬기로운 백신생활

자신의 백신 접종 후기를 남길 수 있고 다른 접종자들의 후기를 볼 수 있는 사이트

- Front-End: React
- Back-End: Node.js, Express
- DataBase: MongoDB, Mongoose

<hr>

![메인](https://user-images.githubusercontent.com/81530929/138592311-02662189-1c37-4dd8-9900-e020f6340aa3.PNG)

<hr>

## 메인화면

- 백신 접종 예약 사이트, 확진자 관련 정보를 알 수 있는 코로나맵으로 이동할 수 있는 배너 
- 전체 게시글 조회
- 보건복지부 API를 활용한 확진자 수, 1차/2차 접종 완료율 표시
<br>
<br>
<br>
<hr>

![회원가입](https://user-images.githubusercontent.com/81530929/138592721-d0047ea3-519a-4911-9f5a-3666dccef406.PNG)

<hr>

## 회원가입, 로그인 화면

- 이메일과 닉네임의 중복확인, 비밀번호 유효성 검증
- 로그인 시 jwt토큰을 생성, 저장하여 로그인 상태와 권한을 체크
<br>
<br>
<br>

<hr>

![회원정보 변경](https://user-images.githubusercontent.com/81530929/138592858-cd66f5c7-1764-4eef-8cf3-69055f08c721.PNG)


![detail](https://user-images.githubusercontent.com/81530929/177031462-d9dc9363-9755-46d2-98a1-6ad9dc5eb1cb.PNG)
<hr>

## 상세정보 기입 

회원가입 완료 후 프로필 사진을 클릭하여 백신접종 관련 상세정보를 입력가능

<hr>

![post](https://user-images.githubusercontent.com/81530929/177031520-011ecf07-7338-4cb2-8ba3-2e8cf5dc2160.PNG)

![comment](https://user-images.githubusercontent.com/81530929/177031522-9fc6abf3-4844-4da5-8c5b-00ddfc43e5c0.PNG)
<hr>

## 게시글 
게시글 CRUD 기능 구현, 댓글 기능 구현
