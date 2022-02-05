
import { useEffect, useRef, useState } from 'react';
import styles from  '../styles/Slide.module.scss';
function Slide() {

	const [licount,setlicount] = useState([1,2,3,4,5,6,3]);
	const [newli,setnewli] = useState([]);
	const [slideCnt,setslideCnt] = useState();
	const [liwidth,setliwidth] = useState();
	const [moslide,setmoslide] = useState(0);

	const [current,setcurrent] = useState(0)

	const [arrowbtn,setarrowbtn] = useState(false)
	let [slideOn,setslideon] = useState(0)

	const li = useRef();
	const ul = useRef();

	useEffect(()=>{
		resizeFuc();
		window.addEventListener('resize',resizeFuc);
		return ()=> window.removeEventListener('resize',resizeFuc);
	})

	useEffect(()=>{
		setnewli([...licount,...licount,...licount]);
	},[])

	
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


	}
	
	const moveslide = (move,dir) =>{
		if(slideOn === 0) {

			if(dir == 'right'){

			
				if(licount.length+current-slideCnt > slideCnt){
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
	




	return (
		<div className={styles.slide_comp}>
			<h2 onClick={()=>{console.log(current)}} className={styles.title_container}>
				<div>내가 찜한 컨텐츠</div>
			</h2>
	
			<div className={styles.slide_container}>
				<div className={styles.slide_box}>
					<ul ref={ul} style={{width:`${newli.length * liwidth}%`, transform:`translateX(${moslide}%`}}>
						{newli.map((el,idx)=>{
							return(
								<li ref={li} key={idx} style={{width:`${liwidth}%`}} className={styles.slide_card}>
									<div className={styles.img_wrapper}>
										<img src={`./img/test/test${el}.jpg`}/>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
				<div className={styles.arrow_box}>
					{arrowbtn === false ? null 
					:	<span onClick={()=>{
							moveslide(100/newli.length,'left')
							}} className={styles.left}>
							<img src='./img/left.png'/>
						</span>
					}
			
					<span onClick={(()=>{
						setarrowbtn(true)
						moveslide(-100/newli.length,'right')
					})}  className={styles.right}>
						<img src='./img/right.png'/>
					</span>		
				</div>
			</div>	
	
		</div>
		
	)
}				


export default Slide