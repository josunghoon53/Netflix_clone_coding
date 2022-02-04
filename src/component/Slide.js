
import { useEffect, useRef, useState } from 'react';
import styles from  '../styles/Slide.module.scss';
function Slide() {

	const [licount,setlicount] = useState([1,2,3,4,5,6,3]);
	const [newli,setnewli] = useState([]);
	const [slideCnt,setslideCnt] = useState();
	const [liwidth,setliwidth] = useState();
	const [moslide,setmoslide] = useState(0);

	const [num,setnum] = useState(licount.length)

	const li = useRef();

	useEffect(()=>{
		resizeFuc();
		window.addEventListener('resize',resizeFuc);
		return ()=> window.removeEventListener('resize',resizeFuc);
	})

	useEffect(()=>{
		setnewli([...licount,...licount,...licount]);
	},[])

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
	


	const moveslide = (move) =>{

		if(move > 0 ) {
			

			
			if(num-slideCnt < slideCnt && num-slideCnt > 0){
				setmoslide(moslide => moslide+ (move*(num+slideCnt)))
				setnum(num+slideCnt)
			} else if(num-slideCnt < 0) {
				setmoslide(moslide => moslide+ (move*(num)))
				setnum(num)
			} else{
				setmoslide(moslide => moslide+ (move*(slideCnt)))
				setnum(num+slideCnt)
			}

		} else {

			if(num-slideCnt < slideCnt && num-slideCnt > 0){
				setmoslide(moslide => moslide+ (move*(num-slideCnt)))
				setnum(num-slideCnt)
			} else if(num-slideCnt < 0) {
				setmoslide(moslide => moslide+ (move*(slideCnt)))
				setnum(licount.length)
			} else{
				setmoslide(moslide => moslide+ (move*(slideCnt)))
				setnum(num-slideCnt)
			}
		}
	

	}
	
	return (
		<div className={styles.slide_comp}>
			<h2 className={styles.title_container}>
				<div>내가 찜한 컨텐츠</div>
			</h2>
			<div className={styles.slide_container}>
				<div className={styles.slide_box}>
					<ul style={{width:`${newli.length * liwidth}%`, transform:`translateX(${moslide}%`}}>
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
					<span onClick={()=>{
						moveslide(100/newli.length)
					}} className={styles.left}>
						<img src='./img/left.png'/>
					</span>
					<span onClick={(()=>{
						moveslide(-100/newli.length)
					})}  className={styles.right}>
						<img src='./img/right.png'/>
					</span>		
				</div>
			</div>	
		</div>
		
	)
}				


export default Slide