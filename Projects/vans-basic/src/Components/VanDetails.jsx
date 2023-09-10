// This component will be rendering data based on the params passed to /:id
// we'll learn useParams hook to grab the param value from URL

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
  const [van, setVan] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      /* ${params.id} is the grabbed param form URL and 
      then this value is used as a  param for nested route eg: /api/vans/1 */
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  // console.log(params); we can see {id: "1"} if we clicked on first van box
  return (
    <div className="flex flex-col items-center justify-center">
      {van ? (
        <div className="van-detail">
          <img width="20%" src={van.imageUrl} alt="van-image" />
          <h2 className="text-2xl font-bold">{van.name}</h2>
          <p className="w-1/2">{van.description}</p>
          <button className="link-button p-1 px-2 text-white bg-purple-500 rounded-md">
            Rent this van
          </button>
        </div>
      ) : (
        <h2 className="text-xl text-green-500">Loading...</h2>
      )}
    </div>
  );
};

export default VanDetails;
