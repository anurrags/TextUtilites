import "./App.css";
import Navbar from "./components/navbar";
import Textarea from "./components/textarea";
import About from "./components/About.js";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, changeMode] = useState("light");

  const [alertMsg, setAlertMsg] = useState(null);
  const showAlert = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => {
      setAlertMsg(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      showAlert("Changed to Dark Mode");
      changeMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      showAlert("Changed to Light Mode");
      changeMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alertMsg} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Textarea
                  heading="Enter your text below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
