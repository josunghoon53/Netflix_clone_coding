import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from '../style/Modal.module.scss';



const Modal = (props) =>{

	const coordi = useSelector(state => state.coordi);
	const Modal = useRef();
	const dispatch = useDispatch();

	useEffect(()=>{
		Modal.current.style.cssText = `
			transform : scale(${coordi.scale});
			position : absolute;
			top : ${coordi.top}px;
			left : ${coordi.left}px;
			width : ${coordi.width}px;
			height : ${coordi.height*1.8}px`;
	})





	return(
		<div onMouseLeave={()=>{
			Modal.current.style.transform = null
			setTimeout(()=>{Modal.current.style.position = null},1000)}} className={style.modal_container} ref={Modal}>
			<div className={style.modal_imgwrapper}>
				<img src={`./test/${coordi.el}`}/>
			</div>
			<div>
			</div>
		</div>
	)
}

export default Modal;