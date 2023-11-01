import { useState } from 'react'
import './App.css'

let onButton = './public/on.svg'
let offButton = './public/off.svg'

function App() {
  const [isOn, setIsOn] = useState(true);

  const changeImage = () => {
    setIsOn((previous) => !previous);
  }

  return (
    <>
    <div>
     <img src={isOn ? onButton : offButton} onClick={changeImage} />
    </div>
    </>
  );
}

export default App
