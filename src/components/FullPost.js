import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullPost = () => {
  const { id } = useParams();
  const [hash, setHash] = useState();
  const [titles,setTitles] = useState();
  const [desc,setDesc] = useState();
  const [vid,setVid] = useState()
  const data = async () => {
    const api = await axios.get(`http://localhost:5000/blogs/${id}`);
    console.log("hash", api.data);
    setHash(api.data.img);
    setVid(api.data.video);
    setTitles(api.data.title);
    setDesc(api.data.decs)
  };

  useEffect(() => {
    data();
  }, []);
  return <div className="full-post">
      <div>
        {hash==""?
        <iframe src={vid}/>:
        // <video controls autoPlay src={vid} />:
          <img style={{width: "80%",marginLeft:"171px"}} src={hash} />
        }
      </div>
      <div style={{textAlign:"center"}}>
          <h2>{titles}</h2>
      </div>
      <div style={{marginLeft:"177px"}}>
          <p>{desc}</p>
      </div>
  </div>;
};

export default FullPost;
