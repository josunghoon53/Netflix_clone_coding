
import { useEffect, useState } from 'react';
import styles from  '../styles/Main.module.scss';
import Slide from '../component/Slide';
function Main() {

	const [scrolly,setscrolly] = useState(0);
	
	useEffect(()=>{
		window.addEventListener("scroll",ScrollFuc);
		return() =>{
			window.removeEventListener("scroll",ScrollFuc);
		};
	})

	const ScrollFuc=()=>{
		setscrolly(window.scrollY);
	}

	return(
		<div>
			<header className={scrolly===0 ? null : styles.header_scroll} >
				<div className={styles.title}>NETFLIX</div>
				<ul className={styles.menu}>
					<li>홈</li>
					<li>시리즈</li>
					<li>영화</li>
					<li>내가 찜한 콘텐츠</li>
				</ul>
			</header>
			<section>
				<div className={styles.jumbo}>
					<img src='./img/test.jpg'/>
				</div>
				<div className={styles.background}>
					<Slide/>
				</div>
			</section>
			<footer></footer>
		</div>
	)

}



export default Main