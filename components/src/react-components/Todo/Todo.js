import React ,{useState} from "react"

function Todo(){
    const [task,setTask]=useState([])
    const [item ,setItem]=useState("")
    // const [abc,setAbc]=useState("none")

    let handler=(e)=>{
       setItem(e.target.value);
       console.log(item);
    }
    let clickHandler=()=>{
         setTask([...task,item])     
    }

    let lineThrough=(e)=>{
        // setAbc("line-through")
        // if(e.target.style.textDecoration=="line-through"){
        //     e.target.style.textDecoration="none"
        // }else{
        //     e.target.style.textDecoration="line-through"
        // }
        e.target.style.textDecoration=="line-through" ? e.target.style.textDecoration="none"
        : e.target.style.textDecoration="line-through"


        
    }
    return(
       <div>
           <h1>Todo App</h1>
           <input id="item" onChange={handler}/>
           <button onClick={clickHandler}>Add Item</button>
          <ul>{task.map((ta,index)=>{
               return <li onClick={lineThrough} key={index}>
                     {ta}
                    </li>
           })}
           </ul> 
       </div>

    )
}

export default Todo