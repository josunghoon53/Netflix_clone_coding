import {useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import ModalPotal from '../Portal';
import styles from '../styles/Detailcard.module.scss'


function DetailCard (props) {

	

	const background = useRef();
	const navigate = useNavigate();

	const outclick = (e)=>{
		console.log(e)
		if(e == background.current){
			navigate('/Main');
		}
	}

  useEffect(() => {
    document.body.style.cssText = `
      overflow: hidden`;
    return () => {
      document.body.style.cssText = '';
    };
  }, []);

	return(
		<ModalPotal>
			<div ref={background} onClick={(e)=>{outclick(e.target)}} className={styles.background}>
				<div className={styles.box}>123</div>
			</div>
		</ModalPotal>
		
		
	)
}


export default DetailCard