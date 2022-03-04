import style from '../style/Main.module.scss';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Jumbo from '../component/Jumbo';
import Slide from '../component/Slide';

const Main = ()=>{



	return(
		<div className={style.Main}>
			<div className={style.contentWrap}>
				<Header/>
				<section>
					<Jumbo/>
					<div className={style.content}>
						<Slide/>

					</div>
				</section>
			</div>
			<Footer/>
		</div>
	)
}


export default Main