import { useState } from "react"
import FullModal from "../component/FullModal";
import Modal from "../component/Modal"
import Main from "./Main"

const App  = ()=>{

  const [modal,setModal] = useState(false);
  const [full,setFull] = useState(false);
  
  const [test,settest] = 
	useState(['test1.jpg','test2.jpg','test3.jpg','test4.jpg','test5.jpg','test6.jpg','test3.jpg'])

  return(
    <>
      <Main  test={test}/>
      <Modal test={test}/> 
    </>
  )
}

export default App