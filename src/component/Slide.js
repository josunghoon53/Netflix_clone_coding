
import { useEffect, useRef, useState } from 'react';
import styles from  '../styles/Slide.module.scss';
function Slide() {

	const width  = useRef();
	




	return (
		<div>
			<div ref={width} className={styles.slide_container}>
				<div className={styles.arrow_left}>{`<`}</div>
				<div className={styles.arrow_right}>{`>`}</div>
				<div className={styles.slideBox}>
					<ul className={styles.slides}>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
					</ul>
				</div>
			</div>
		</div>
	)
}				


export default Slide