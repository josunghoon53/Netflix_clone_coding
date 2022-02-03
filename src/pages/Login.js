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
				
				</div>
			</footer>
		</div>
	);
}


export default Login