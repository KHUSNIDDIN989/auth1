import React, { useEffect, useState } from "react";
import { get } from "../utils/api";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const post = await get("getpost");

      setData(post.data.data);
    })();
  }, []);
    console.log(data);
    
    return (
      <div className=" w-50 h-50">
        {data.map((e) => (
          <div className="bg" key={e.user_name}>
            <p>{e.user_name}</p>
          </div>
        ))}
      </div>
    );
};
