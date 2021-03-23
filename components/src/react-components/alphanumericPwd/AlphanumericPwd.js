import {useState} from 'react'
function InputForm() {
    const [password, setPassword] = useState("");
  
    function checkPassword() {
      if (password !== "") {
        if (
          /^([a-zA-Z0-9])+$/.test(password) &&
          /[0-9]+/.test(password) &&
          /[a-zA-Z]+/.test(password)
        ) {
          return "strong password";
        }
        return "please include at least one number and alphabets";
      }
    }
    return (
      <div>
        <input
          value={password}
          placeholder="Enter password"
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>{checkPassword()}</div>
      </div>
    );
  }
  
   function AlphanumericPwd() {
    return (
      <div>
        <h1>Reset Password</h1>
        <InputForm />
      </div>
    );
  }

  export default AlphanumericPwd