import axios from "axios";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Post.css";

const Post = () => {
  console.log("post");
  const [selected, setSelected] = useState("image");
  const [info, setInfo] = useState({
    title: "",
    desc: "",
    image: "",
    video:""
  });
  // const [details,setDetails] = useState({title:"",desc:"",link:""})
  const history = useHistory();
  const handleChange = (e) => {
    // console.log('e.target', info.vlink)
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(info.title, info.desc, info.ilink,info.vlink);
    const datas = { title: info.title, decs: info.desc, img: info.image, video:info.video };
    const api = await axios.post(`http://localhost:5000/blogs`, datas);
    setInfo({
      title: "",
      desc: "",
      image: "",
      video:""
    });

    history.push("/");
    // console.log(api);
  };

  return (
    <div className="main">
      <h2 style={{ textAlign: "center" }}>Post Your Blogs</h2>
      {/* <form onClick={(e) => handleSubmit(e)} > */}
      <div className="inputs">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={info.title}
          placeholder="Title"
        />
        <br />
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          value={info.desc}
          placeholder="Description"
        />
        <br />
        <select onChange={(e) => setSelected(e.target.value)}>
          <option value="image">image</option>

          <option value="video">video</option>
        </select>
        {console.log("selected", selected)}
        {selected == "image" ? (
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={info.image}
            placeholder="Enter the image Link"
          />
        ) : (
          <input
            type="text"
            name="video"
            onChange={handleChange}
            value={info.video}
            placeholder="Enter the video Link"
          />
        )}
      </div>
      <div className="but">
        {info.title === "" || info.desc === "" || info.ilink === "" && info.vlink ? (
          <Button
            disabled
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </div>
      {/* </form> */}
    </div>
  );
};

export default Post;
