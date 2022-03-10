import { useState } from "react"
import FullModal from "../component/FullModal";
import Modal from "../component/Modal"
import Main from "./Main"

const App  = ()=>{

  const [modal,setModal] = useState(false);
  const [test,settest] = 
	useState(['test1','test2','test3','test4','test5'])

  const [data,setData] = useState();

  return(
    <>
      <Main setModal = {setModal}  test={test} setData={setData}/>
      {modal ? <Modal data= {data} modal = {modal} setModal = {setModal} test={test}/> : null} 
    </>
  )
}

export default App