import "./App.css";
import { useState, useEffect, createContext } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Contact } from "./Pages/Contact";
import { Nav } from "./Pages/Nav";
import { AppContext } from "./Pages/AppContext";
import { Profile } from "./Pages/Profile";

function App() {
  let [username, setUsername] = useState("");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
