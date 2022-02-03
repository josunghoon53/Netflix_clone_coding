
import { useEffect, useRef, useState } from 'react';
import styles from  '../styles/Slide.module.scss';
function Slide() {

	const [licount,setlicount] = useState([1,2,3,4,5,6,3]);
	const [slideCnt,setslideCnt] = useState()

	const [liwidth,setliwidth] = useState()

	const slide_box = useRef();

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

	}


	return (
		<div className={styles.slide_comp}>
			<h2 className={styles.title_container}>
				<div>내가 찜한 컨텐츠</div>
			</h2>
			<div className={styles.slide_container}>
				<div ref={slide_box} className={styles.slide_box}>
					<ul style={{width:`${licount.length * liwidth}%`}}>
						{licount.map((el,idx)=>{
							return(
								<li key={idx} style={{width:`${liwidth}%`}} className={styles.slide_card}>
									<div className={styles.img_wrapper}>
										<img src={`./img/test/test${el}.jpg`}/>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
				<span className={styles.left}>
					<img src='./img/left.png'/>
				</span>
				<span className={styles.right}>
					<img src='./img/right.png'/>
				</span>		
			</div>	
		</div>
		
	)
}				


export default Slide