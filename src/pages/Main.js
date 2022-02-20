
import { useEffect, useRef, useState } from 'react';
import styles from  '../styles/Main.module.scss';
import Slide from '../component/Slide';
import { useDispatch, useSelector } from 'react-redux';
import DetailCard from '../component/DetailCard';
import { Outlet, Route, Routes } from 'react-router-dom';

function Main(props) {

	const [scrolly,setscrolly] = useState(0);
	const [resize,setResize] = useState(100);
	const [menulist,setMenulist] = useState(['홈','시리즈','영화','내가 찜한 콘텐츠'])
	const[modalOn,setModalOn] = useState(true);
	const [detailcard,setdetailcard] = useState(false);
	const [el,setel] = useState([])

  const dispatch = useDispatch();
	const main =useRef();
	const section = useRef();
	const header =useRef();

	let movie  =  useSelector((state)=> state.movie.movieInfo);
	let genre =  useSelector((state)=> state.movie.genreInfo);
	let tv  =  useSelector((state)=> state.tv);

	
	let tv_genre  =  useSelector((state)=> state.tv_genre);





  useEffect(()=>{

    dispatch({type: 'movie/MOVIE_REQUEST'});

	
		dispatch({type:'tv/GENRES_REQUEST'})
		dispatch({type: 'tv/TV_REQUEST',payload :1});
		dispatch({type: 'tv/TV_REQUEST',payload :2});
		dispatch({type: 'tv/TV_REQUEST',payload :3});
  },[])

	useEffect(()=>{
		if(window.innerWidth>=885){
			setModalOn(true)
		}
 		resizeFuc();
		window.addEventListener("scroll",ScrollFuc);
		window.addEventListener("resize",resizeFuc);
		return() =>{
			window.removeEventListener("scroll",ScrollFuc);
			window.removeEventListener("resize",resizeFuc);
			
		};
	})


	useEffect(()=>{
		if(scrolly !== 0)
		header.current.style = `
			top : 0px;
			position : fixed;
			background-color : black;
			transition: 1s ease-in-out;
		`
		return(()=>{
			header.current.style = `
		`
		})
	})
	

	const resizeFuc=()=>{
		setResize(window.innerWidth/9.38);
	}

	const ScrollFuc=()=>{
		detailcard == false	
		? setscrolly(window.scrollY)
		: setscrolly(scrolly)
	}

	

	return(
		
		<div ref={main} className={styles.main}>
			<Routes>
  			<Route path=":id" element={<DetailCard
				 section = {section}
				 resize = {resize}
				 detailcard = {detailcard}
				 setdetailcard = {setdetailcard}
				 scrolly = {scrolly}
				 setscrolly = {setscrolly} main={main} />}/>
			</Routes>
			{modalOn === true ? null : <MenuModal menulist={menulist}/>}
			<header ref={header}>
				<div className={styles.title}>
					<img src='../img/Netflix_Logo_RGB.png'/>
				</div>
				{window.innerWidth < 885 
				?<div onClick={()=>{setModalOn(!modalOn)}} className={styles.menubtn}>메뉴
				</div>
				:<ul className={styles.menu}>
					{menulist.map((el,idx)=>{
						return(
							<li key={idx}>{el}</li>
						)
					})}
				</ul>
				}
			</header>
			<section>
				<div className={styles.jumbo}>
					<img src='../img/test.jpg'/>
					<div style={{height:`${resize}px`}} className={styles.shadow}/>
				</div>
				<div>
				<Slide type = {1} setdetailcard={setdetailcard} genre = {genre}  movie = {movie}/>
				<Slide type = {2} setdetailcard={setdetailcard} genre = {genre}  movie = {tv}/>
			
				</div>
			</section>
		</div>

	)

}

function MenuModal(props) {
	return (
		<div  className={styles.menu_modal}>
			{props.menulist.map((el,idx)=>{
				return(
					<div key={idx}>
						<p>{el}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Main