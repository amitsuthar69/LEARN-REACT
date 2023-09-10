import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-green-500 text-2xl">Home Page</h1>
      <Link className="text-violet-500" to="/">
        This is a link to Home page
      </Link>
      <Link to="/about">
        <button className="block bg-red-400 rounded-lg p-2 text-white">
          A Button to about page
        </button>
      </Link>
    </div>
  );
};

export default Home;
