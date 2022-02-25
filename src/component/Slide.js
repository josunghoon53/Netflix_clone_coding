import { useEffect, useRef, useState } from 'react';
import styles from  '../styles/Slide.module.scss';
import HoverCard from './HoverCard';
import {movieData } from '../Api';
import { useDispatch, useSelector } from 'react-redux';


function Slide(props) {

	const [licount,setlicount] = useState([]);
	const [newli,setnewli] = useState([]);
	const [slideCnt,setslideCnt] = useState();
	const [liwidth,setliwidth] = useState();
	const [moslide,setmoslide] = useState(0);
	const [ulwidth,setulwidth] = useState();

	const [current,setcurrent] = useState(0)

	const [arrowbtn,setarrowbtn] = useState(false)
	const [num,setnum] = useState();

	let [slideOn,setslideon] = useState(0)
	let [slidebar,setslidebar] =useState(0)
	let [arrowon,setarrowon] =useState(0)
	let [hovcard,sethovcard] =useState(0)
	let [btnhidden,setbtnhidden]= useState(0)

	let [allsee,setallsee] =useState(0)
	let [allseetitle,setallseetitle] = useState(0)

	const [zindex,setzindex] = useState(); 
	const [timer,settimer] = useState();
	const li = useRef();
	const ul = useRef();
	const box = useRef();
	const dispatch = useDispatch();

	const item = useSelector((state)=> {
		if(props.type == 1) {
			if(props.data == `${'sort_by=popularity.desc'}`) {
				return state.m_genres.popular
			}
			if(props.data == `${'with_genres=28,53'}`) {
				return state.m_genres.action
			}
			if(props.data == `${'with_original_language=ko'}`) {
				return state.m_genres.korea
			}
			if(props.data == `${'with_genres=16'}`) {
				return state.m_genres.animation
			}
		} 
		
		else {
			if(props.data == `${'with_original_language=ko'}`) {
				return state.t_genres.korea
			}
		}
	
	});

	const genre = useSelector((state)=>{
		if(props.type == 1) {
			return state.movie.genreInfo
		} else {
			return state.tv.genreInfo
		}
	})

						
	/*브라우저 크기에 따른 슬라이드 갯수 조정*/
	useEffect(()=>{
		resizeFuc();
		window.addEventListener('resize',resizeFuc);
		return ()=> window.removeEventListener('resize',resizeFuc);
	})

	const resizeFuc = ()=>{
		if(window.innerWidth>=1400) {
			setslideCnt(6);
		} 
		else if(window.innerWidth>=1100) {
			setslideCnt(5);
		} 

		else if(window.innerWidth>=800) {
			setslideCnt(4);
		} 

		else if(window.innerWidth>=500) {
			setslideCnt(3);
		} 

		else {
			setslideCnt(2);
		} 

		setliwidth(100/slideCnt)
		//슬라이드바
		if((licount.length%slideCnt) == 0) {
			setnum(parseInt(licount.length/slideCnt))
		} else {
			setnum(parseInt((licount.length/slideCnt)+1))
		}

		if(newli.length > 6){
			setulwidth(newli.length*liwidth)
			setbtnhidden(1)
		} else {
			setbtnhidden(0)
			setulwidth(slideCnt*liwidth)
			ul.current.style.transform = 'translateX(0px)' 
			
		}
	}
	
	/*------------------------------------- */


	useEffect(()=>{
		props.type == 1
		?	dispatch({type: 'movie/MOVIE_REQUEST',url:props.data})
		: dispatch({type: 'tv/TV_REQUEST',url:props.data});
	},[dispatch])


	/*-------슬라이드 복제여부---------------*/
	useEffect(()=>{
		setlicount([...item])
		if(item.length <= slideCnt){
			setnewli([...item]);
		} else {
			setnewli([...item,...item,...item]);
		}
	},[item,slideCnt])
	/*------------------------------------- */


	/*----------슬라이드 좌_우_이동-----------*/
	useEffect(()=>{
		setTimeout(()=>{
			if(moslide < 0 && moslide > -33.3333){
				setmoslide(moslide-33.3333);
			}
			if(moslide <= -66.6666) {
				setmoslide(moslide+33.3333)
			}
		},700)
	},[moslide])

	const moveslide = (move,dir) =>{
		if(slideOn === 0) {

			if(dir == 'right'){
				if(licount.length+current-slideCnt > slideCnt || licount.length+current=== 2*slideCnt){
					setcurrent(current-slideCnt)
					setmoslide(moslide => moslide+ (move*(slideCnt)))
				} else if(licount.length+current-slideCnt < slideCnt && licount.length+current-slideCnt !=0){
					setcurrent(current-(licount.length+current-slideCnt))
					setmoslide(moslide => moslide+ (move*(licount.length+current-slideCnt)))
				} else if((licount.length+current) === slideCnt) {
					setcurrent(0)
					setmoslide(moslide => moslide+ (move*(slideCnt)))
				}
			}	

			if(dir == 'left') {
				
				if(current === 0) {
					setcurrent(slideCnt-licount.length)
					setmoslide(moslide => moslide+ (move*(slideCnt)))
				} else {
					if(current%slideCnt !== 0) {
						setcurrent(current+(-current%slideCnt))
						setmoslide(moslide => moslide+ (move*(-current%slideCnt)))
					} else {
						setcurrent(current+slideCnt)
						setmoslide(moslide => moslide+ (move*(slideCnt)))
					}
									
				}
			}


			ul.current.style.transition =  '0.7s ease'		
			setslideon(prev => prev+1);
			setTimeout(()=>{

				ul.current.style.transition =  'none'

			},700)
			setTimeout(()=>{setslideon(prev => prev-1)},770)
		}
		
	}
	/*------------------------------------- */

	return (
		<div style={{zIndex:`${zindex}`}} onMouseEnter={()=>{setallsee(1)}} onMouseLeave={()=>{setallsee(0)}} className={styles.slide_comp}>
			<h2 className={styles.title_container}>
				<div onMouseEnter={()=>{setallseetitle(1)}} onMouseLeave={()=>{setallseetitle(0)}} 
					className={styles.title}>{props.title}
					{allsee == 0 ? null 
					:<div className={styles.allsee}>
						{allseetitle == 0 ? null :
						<div className={styles.allseetitle}>모두보기</div> 
						}
						<div className={styles.allseearrow}><img src={process.env.PUBLIC_URL+'/img/right.png'}/></div>
					</div>}
				</div>
					
		
				{slidebar == 0 || btnhidden ===0
				? null
				: <div className={styles.slidebar}>
						{[...Array(num)].map((n, index) => {
							let a = 0;
							if(current%slideCnt !==0) a = parseInt(-current/slideCnt) + 1
							else  a = parseInt(-current/slideCnt)
    					return (<div key={index} className={
								a == index ? styles.current : null
							}/>)
						})}
					</div>
				}	
			</h2>
	
			<div onMouseOver={()=>{setslidebar(prev=>prev+1)
														 setarrowon(prev =>prev+1)}} 
					 onMouseOut={()=>{setslidebar(prev=>prev-1)
														setarrowon(prev=>prev-1)}} className={styles.slide_container}>
				<div ref={box} className={styles.slide_box}>
					<ul ref={ul} style={{width:`${ulwidth}%`, transform:`translateX(${moslide}%`}}>
						{newli.map((el,idx)=>{ 
							return(	
								<li onMouseEnter={()=>{settimer(setTimeout(()=>{sethovcard(idx+1)
								},500))
									setzindex(100)}} 
										onMouseLeave={()=>{sethovcard(0)
											clearTimeout(timer)
											setzindex(0)}}
								 ref={li} key={idx} style={{width:`${liwidth}%`}} className={styles.slide_card}>
										<div className={styles.img_wrapper}>
											<img className={styles.slideImg} src={`https://image.tmdb.org/t/p/w500${el.backdrop_path}`}/>
											{hovcard == idx+1 ? 
											<HoverCard
											type = {props.type}
											setdetailcard={props.setdetailcard}
											genre={genre} slideCnt = {slideCnt}
											current={current} licount={licount} el={el} /> : null}
										</div>	
								</li>
							)
						})}
					</ul>		
				</div>
				<div className={styles.arrow_box}>
					{arrowbtn === false || btnhidden===0 ? null 
					:	<span onClick={()=>{
							moveslide(100/newli.length,'left')
							}} className={styles.left}>
							<img className={arrowon===0? styles.img_hidden:null} src={process.env.PUBLIC_URL+'/img/left.png'}/>
						</span>
					}

					{btnhidden ===0 ? null :
						<span onClick={(()=>{
							setarrowbtn(true)
							moveslide(-100/newli.length,'right')
							})}  className={styles.right}>
							<img className={arrowon===0?styles.img_hidden:null} src={process.env.PUBLIC_URL+'/img/right.png'}/>
						</span>	
					}
				</div>
			</div>	
		</div>
		
	)


}				


export default Slide