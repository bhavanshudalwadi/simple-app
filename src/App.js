// Pass function as props

import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [titleMode, settitleMode] = useState('');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#041743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled.","success");
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  'hwb(222deg 10% 46%)');
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled.","success");
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#fff');
    }
  }

  const toggleTitle = () => {
    if(titleMode === 'Blinking') {
      settitleMode('');
      document.title = 'Simple React App | Developed By Bhavanshu Dalwadi';
    }else {
      settitleMode('Blinking');
      setInterval(() => {
        document.title = 'Simple React App';
      },2000)
      setInterval(() => {
        document.title = 'Developed by Bhavanshu Dalwadi';
      },1500)
    }
  }

  return (
    <BrowserRouter>
        <Navbar title="Simple React App" about="About Us" mode={mode} titleMode={titleMode} changeTitle={toggleTitle} changeMode={toggleMode}/>   {/* Passing function in props */}
        {/* <Navbar /> */}
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route index element={<TextForm showAlert={showAlert} heading="Enter text to check" mode={mode} />} />
            <Route path='about' element={<About mode={mode} />} />
          </Routes>

          {/* <TextForm showAlert={showAlert} heading="Enter text to check" mode={mode} />    Passing function in props */}
          {/* <About /> */}
        </div>
    </BrowserRouter>
  );
}

export default App;