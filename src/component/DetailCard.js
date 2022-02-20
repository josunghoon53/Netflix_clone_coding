import {useEffect, useLayoutEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import ModalPotal from '../Portal';
import styles from '../styles/Detailcard.module.scss'


function DetailCard (props) {

	const location = useLocation();
	const {genr} = location.state;
	const {type} = location.state;
	const {id} = useParams();
	const dispatch = useDispatch();
	const background = useRef();
	const modal = useRef();

	const navigate = useNavigate();
	 

	let detail = useSelector((state)=> 
		type == 1? state.movie.detailInfo : state.tv_detail
	);


	let person = useSelector((state)=> 
		type == 1? state.movie.personInfo : state.tv_person
	);

	

	let similar = useSelector((state)=> 
		type == 1? state.movie.similarInfo : state.tv_similar
	);

	


	const outclick = (e)=>{
		if(e == background.current){
			props.setdetailcard(false)
			const scrollY = props.main.current.style.top;
			props.main.current.style.cssText= ``	
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
			navigate('/Main');
		}
	}

	useEffect(()=>{
		props.scrolly < window.scrollY ? props.setscrolly(0) : props.setscrolly(window.scrollY)
		props.main.current.style.cssText= `
		top: -${props.scrolly < window.scrollY ? 0 : window.scrollY}px;
		overflow-y: scroll;
		position : fixed;
		width: 100vw;
		height:${window.innerHeight}vw`;
		props.setdetailcard(true)
		props.setscrolly(window.scrollY)
		window.scrollTo(0,0)
		return ()=>{
			props.main.current.style.cssText= `
			position:static;`	
		}
	},[])

	useEffect(()=>{
		if(type == 1){
		dispatch({type:'movie/UNIT_REQUEST', payload : id})
		}
		else if(type == 2) {
		dispatch({type:'tv/DETAIL_REQUEST', payload : id})
		dispatch({type:'tv/PERSON_REQUEST', payload : id})
		dispatch({type:'tv/SIMILAR_REQUEST', payload : id})
		}
	},[])





	return(
		<ModalPotal>
			<div ref={background} onClick={(e)=>{outclick(e.target)}} className={styles.background}/>
			<div 
			className={styles.modalContainer}>
				<div className={styles.imgWrapper}>
					<img className={styles.backdrop} src={`https://image.tmdb.org/t/p/w500${detail.backdrop_path}`}/>
					<div className={styles.shadow}/>
				</div>
				<div className={styles.detailSection}>
					<div className={styles.title}>{type == 1 ? detail.title : detail.name}</div>
		
					<div className={styles.infoBox}>
							<div className={styles.date}>개봉날짜 : {type  ==1 ?detail.release_date : detail.first_air_date}</div>
							<div className={styles.time}>상영시간 :{detail.runtime}분</div>
					</div>
					

					<div className= {styles.infoContainer}>
						<div onClick={(()=>{
							console.log(person)
						})} className={styles.overview}>
							{detail.overview}
						</div>
						<div className={styles.pergenBox}>
							<div className={styles.name}>
								출연 :
								{
									person.map((el,idx)=>{
										return(<span key={idx}>{el.name},</span>)
									})
								}
							</div>
							<div className={styles.genr}>
								장르 : {genr.map((el,idx)=>{
									return(
										<span key={idx}>{el}</span>
									)
								})}
							</div>
						</div>
					</div>
			
				</div>

				<div className={styles.similarContainer}>
					<h2>비슷한 콘텐츠</h2>	
					<div className={styles.similarData}>
						{
							similar.map((el,idx)=>{
								return(
									<div key={idx} className={styles.similarWrapper}>
										<img src={`https://image.tmdb.org/t/p/w342${el.poster_path}`}/>	
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</ModalPotal>
		
		
	)
}


export default DetailCard