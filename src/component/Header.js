import { useEffect, useRef, useState } from "react"
import {useNavigate} from "react-router-dom";
import styles from  '../styles/Main.module.scss';


const Header = (props)=>{

	
	const [menulist,setMenulist] = useState(['홈','영화','TV','내가 찜한 콘텐츠','로그인창으로'])
	const navigate = useNavigate();
	const header = useRef();

	/*------------------------------ */
	useEffect(()=>{
		if(props.scrolly !== 0)
		header.current.style = `
			top : 0px;
			position : fixed;
			background-color : black;
			transition: 1s ease-in-out;
		`
		else {
			header.current.style = `	
		`
		}
	})

	useEffect(()=>{
		window.addEventListener("scroll",ScrollFuc);
		return() =>{
			window.removeEventListener("scroll",ScrollFuc);
		};
	})

	const ScrollFuc=()=>{
		props.detailcard == false	
		? props.setscrolly(window.scrollY)
		: props.setscrolly(props.scrolly)
	};

	/*------------------------------ */

	return(
		<header ref={header}>
			<div className={styles.title}>
				<img onClick={()=>{
					navigate('/Main')
					window.location.reload()}} src= {process.env.PUBLIC_URL+'/img/Netflix_Logo_RGB.png'}/>
			</div>
		
			<ul className={styles.menu}>
				{menulist.map((el,idx)=>{
					return(
						<li onClick={()=>{
							if(idx == 0) navigate('/Main')
							if(idx == 1) navigate('/Main/type/1')
							if(idx == 2) navigate('/Main/type/2')
							if(idx == 4) navigate('/')
						}} key={idx}>{el}</li>
					)
				})}
			</ul>		
		</header>
	)
}


export default Header