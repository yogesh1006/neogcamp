import React,{useState} from 'react'

function ShowPassword() {

    const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  function ClickHandler() {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <h1>Show Password</h1>
      <input
        type={showPassword ? "" : "password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        minLength="6"
        maxLength="16"
      />
      <br />
      <button onClick={ClickHandler}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default ShowPassword
