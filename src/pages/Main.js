
import { useEffect, useRef, useState } from 'react';
import styles from  '../styles/Main.module.scss';
import Slide from '../component/Slide';
import SlideData from '../component/SlideData';
import {useDispatch} from 'react-redux';
import DetailCard from '../component/DetailCard';
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from '../component/Header';



function Main(props) {

	const [resize_shadow,setResize_shadow] = useState(100);
	const [detailcard,setdetailcard] = useState(false);
	const [scrolly,setscrolly] = useState(0)
	const navigate  = useNavigate();
  const dispatch = useDispatch();
	const main =useRef();
	const header =useRef();
	const url = useLocation();


	
	/*-----------------리사이즈-----------------*/

	const resizeFuc=()=>{
		setResize_shadow(window.innerWidth/9.38);
	}

	useEffect(()=>{
		window.addEventListener("resize",()=>{
			setResize_shadow(window.innerWidth/9.38);
		});
		return() =>{
			window.removeEventListener("resize",resizeFuc);
		};
	})

  /*-------------------------------------------*/


	const Jumbo = ()=>{
		return(
			<div className={styles.jumbo}>
				<img src={process.env.PUBLIC_URL + '/img/test.jpg'}/>
				<div style={{height:`${resize_shadow}px`}} className={styles.shadow}/>
			</div>
		)
	}


	const SlideCategory = (el,idx) =>{
		/*----------------전체_카테고리_슬라이드----------------*/
		if(url.pathname.includes('type')==false)
		return(
			<Slide key = {idx} type = {el.type} order = {el.id} title = {el.title}
			setdetailcard = {setdetailcard} data = {el.url}/>
		)


		/*----------------영화_카테고리_슬라이드----------------*/
		if(url.pathname.includes('type/1')==true && el.type == 1)
		return(
			<Slide key = {idx} type = {el.type} order = {el.id} title = {el.title}
			setdetailcard = {setdetailcard} data = {el.url}/>
		)


		/*----------------TV_카테고리_슬라이드------------------*/
		if(url.pathname.includes('type/2')==true && el.type == 2)
		return(
			<Slide key = {idx} type = {el.type} order = {el.id} title = {el.title}
			setdetailcard = {setdetailcard} data = {el.url}/>
		)
	}


	return(
		
		<div ref={main} className={styles.main}>		

			{/*상세화면모달창*/}
			<Routes>
  			<Route path=":id" element={<DetailCard
				 setdetailcard = {setdetailcard} scrolly = {scrolly}
				 setscrolly = {setscrolly} main={main} />}/>
			</Routes>

			{/*헤더부분*/}
			<Header setdetailcard = {setdetailcard} detailcard = {detailcard} 
			setscrolly = {setscrolly} scrolly = {scrolly}/>

			{/*세션부분*/}
			<section>
				<Jumbo/>
				<>
					{SlideData.map((el,idx)=>(
						SlideCategory(el,idx)
					))}
				</>
			</section>
		</div>

	)

}


export default Main