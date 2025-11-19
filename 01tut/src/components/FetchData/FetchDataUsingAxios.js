import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchDataUsingAxios() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(`res : ${JSON.stringify(res.data)}`);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(`error: ${err.message}`);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((ele) => (
          <li key={ele.id}>{ele.title}</li>
        ))}
      </ul>
    </div>
  );
}
