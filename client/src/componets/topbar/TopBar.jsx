import "./topbar.css"
import {Link} from "react-router-dom";
import topImg from '../../assets/img123.jpg'

export default function TopBar() {
    const user=true;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-snapchat-square"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">Home</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
                    <li className="topListItem"><Link className="link" to="/settings">Setting</Link></li>
                    <li className="topListItem"><Link className="link" to="/">About</Link></li>
                    <li className="topListItem"><Link className="link" to="/">Contact</Link></li>
                    <li className="topListItem">
                     {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
            {user?(
                <img className="topImg" src={topImg} alt="" />
                ):(
                    <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/login">Login</Link></li>
                        <li className="topListItem"><Link className="link" to="/register">Register</Link></li>
                    </ul>
                )
            }
                <i class="topIconSearch fas fa-search"></i>
            </div>

        </div>
    )
}
