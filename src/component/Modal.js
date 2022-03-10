import clsx from "clsx";
import { useEffect, useRef, useState} from "react";
import {useSelector } from "react-redux";
import style from '../style/Modal.module.scss';
import VideoJS from "./VideoJS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeDown, faVolumeHigh, faVolumeLow, faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) =>{

	const coordi = useSelector(state => state.coordi);
	const Modal = useRef();
	const playerRef = useRef(null);
	const [mute,setMute] = useState(false)

  const videoJsOptions = { // lookup the options in the docs for more options
		autoplay:true,
    controls: false,
    responsive: true,
		muted:true,
    fluid: true,
    sources: [{
      src: `./vv/${props.data}.mp4`,
      type: 'video/mp4'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;


    // you can handle player events here
    player.on('waiting', () => {
      console.log('player is waiting');
    });
    player.on('dispose', () => {
      console.log('player will dispose');
    });
	}





	/*모달창 style 지정  */
	useEffect(()=>{
		Modal.current.style.cssText = `
			transform : scale(${coordi.scale});
			position : absolute;
			top : ${coordi.top}px;
			left : ${coordi.left}px;
			width : ${coordi.width}px;
			height : ${coordi.height*1.8}px`;

			if(coordi.currentIdx === 0) Modal.current.style.transformOrigin = '0% 120%'
			else if(coordi.currentIdx === coordi.slideCnt-1) Modal.current.style.transformOrigin = '100% 120%'
			else  Modal.current.style.transformOrigin = '50% 120%'		

	})

  /*모달창 leave이벤트, 창 resize이벤트*/
	useEffect(()=>{
		Modal.current.addEventListener('mouseleave',LeaveFuc);
		window.addEventListener('resize',resizeFuc);
	},[])

	/*resize이벤트 발생시 모달 끄기*/
	const resizeFuc = () =>{
		props.setModal(false)
	}
	
	/*leave이벤트 발생시 페이드아웃 애니메이션 적용 후 모달값 전환*/
	const LeaveFuc = () =>{
		Modal.current.classList.add(style.fadeout)
		Modal.current.style.transform = null;
		setTimeout(()=>{props.setModal(false)},300)
	}




	return(
		<div className={clsx(style.modal_container, props.modal? style.fadein : null)} ref={Modal}>
			<div className={style.modal_imgwrapper}>
			
				<div className={style.videowrapper}>
					<VideoJS options={videoJsOptions} onReady={handlePlayerReady}/>
					<div onClick={()=>{setMute(!mute) || playerRef.current.muted(mute)}} className={style.button}>
						<FontAwesomeIcon className={style.icon} icon={mute ? faVolumeLow : faVolumeMute} />
					</div>
				</div>

			
			</div>
			<div>
			</div>
		</div>
	)
}

export default Modal;