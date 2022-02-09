import { useEffect, useState } from 'react/cjs/react.development';
import styles from  '../styles/Hovercard.module.scss';

function HoverCard(props){

	const [x,setx] = useState(0);

	useEffect(()=>{
		if(props.hovcard == 1) {setx(8.3)}
		if(props.hovcard == props.slideCnt) {
			setx(-8.3)
		}
	})

	return(
		<div style={{top:'-30%',
								opacity:'1',
								transform: `scale(1.2) translateX(${x}%)`,
								left:'0'}}
	 							className={styles.background}>

			<div className={styles.hoverimg}>
				<img className='hov' src={`./img/test/test${props.hovcard}.jpg`}/>
			</div>						 

		</div>
	)
}

export default HoverCard