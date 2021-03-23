import "./App.css";
import AgeChecker from "./react-components/AgeChecker/Agechecker";
import Passwordmatcher from "./react-components/pwdmatcher/Passwordmatcher";
import Counter from "./react-components/counter/Counter";
import Chacountertwit from "./react-components/charCounter/Chacountertwit";
import AlphanumericPwd from "./react-components/alphanumericPwd/AlphanumericPwd";

import ShowPassword from "./react-components/showpwd/ShowPassword";
import Figma from "./react-components/figma/Figma";
import AddToCart from './react-components/addtocart/AddToCart'
import SwitchTabs from './react-components/switchTabs/SwitchTabs';
import Toast from "./react-components/Toast/Toast";
import Todo from './react-components/Todo/Todo'
import ToggleDarkMode from './react-components/darkmode/ToggleDarkMode';
import Likes from "./react-components/likelist/Likes";


function App() {
  return (
    <div className="App">
      <AgeChecker />
      <hr />
      <Passwordmatcher />
      <hr />

      <Counter />
      <hr />

      <Chacountertwit />
      <hr />

      <AlphanumericPwd />
      <hr />

      <ShowPassword />
      <hr />

      <Figma />
      <hr />
      <AddToCart />
      <hr />
      <SwitchTabs />
      <hr/>
      <Toast />
      <hr/>
      <Todo />
      <hr/>
      <ToggleDarkMode/>
      <hr/>
      <Likes />
      <hr />
    </div>
  );
}

export default App;
