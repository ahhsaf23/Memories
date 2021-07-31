import './write.css';
import writeImg from "../../assets/singlePostImg.jpg"

export default function Write() {
    return (
        <div className="write">
            <img src={writeImg} alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
                </div>
                <div className="writeFormGroup">
                    <textarea placeHolder="Tell your Memeory" type="text" className="writeInput writeText"></textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
    )
}
