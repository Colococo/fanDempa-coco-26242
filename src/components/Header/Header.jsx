import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = ()=> {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>
                    <img src={logo} alt="logo empanada" />
                    <span>Since 1920</span>
                </Link>
            </div>
            <Nav />
        </header>
    )
}