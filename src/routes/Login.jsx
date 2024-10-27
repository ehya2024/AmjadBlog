import "./Login.css";
import loginBackground from "../assets/login.svg";
import { TbUserSquareRounded } from "react-icons/tb";

export default function Login() {
  return (
    <div className="login-container container">
      <form className="login-form">
        <TbUserSquareRounded className="loginUserIcon" />
        <div className="input-container">
          <label>ایمیل</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>رمز عبور</label>
          <input type="password" />
        </div>
        <button>ورود</button>
      </form>
      <img src={loginBackground} alt="login_background" draggable="false" />
    </div>
  );
}