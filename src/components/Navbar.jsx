import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FcHome } from "react-icons/fc";

export default function Navbar() {

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/Login");
  }

  return (
    <nav className="navbar">
        <div className="container">
            <ul>
                <li><NavLink to="/"><FcHome className="homeIcon" /></NavLink></li>
                <li><NavLink to="/Search">جستجو</NavLink></li>
                <li><NavLink to="/Login">ورود</NavLink></li>
                <li><NavLink to="/Register">ثبت نام</NavLink></li>
                <li><NavLink to="/Create">افزودن پست</NavLink></li>
                <li><button onClick={logout}
                 style={{cursor: "pointer", backgroundColor: "transparent", border: "none", color: "gainsboro"}}
                >خروج</button></li>
                <li><NavLink to="/About">درباره ی ما</NavLink></li>
            </ul>
            <h3>AmjadBlog</h3>
        </div>
    </nav>
  );
}