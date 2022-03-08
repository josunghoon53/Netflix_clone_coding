import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"

import style from '../style/Full.module.scss';


const FullModal = (props) =>{

	const coordi = useSelector(state => state.coordi);
	const Full = useRef();

	useEffect(()=>{
	
	})





	return(
		<div className={style.modal_container} ref={Full}>
			full
		</div>
	)
}

export default FullModal