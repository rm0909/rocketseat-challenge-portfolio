import { FcLike } from "react-icons/fc";
import { FaComments } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";


function BlogsContainer({postsArray}) {
 
  return (
    <section>
      
        {postsArray.map((post) => {
          return (
            <div className="blog-container cards" key={post.id}>

              <div>
                <BsCalendarDate /> publicado em: {post.readable_publish_date}
              </div>
              <div className="image-parent">
                <a href={post.url} target="_blank"><img src={post.social_image} alt="post image" /></a>

                <div className="blog-reactions">
                  <div>
                    <FaComments />{post.comments_count}
                  </div>
                  <div>
                    <FcLike /> {post.positive_reactions_count}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
}
export { BlogsContainer };
