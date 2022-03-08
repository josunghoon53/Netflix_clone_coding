import React, { useEffect, useState } from "react"
import { useResize } from "../customHook/useResize";
import style from '../style/Main.module.scss'
import VideoJS from './VideoJS';

const Jumbo = ()=>{
	const {w} = useResize();
	const [shadow,setshadow] = useState(100);
	

	useEffect(()=>{
		setshadow(w*0.17);
	})

	
	return (
		<div className={style.jumboContainer}>	
 			<img src={process.env.PUBLIC_URL + '/img/jumbo_test.jpg'}/>
			<div style={{height:`${shadow}px`}} className={style.shadow}/>
		</div>
	)
}


export default Jumbo