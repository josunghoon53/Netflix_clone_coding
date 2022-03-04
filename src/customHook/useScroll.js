import { useEffect, useState } from "react"


export const useScroll = () =>{
	const [state,setState] = useState({
		x : 0,
		y : 0,
	})

	const scrollFuc = () =>{
		setState({
			x : window.scrollX,
			y : window.scrollY
		})
	}

	useEffect(()=>{
		window.addEventListener('scroll',scrollFuc);
		return ()=> window.removeEventListener('scroll',scrollFuc);
	},[])


	return state;
	
}