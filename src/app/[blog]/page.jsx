"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HomeBtn from "@/components/home";

const Page = () => {
  const [productData, setProductData] = useState([]);
  const a = usePathname();
  console.log(a);
  const fetchData = async () => {
    const webJSON = await fetch(`https://dev.to/api/articles${a}`);
    const data = await webJSON.json();
    setProductData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (productData.length === 0) return "loading";
  console.log(productData);
  const users = productData.user;
  const name = users.name;
  const profile_image = users.profile_image;
  const published_date = productData.published_at;
  const splitedTime = published_date.split("T")[0];
  const reactions = productData.public_reactions_count;

  console.log(users);


  if (reactions === 0) null;

  return (
    <HomeBtn>
      <div>
        <div className="blog_infos">
          <img
            className="product_image"
            src={productData.social_image}
            alt=""
          />
          <div className="user_info">
            <img className="profile_image" src={profile_image} alt="" />
            <div>
              <p>{name}</p>
              <p>Posted in {splitedTime}</p>
            </div>
          </div>
          <p className="product_title">{productData.title}</p>
          <p className="product_description">{productData.description}</p>
          <p product_comment>comments: {productData.comments_count}</p>
          <p>people reactions: {reactions}</p>
        </div>
      </div>
    </HomeBtn>
  );
};
export default Page;
