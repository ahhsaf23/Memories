import './header.css';
import headerImg from '../../assets/headerImg.jpg'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">Let's create Memories</span>
                <span className="headerTitleLg">Welcome</span>
            </div>
            <img src={headerImg} alt="" className="headerImg" />
        </div>
    )
}
