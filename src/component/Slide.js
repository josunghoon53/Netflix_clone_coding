import React, { useEffect,useRef,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHover } from '../customHook/useHover';
import { useResize } from '../customHook/useResize';
import style from '../style/Slide.module.scss'

const Slide = (props) =>{


	
	const [slideitem,setSlideitem] = useState([]);
	const {w} = useResize();
	const [isSlide,setIsSlide] = useState(true);
	const [slideCnt,setslideCnt] = useState(4);
	const [liwidth,setliwidth] = useState();
	const [ulwidth,setulwidth] = useState();
	const [curIdx,setcurIdx] = useState(0);
	const [move,setMove] = useState(0);
	const[barCnt,setBarCnt] = useState()
	const ul = useRef();
	const dispatch = useDispatch();
	const [timer,setTimer] = useState();

	const [slideContainer,slideConHover] = useHover();
	

	
	// 화면크기별 슬라이드 표시 갯수 및 ul,li 넓이
	useEffect(()=>{
		if(w>=1400) setslideCnt(6);
		else if(w>=1100) setslideCnt(5);
		else if(w>=800) setslideCnt(4);
		else if(w>=500) setslideCnt(3);
		else setslideCnt(2);
	
		setliwidth(100/slideCnt);
		setulwidth(slideitem.length * liwidth)
		setBarCnt(Math.ceil(props.test.length/slideCnt));
	})

	// 슬라이드 복제 여부
	useEffect(()=>{
		if(props.test.length <= slideCnt) setSlideitem([...props.test])
		else setSlideitem([...props.test,...props.test,...props.test])
	},[slideCnt])

	//33.3333과 66.6666은 복제된 슬라이드 시작점의 x값을 의미한다. (100%기준)
	useEffect(()=>{
		setTimeout(()=>{
			if(move < 0 && move >-33.3333) setMove(move-33.3333)
			if(move  <= -66.6666) setMove(move+33.3333)
		},700)
	},[move])

	// 슬라이드 좌우이동
	const moveslide = (dir) =>{
		//슬라이드 한칸 이동길이
		let x = 100/slideitem.length;
		//남은 슬라이드 수
		let num = props.test.length-slideCnt+curIdx;
		//배수만큼 이동하고 나머지 슬라이드 갯수 
		let remain = props.test.length%slideCnt

		if(isSlide === true) {
			//오른쪽 버튼 클릭시 조건문에 따른 이동 
			if(dir === 'right') {
				if(num < slideCnt && num !== 0) {
					setcurIdx(curIdx-num)
					setMove(move-(x*num))
				}
				else {
					if(num === 0) setcurIdx(0)
				 	else setcurIdx(curIdx-slideCnt) 
					setMove(move-(x*slideCnt))
				}
			}

			//왼쪽 버튼 클릭시 조건문에 따른 이동 
			if(dir === 'left') {
				if(num === 0) {
					setcurIdx(curIdx+remain)
					setMove(move+(x*remain))
				}
				
				else {
					if(num === props.test.length-slideCnt) setcurIdx(slideCnt-props.test.length);
					else setcurIdx(curIdx+slideCnt)
					setMove(move+(x*slideCnt))
				}
			}

			ul.current.style.transition =  '0.7s ease'		
			setIsSlide(false);
			setTimeout(()=>{
				ul.current.style.transition =  'none'
			},700)
			setTimeout(()=>{setIsSlide(true)},770)
		}

	}

	//슬라이드바 컴포넌트
	const SlideBar = () =>{
		let i = Math.ceil(-curIdx/slideCnt);
		return(
			[...Array(barCnt)].map((el,idx)=>{
				return(
					<div className={i===idx ? style.check : null} key={idx} />
				)
			})
		)
	}

	//좌우화살표 컴포넌트
	const ArrowBox = () => {
		return(
			<div className={style.arrow_box}>		
				{move === 0 ? null :					
				<span onClick={()=>{moveslide('left')}} className={style.left}>			
					{slideConHover ?<img src={process.env.PUBLIC_URL+'/img/left.png'}/>:null}	
				</span>}
				<span onClick={()=>{moveslide('right')}} className={style.right}>
					{slideConHover ?<img src={process.env.PUBLIC_URL+'/img/right.png'}/>:null}	
				</span>
			</div>
		)
	}

	const loc = (e,cnt,idx,el) =>{
		dispatch({type : 'coorvalue/COORDI_SET', payload : {
			top 	: e.getBoundingClientRect().y + window.pageYOffset,
			left	:	e.getBoundingClientRect().left,
			scale : 1.4,
			width	: e.getBoundingClientRect().width ,
			height: e.getBoundingClientRect().height,
			slideCnt : cnt, currentIdx : (idx+curIdx)%props.test.length, el : el
		}})
	}
	

	


	return (
		<div className= {style.slide_comp}>
			<h2 className={style.title_container}>
				지금 뜨는 콘텐츠
				<div>
				</div>
				<div className={style.slideBar}>
					{slideConHover ? <SlideBar/> : null}
				</div>
			</h2>
			<div ref={slideContainer} className={style.slide_container}>
				<div className={style.slide_box}>
					<ul ref={ul} style={{width:`${ulwidth}%`,transform:`translateX(${move}%)`}}>
						{slideitem.map((el,idx)=>{
							return(
								<li style={{width:`${liwidth}%`}} className={style.slide_card} key={idx}>
									<div onMouseEnter={(e)=>{setTimer(setTimeout(()=>{loc(e.target,slideCnt,idx,el)},1000))}} 
											 onMouseLeave={()=>{clearTimeout(timer)}}
										className={style.img_wrapper}>
										<img className={style.slide_img} src={`./test/${el}`}/>
									</div>
								</li>
							)})}
					</ul>
					{props.test.length <= slideCnt ? null :<ArrowBox/>}
				</div>
			</div>
		</div>
	)
}

export default Slide