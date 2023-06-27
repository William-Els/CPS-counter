
import "./App.css"
import { render } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import { useState } from 'react';
import "./mystyles.css"


function App() {
  const [disabled, setDisabled] = useState(false);
  const CLICK = () => {
    setNumber(num + 1)
    setDisabled(false); setTimeout(() => { setDisabled(true) }, 5000);}
  const [num, setNumber] = useState(0)
  return (
<div className="App">
  

      <div className="clicks">{num} Clicks</div> 
      <button onClick={CLICK} disabled={disabled} className="btn">CLICK</button>
     <div className="average">Average CPS:</div>
      <div className="cps">{num/5}CPS</div>
      <div className="idk">ㅤ</div>
     
    </div>
  );
};

export default App;
