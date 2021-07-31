import './setting.css'
import Sidebar from '../../componets/sidebar/Sidebar'
import profileImg from '../../assets/img123.jpg'

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account.</span>
                    <span className="settingDeleteTitle">Delete Your Account.</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src={profileImg} alt="" className="settingProfileImg" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>
                    </div>
                    <label>User Name</label>
                    <input type="text" placeHolder="Ahshaf"></input>
                    <label>Email</label>
                    <input type="email" placeHolder="ahhsaf23@gmail.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
