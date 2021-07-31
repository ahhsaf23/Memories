import './singlePost.css';
import singlePostImg from '../../assets/singlePostImg.jpg';
export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={singlePostImg} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i class="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Ahshaf</b> </span>
                    <span className="singlePostDate">1 hour ago </span>
                </div>
                <p className="singlePostDes">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero corporis maxime reprehenderit distinctio sed laboriosam animi ipsam nobis autem, aliquid nesciunt sapiente provident quos praesentium! Et mollitia suscipit quos minus commodi incidunt autem asperiores officiis obcaecati beatae adipisci nostrum magnam aspernatur voluptatem libero minima, voluptatum architecto veniam soluta molestiae voluptas quis, tenetur fugiat impedit! Adipisci consequuntur excepturi incidunt autem nostrum aliquam consectetur est id quasi earum rerum dicta exercitationem molestias, illo esse mollitia dolorem, suscipit magnam animi voluptatem pariatur perferendis. Sed qui facere enim laborum accusamus error dolorum, aliquid, eos aliquam, nihil quam natus provident sunt optio! Ratione, cupiditate?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perspiciatis modi sed perferendis! Deserunt repellat quas molestiae distinctio dolorem amet sequi, illum sapiente pariatur molestias, nulla accusamus odio quasi eveniet voluptatibus id harum aliquid voluptate nemo ipsa recusandae fugit perferendis neque animi? Corporis minima commodi exercitationem voluptas, iure sapiente repellendus modi pariatur consequatur quidem fuga ipsum illum earum doloremque quibusdam quasi aliquam ipsa illo nam quam officia impedit tenetur porro quis! Suscipit animi magnam deleniti reprehenderit perspiciatis nemo, laboriosam sint dignissimos dolores mollitia enim velit saepe voluptatum assumenda possimus nam, voluptatem cupiditate provident similique tenetur iste aspernatur ex earum! Similique.
                </p>
            </div>
        </div>
    )
}
