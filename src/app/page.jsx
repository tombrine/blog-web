"use client";
import { useEffect, useState } from "react";
import BlogCard from "../components/card";
import HomeBtn from "@/components/home";

export default function Home() {
  const [productData, setProductData] = useState([]);
  const [count, setCount] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const fetchData = async () => {
    const webJSON = await fetch(
      `https://dev.to/api/articles?per_page=9&page=${count}`
    );
    const data = await webJSON.json();
    setProductData(data);
  };
  useEffect(() => {
    fetchData();
  }, [count]);

  const add = () => {
    setCount(count + 1);
  };

  const minuse = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };

  const filterdBlogs = productData.filter((name) => {
    const lowerCaseSearchValue = searchValue.toLocaleLowerCase();
    const lowerCaseBlogNames = name.title.toLocaleLowerCase();
    return lowerCaseBlogNames.includes(lowerCaseSearchValue);
  });
  // if (filterdBlogs.length === 0) return "not found";

  return (
    <HomeBtn>
      <div className="container">
        <div className="search">
          <input
            placeholder="Search here..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
          />
        </div>
        <p className="all_blog_post">All Blog Post</p>
        <div className="blogs">
          {filterdBlogs.length > 0 ? (
            filterdBlogs.map((data, index) => {
              return <BlogCard key={index} info={data} />;
            })
          ) : (
               <h1 className="error">Not found</h1>
          )}
        </div>
        {filterdBlogs.length > 0 ? (
          <div className="btns">
            <button className="left" onClick={minuse}>
              Go back
            </button>
            <p>{count}</p>
            <button className="right" onClick={add}>
              Next page
            </button>
          </div>
        ) : null}
      </div>
    </HomeBtn>
  );
}
