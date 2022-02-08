import { useEffect } from 'react/cjs/react.development';
import styles from  '../styles/Hovercard.module.scss';

function HoverCard(props){


	return(
		<div style={{width:`${320}px`, top:'-80px',
		transformOrigin:'center center'}}
		 onMouseLeave={()=>{props.sethovcard(0)}} className={styles.background}></div>
	)
}

export default HoverCard