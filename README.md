# Capstone
express와 MySQL을 이용하여 RESTful API를 개발


## DB 스키마
![image](https://github.com/sbs524/Capstone/assets/80670002/e12cd685-9e5f-4452-a6d4-14d815481250)

> 이미지 저장 방법
>
> 이미지 파일을 입력받으면 이미지를 uploads폴더에 저장<br>
> 저장한 이미지의 이름을 DB에 저장하여 추후 이미지의 파일이름을 통해 이미지에 접근


### users
- 회원 계정 정보를 담는 테이블
- role 값에서 판매자와 구매자를 구분하고 만약 판매자일 경우 가게 위치를 등록

### board
- 게시판에 필요한 정보들을 담는 테이블
- images를 JSON형태로 저장하여 여러 이미지 파일명을 저장

### auction_log
- 게시판의 입찰 기록을 저장하는 테이블 
- board 테이블을 참조함




## 구현 기능
> 각 테이블을 등록/삭제/열람 할 수 있고 특정 컬럼을 갱신<br>
> id 중복확인과 bcrypt를 이용한 비밀번호 암호화, 다중 이미지 업로드 구현

### 원활한 협업을 위해 노션 사용

![스크린샷 2023-12-16 213717](https://github.com/sbs524/Capstone/assets/80670002/615368b0-c300-4859-ad5f-5807eb1928ca)


### 구현한 기능들을 한눈에 파악할 수 있고 상세한 설명은 각 행 클릭 시 볼 수 있음


![스크린샷 2023-12-16 213740](https://github.com/sbs524/Capstone/assets/80670002/af698b22-f25d-4bd7-9ea9-ac4147f63b22)


### 해당 기능 사용법과 사용 시 반환값을 상세하게 기술해놓음


![스크린샷 2023-12-16 213749](https://github.com/sbs524/Capstone/assets/80670002/903946fd-c930-4091-a03b-9c6888406774)


## AWS를 이용한 배포
- Git 저장소를 통해 개발 진행상황을 수시로 업로드
- 구현 후 AWS서비스를 이용하여 git clone
- pm2를 사용하여 24시간 가동


## 시연영상
[![시연영상](https://img.youtube.com/vi/DCkKc3-OPuw/1.jpg)](https://www.youtube.com/watch?v=DCkKc3-OPuw)
