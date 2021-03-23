import React ,{useState}from 'react'

function Chacountertwit() {
  const [post, setPost] = useState("")

     function clickHandler(event){
         setPost(event.target.value);
         console.log(event.target.value);
     }


    return (
        <div>
            <h1>Character Counter</h1>
            <label style={{marginBottom:"1rem"}}>Write post</label> <br/>
            <textarea style={{marginBottom:"1rem"}} placeholder="post" maxLength="140" rows="5" cols="50" onChange={clickHandler}/>
            <div> Count:{post.length}/140</div>
        </div>
    )
}

export default Chacountertwit
