import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Card";
import "./Home.css";

const Home = () => {
  console.log("home");
  const [val, setVal] = useState([]);

  const fetch = async () => {
    const data = await axios.get("http://localhost:5000/blogs");
    console.log("data", data.data);
    setVal(data.data);
  };
  console.log("val", val);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="hm">
      {val.map((res) => {
        return (
          <Cards
            key={res.id}
            title={res.title}
            desc={res.decs}
            img={res.img}
            price={res.price}
            video={res.video}
            id={res.id}
          />
        );
      })}
    </div>
  );
};

export default Home;
