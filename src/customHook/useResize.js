import { useEffect, useState } from "react"


export const useResize = () =>{

	const [state,setState] = useState({
		w : window.innerWidth,
		h : window.innerHeight
	});

	const resizeFuc = () =>{

		setState({
			w : window.innerWidth,
			h : window.innerHeight
		});
	}

	useEffect(()=>{
		window.addEventListener('resize',resizeFuc);
		return () => window.removeEventListener('resize',resizeFuc);
	},[])


	return state

}