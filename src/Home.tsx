import React, { useEffect } from "react";
import "./_mock/index";
import axios from "axios";

function Home() {
  useEffect(() => {
    //使用fetch发送请求无法被mockjs拦截，改用axios
    // fetch("/api/test")
    //   .then((res) => res.json())
    //   .then((data) => console.log("fetch data", data));

    //使用axios
    axios.get("api/test").then((res) => console.log(res.data));
  }, []);
  return <div>Home</div>;
}

export default Home;
