import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Search from "./routes/Search";
import About from "./routes/About";
import Create from "./routes/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Search" element={<Search />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;