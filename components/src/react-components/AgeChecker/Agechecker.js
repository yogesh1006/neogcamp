import React, { useState } from 'react'

function Agechecker() {

    const [age,setAge]=useState();

    function handler() {
       if(age === undefined){
         alert("Please enter valid age");
       }else if(age > 18){
          alert("Your are eligible to login.");
       }else{
         alert("You are not eligible to login");
       }
      }
    
      function eventHandler(event) {
        setAge(event.target.value);

        console.log(event.target.value);
      }

    return (
    <div>
      <div>
        <h1>Age Checker</h1>
        <input
          onChange={eventHandler}
          placeholder="Enter Your Age"
          type="number"
          // value="blbl"
          // onFocus="value=''"
          defaultValue="reset"
          title="Age"
        />
        <br/>
        <button style={{marginTop:"1rem"}} onClick={handler}>
          Check Your Age
        </button>
      </div>
    </div>
    )
}

export default Agechecker
