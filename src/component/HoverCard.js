import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from  '../styles/Hovercard.module.scss';


function HoverCard(props){

	const dispatch = useDispatch();
	const [x,setx] = useState(0);
	const [num,setnum] = useState(0);
	const background = useRef();
	const [genr,setgenr] = useState([]);
	const navigate = useNavigate();
	const [btncolor,setbtncolor] = useState();

	let detail = useSelector((state)=> 
		props.type === 1? state.movie.detailInfo : state.tv.detailInfo
	);


	let person = useSelector((state)=> 
		props.type === 1? state.movie.personInfo : state.tv.personInfo
	);


	let similar = useSelector((state)=> 
		props.type === 1? state.movie.similarInfo : state.tv.similarInfo
	);

	

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
		if(props.type == 1)
		dispatch({type:`movie/UNIT_REQUEST`, payload : props.el.id})
		if(props.type == 2)
		dispatch({type:`tv/UNIT_REQUEST`, payload : props.el.id})
	},[dispatch])


	useEffect(()=>{
		let copy = [];
		props.genre.map((el)=>{
			if(props.el.genre_ids.includes(el.id) == true){
				copy.push(el.name);
			}	
		})
		setgenr(copy);
	},[])

	const onColor = () =>{
		setbtncolor('rgba(255, 255, 255, 0.72)')
	}

	const offColor = () =>{
		setbtncolor('')
	}

	return(
		
		<div ref={background} style={{
								opacity:'1',
								transform: `scale(1.5) translateX(${x}%)`}}
	 							className={styles.background} >
			<div className={styles.hoverimg}>
				<img src={`https://image.tmdb.org/t/p/w500${props.el.backdrop_path}`}/>	
			</div>	

			<div className={styles.btn}>		
				<div onClick={()=>{}} className={styles.play}>
					<img src={process.env.PUBLIC_URL + '/img/btn_play.png'}/>
				</div>
				<div className={styles.add}>
					<img src={process.env.PUBLIC_URL + '/img/btn_add.png'}/>
				</div>
				<div className={styles.good}>
					<img src={process.env.PUBLIC_URL + '/img/btn_like.png'}/>
				</div>
				<div className={styles.bad}>
					<img src={process.env.PUBLIC_URL + '/img/btn_hate.png'}/>
				</div>
				<div onClick={()=>{
					props.setdetailcard(true);
					navigate(`${props.el.id}`,{
						state: {genr : genr, type: props.type, detail: detail, 
							similar : similar, person : person}});
				}} onMouseDown={()=>{onColor()}} onMouseLeave={()=>{offColor()}} style ={{backgroundColor:btncolor}} className={styles.detail}>
					<img src={process.env.PUBLIC_URL + '/img/btn_detail.png'}/>
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