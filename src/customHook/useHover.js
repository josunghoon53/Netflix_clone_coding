import { useEffect, useRef, useState } from "react"

export const useHover = (hoverFuc) =>{

  const [value, setValue] = useState(false);

  const element = useRef();

	//ref를 통해 dom 접근시 범위안쪽일때 true 바깥쪽은 false
  const handleMouseEnter = () => setValue(true);
  const handleMouseLeave = () => setValue(false);

	useEffect(()=>{

		const node = element.current;
		if (node) {
			node.addEventListener('mouseenter', handleMouseEnter);
			node.addEventListener('mouseleave', handleMouseLeave);

			return () => {
				node.removeEventListener('mouseenter', handleMouseEnter);
				node.removeEventListener('mouseleave', handleMouseLeave);
			};
		}

	},[element.current])

  
	return [element, value];

}
