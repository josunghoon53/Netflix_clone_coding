import { useNavigate } from 'react-router-dom';
import styles from  '../styles/Login.module.scss';


function Login(){

	const navigate = useNavigate();

	return(
		<div className={styles.Main}>
			<div className={styles.background}>
				<img src='./img/netflixMainImg.jpg'/>
			</div>
			<header>NETFLIX</header>
			<section>
				<div className={styles.wrapper}>
					<div className={styles.titlebox}>로그인</div>
					<div className={styles.inputbox}>
						<input className={styles.id} placeholder='이메일 주소 또는 전화번호'/>
						<input className={styles.pw} placeholder='비밀번호'/>
					</div>
					<div className={styles.btnbox}>
						<button>로그인</button>
						<button onClick={()=>{navigate('/Main')}}>둘러보기</button>
					</div>
				</div>
			</section>
			<footer>
				<div className={styles.footer_wrapper}>
					<div className={styles.footer_question}>
						질문이 있으신가요? 문의 전화:  000-000-0000</div>
					<ul className={styles.footer_list}>
						<li>자주 묻는 질문</li>
						<li>고객 센터</li>
						<li>이용 약관</li>
						<li>개인정보</li>
						<li>쿠키설정</li>
						<li>회사정보</li>
					</ul>
					<div className={styles.footer_info}>
							넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587<br/>
							대표: 레지널드 숀 톰프슨<br/>
							이메일 주소: korea@netflix.com
							주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br/>
							사업자등록번호: 165-87-00119<br/>
							클라우드 호스팅: Amazon Web Services Inc.<br/>
							공정거래위원회 웹사이트<br/>
					</div>
				</div>
			</footer>
		</div>
	);
}


export default Login