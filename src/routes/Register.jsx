import "./Register.css";
import registerBackground from "../assets/register.svg";
import { TbUserSquareRounded } from "react-icons/tb";
import { useState } from "react";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password
    }
  }

  return (
    <div className="register-container container">
      <form onSubmit={handleSubmit} className="register-form">
        <TbUserSquareRounded className="registerUserIcon" />
        <div className="input-container">
          <label>نام</label>
          <input type="text" onChange={(e) => setName(e.target.value)} name="name" />
        </div>
        <div className="input-container">
          <label>ایمیل</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" />
        </div>
        <div className="input-container">
          <label>رمز عبور</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" />
        </div>
        <button>ثبت نام</button>
      </form>
      <img src={registerBackground} alt="register_background" draggable="false" />
    </div>
  );
}