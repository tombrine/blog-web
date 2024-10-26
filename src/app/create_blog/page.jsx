"use client";
import HomeBtn from "@/components/home";
import { useState } from "react";

const Create_blog = () => {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [titleError, setTitleError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);

  const publish_btn = () => {
    if (titleValue === "" && descriptionValue === "") {
      setTitleError("Title is required for blog");
      setDescriptionError("Description is required for blog");
    }
     else if (titleValue === "" && descriptionValue) {
      setTitleError("Title is required for blog");
    }
     else if (descriptionValue === "" && titleValue) {
      setDescriptionError("Description is required for blog");
    }
     else if (titleValue && descriptionValue) {
      setDescriptionError(null);
      setTitleError(null);
      alert("Mission complete");
    }
  };

  return (
    <HomeBtn>
      <div className="create_blog">
        <div className="column">
          <div className="inputs">
            <input
              value={titleValue}
              onChange={(e) => setTitleValue(e.target.value)}
              type="text"
              placeholder="Write your blog title here..."
            />
            <div style={{ color: "red", margin: "10px" }}>
              {titleError ? titleError : ""}
            </div>
            <input
              value={descriptionValue}
              onChange={(e) => setDescriptionValue(e.target.value)}
              type="text"
              placeholder="Write your blog description..."
            />
            <div style={{ color: "red", margin: "10px" }}>
              {descriptionError ? descriptionError : ""}
            </div>
          </div>
          <div onClick={() =>publish_btn()} className="publish_btn">
            Publish
          </div>
        </div>
      </div>
    </HomeBtn>
  );
};

export default Create_blog;
