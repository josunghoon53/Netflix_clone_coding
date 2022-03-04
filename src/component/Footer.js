import style from '../style/Footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = ()=>{
	return (
		<footer>
			<div className={style.footer_wrapper}>
				<div className={style.footer_icon}>
					<FontAwesomeIcon className={style.icon} icon={faFacebookF}/>
					<FontAwesomeIcon className={style.icon} icon={faGithub}/>
					<FontAwesomeIcon className={style.icon} icon={faInstagram}/>
					<FontAwesomeIcon className={style.icon} icon={faYoutube}/>
				</div>
				<ul className={style.footer_menu}>
					<li>자주 묻는 질문</li>
					<li>고객 센터</li>
					<li>이용 약관</li>
					<li>개인정보</li>
					<li>쿠키 설정</li>
					<li>회사 정보</li>
				</ul>
				<div className={style.copyright}>
					©2021 Copyright: josunghoon
				</div>
			</div>
		</footer>
	)
}


export default Footer