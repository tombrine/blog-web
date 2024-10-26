"use client";
import { useRouter } from "next/navigation";

const HomeBtn = ({ children }) => {
  const router = useRouter();
  const retrited = () => {
    router.back();
  };
  return (
    <div>
      <div className="header">
        <p onClick={() => retrited()} className="home_btn">
          Home
        </p>
        <div onClick={() => router.push("create_blog")} className="create_post">
          Create Blog
        </div>
      </div>
      {children}
    </div>
  );
};

export default HomeBtn;
