import { useEffect, useState } from "react"
import style from '../style/Main.module.scss'

const Jumbo = ()=>{


	const [shadow,setshadow] = useState(100);
	
	useEffect(()=>{
		window.addEventListener('resize',resizeFuc);
		return () =>{
			window.removeEventListener('resize',resizeFuc);
		}
	})
	
	const resizeFuc = ()=>{
		setshadow(window.innerWidth*0.17);
	}	


	return (
		<div className={style.jumboContainer}>		
			<img src={process.env.PUBLIC_URL + '/img/jumbo_test.jpg'}/>
			<div style={{height:`${shadow}px`}} className={style.shadow}/>
		</div>
	)
}


export default Jumbo