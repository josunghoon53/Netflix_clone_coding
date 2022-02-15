import reactDom from "react-dom";

const ModalPotal = ({children})=>{
	const el = document.getElementById('modal');
	return reactDom.createPortal(children,el)
}


export default ModalPotal;