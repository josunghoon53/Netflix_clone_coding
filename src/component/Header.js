import { useEffect, useRef, useState } from "react"
import { useScroll } from "../customHook/useScroll";


const Header = (props)=>{

	const {y} = useScroll();

	return(
		<header style={{backgroundColor:`${y!==0?'black':''}`}}>
			<img src= {process.env.PUBLIC_URL+'/img/Netflix_Logo_RGB.png'}/>
		</header>
	)
}


export default Header