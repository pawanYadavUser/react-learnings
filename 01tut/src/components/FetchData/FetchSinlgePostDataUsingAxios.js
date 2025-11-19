import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchSinglePostDataUsingAxios() {
  const [post, setPost] = useState({});
  const [id, setId] = useState();
  const [buttonId, setButtonId] = useState();

  const handleClick = () => {
    setButtonId(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
      .then((res) => {
        console.log(`res : ${JSON.stringify(res.data)}`);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(`error: ${err.message}`);
      });
  }, [buttonId]);

  return (
    <div>
      <button onClick={() => handleClick()}>Fetch Post</button>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <p>{post.title}</p>
      <br />
    </div>
  );
}
