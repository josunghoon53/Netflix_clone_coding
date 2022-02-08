
import { useEffect, useRef, useState } from 'react';
import styles from  '../styles/Main.module.scss';
import Slide from '../component/Slide';
import HoverCard from '../component/HoverCard';
function Main() {

	const [scrolly,setscrolly] = useState(0);
	const [resize,setResize] = useState(100);
	const [menulist,setMenulist] = useState(['홈','시리즈','영화','내가 찜한 콘텐츠'])
	
	const[modalOn,setModalOn] = useState(true);

	useEffect(()=>{
		if(window.innerWidth>=885){
			setModalOn(true)
		}
 		resizeFuc();
		window.addEventListener("scroll",ScrollFuc);
		window.addEventListener("resize",resizeFuc);
		return() =>{
			window.removeEventListener("scroll",ScrollFuc);
			window.removeEventListener("resize",resizeFuc);
			
		};
	})



	const resizeFuc=()=>{
		setResize(window.innerWidth/9.38);
	}

	const ScrollFuc=()=>{
		setscrolly(window.scrollY);
	}



	return(
		<div>
			{modalOn === true ? null : <MenuModal menulist={menulist}/>}
			<header className={scrolly===0 ? null : styles.header_scroll} >
				<div className={styles.title}>NETFLIX</div>
				{window.innerWidth < 885 
				?<div onClick={()=>{setModalOn(!modalOn)}} className={styles.menubtn}>메뉴
				</div>
				:<ul className={styles.menu}>
					{menulist.map((el,idx)=>{
						return(
							<li key={idx}>{el}</li>
						)
					})}
				</ul>
				}
			</header>
			<section>
				<div className={styles.jumbo}>
					<img src='./img/test.jpg'/>
					<div style={{height:`${resize}px`}} className={styles.shadow}/>
				</div>
				<Slide/>
		
				
			</section>
	
			<footer></footer>
		</div>
	)

}

function MenuModal(props) {
	return (
		<div  className={styles.menu_modal}>
			{props.menulist.map((el,idx)=>{
				return(
					<div key={idx}>
						<p>{el}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Main