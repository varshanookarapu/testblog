import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs" + blog.id, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading ....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <h3>Written by {blog.author}</h3>
          <p>{blog.body}</p>
          <button onClick={handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
