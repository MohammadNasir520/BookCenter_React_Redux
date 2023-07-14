import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>
        your destination is not exist{" "}
        <Link to={"/"}>
          {" "}
          <h1>Home</h1>{" "}
        </Link>{" "}
      </h1>
    </div>
  );
};

export default NotFound;
