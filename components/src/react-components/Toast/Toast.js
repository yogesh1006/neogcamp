import React ,{useState} from "react"
import Success from "./Toasts/Success"
import Warning from "./Toasts/Warning"
import Error from "./Toasts/Error"


function Toast(){
    const [toast,settoast]=useState("none")
    const [hide,setHide]=useState("block")



   let showToast=()=>{
          settoast("block")
          setHide("none")
   }


 let hideToast=()=>{
    settoast("none")
    setHide("block")
 }
    return(
    <div>
        <h1>Toast</h1>
        <div style={{width:"300px" ,border:"1px solid black",padding:"1rem",borderRadius:"5px"}}>
            <div style={{display:toast}}>
                <p >Hi this is toast</p>
                <button onClick={hideToast}>Hide Toast</button>
            </div>
            <button style={{display:hide}} onClick={showToast}>Show Toast</button>
            
        </div>
        <Success />
        <Warning />
        <Error />
    </div>
    )
}

export default Toast