import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans") // making an api request to server.js
      .then((res) => res.json()) // converting the data to executable json
      .then((data) => setVans(data.vans)); // getting the data from json and storing it into a state as an array
  }, []);

  // mapping over data from server
  const vanElement = vans.map((van) => (
    <div className="card mt-8" key={van.id}>
      {/* each van had a unqiue id prop so we can use it to redirect on /:id == /{vans.id} */}
      <Link to={`/vans/${van.id}`}>
        <img
          className="rounded-md"
          width="50%"
          src={van.imageUrl}
          alt="van-image"
        />
        <div className="van-info">
          <h3 className="font-bold text-lg">{van.name}</h3>
          <p className="mb-2">
            ${van.price}
            <span>/days</span>
          </p>
          <i
            className={`van-type ${van.type} bg-red-500 text-white p-1 rounded-md selected`}>
            {van.type}
          </i>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <h1 className="text-red-500 text-3xl">Here comes the vans</h1>
      <div className="grid grid-cols-3 mx-8">{vanElement}</div>
    </>
  );
};

export default Vans;
