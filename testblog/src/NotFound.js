import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 Error : PAGE NOT FOUND !!!</h1>
      <Link to="/">Back to Home page</Link>
    </div>
  );
};

export default NotFound;
