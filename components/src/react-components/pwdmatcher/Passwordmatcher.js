import React ,{useState} from 'react'

function Passwordmatcher() {

    const [password, setPassword] = useState();
    const [confirmPassword,setConfirmPassword]=useState();

    return (
        <div>
        <h1>Password Checker</h1>
        <form>
       <label htmlFor="password">
         Password:
       <input
          id="password"
          type="password"
          style={{ marginTop: "1rem" }}
          onChange={(event) => {
            setPassword(event.target.value)
            // console.log();
          }}
          placeholder="Enter Your 1st password"
        />
       </label>
         <br/>
        <label htmlFor="cpassword">
        Confirm Password:
        <input
          id="passwordtwo"
          style={{ marginTop: "1rem" }}
          type="password"
          placeholder="Enter Your 1st password"
          onChange={(event) => {
            setConfirmPassword(event.target.value)
          }}
        />
        </label>
         <br/>
        <button
           disabled={confirmPassword !== password}
          style={{ marginTop: "1rem" }}
          onClick={() => {
            if (confirmPassword == password) {
              console.log(password);
              alert("password is matched");
            } else {
              alert("password does not match");
            }
          }}
        >
          Check Password
        </button>
    </form>
      </div>
    )
}

export default Passwordmatcher
