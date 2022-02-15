import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from  '../styles/Hovercard.module.scss';
import DetailCard from './DetailCard';

function HoverCard(props){

	const [x,setx] = useState(0);
	const [num,setnum] = useState(0);
	const background = useRef();
	const [genr,setgenr] = useState([]);
	const navigate = useNavigate()

	useEffect(()=>{
		for(let i=0;i<props.licount.length;i++){
			if(props.licount[i] == props.el){
				setnum(i+props.current)
			}
		}	
	})

	useEffect(()=>{
		if(num== 0) {
			background.current.style = 'left : 0;'
			setx(16.5)
		}
		else if(num == props.slideCnt-1) {
			background.current.style = 'right : 0;'
			setx(-16.5)
		}
		else {
			setx(-5)
		}
	},[num])


	useEffect(()=>{
		let copy = [];
		props.genres.map((el)=>{
			if(props.el.genre_ids.includes(el.id) == true){
				copy.push(el.name);
			}	
		})
		setgenr(copy);
	},[])



	return(
		<div ref={background} style={{
								opacity:'1',
								transform: `scale(1.5) translateX(${x}%)`}}
	 							className={styles.background}>

			<div className={styles.hoverimg}>
				<img className='hov' src={`https://image.tmdb.org/t/p/w500${props.el.backdrop_path}`}/>
			</div>	

			<div className={styles.btn}>
				<div className={styles.play}>
					<img src='../img/btn_play.png'/>
				</div>
				<div className={styles.add}>
					<img src='../img/btn_add.png'/>
				</div>
				<div className={styles.good}>
					<img src='../img/btn_like.png'/>
				</div>
				<div className={styles.bad}>
					<img src='../img/btn_hate.png'/>
				</div>
				<div onClick={()=>{
					navigate('/Main/1');
				}} className={styles.detail}>
					<img src='../img/btn_detail.png'/>
				</div>
			</div>			

			<ul className={styles.genres}>
				{genr.map((el,idx)=>{
					return(
					<li key={idx}>{el}</li>
					)
				})}
			</ul>	
		</div>
	)
}

export default HoverCard