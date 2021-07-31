import './post.css';
import postImg from '../../assets/postImg.jpg'

export default function Post() {
    return (
        <div className="post"> 
            <img src={postImg} alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago </span>
            </div>
            <p className="postDes">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam deserunt dolor dolore inventore quibusdam, repellendus id odit ipsam nobis iusto reprehenderit reiciendis voluptatum quas optio nesciunt dicta aut harum quis aspernatur repudiandae? Placeat optio iste laudantium, numquam, architecto praesentium corporis ipsam, fuga nulla rem omnis. Sint debitis voluptate quos quam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam deserunt dolor dolore inventore quibusdam, repellendus id odit ipsam nobis iusto reprehenderit reiciendis voluptatum quas optio nesciunt dicta aut harum quis aspernatur repudiandae? Placeat optio iste laudantium, numquam, architecto praesentium corporis ipsam, fuga nulla rem omnis. Sint debitis voluptate quos quam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam deserunt dolor dolore inventore quibusdam, repellendus id odit ipsam nobis iusto reprehenderit reiciendis voluptatum quas optio nesciunt dicta aut harum quis aspernatur repudiandae? Placeat optio iste laudantium, numquam, architecto praesentium corporis ipsam, fuga nulla rem omnis. Sint debitis voluptate quos quam.</p>
        </div> 
    )
}
