import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

export default function App() {
  const [posts, setposts] = useState([]);
  const [loading, setloading] = useState(false);
  const [pageNum, setpageNum] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      // https://reqres.in/api/users?page=1
      setloading(true);
      const url = `https://reqres.in/api/users?page=${pageNum}`;
      const res = await axios.get(url);
      const recievedData = res.data;
      setposts(recievedData.data);
      setloading(false);
    };
    fetchPosts();
  }, [pageNum]);

  const paginate = (number) => {
    setpageNum(number);
  };

  console.log(pageNum);
  console.log(posts);

  return (
    <div className="container mt-5">
      <h1>Excellence User's data</h1>
      <Posts posts={posts} loading={loading} />
      <Pagination paginate={paginate} />
    </div>
  );
}
