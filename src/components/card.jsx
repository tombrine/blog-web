import { useRouter } from "next/navigation";

const BlogCard = ({ info }) => {
  const {
    description,
    social_image,
    user,
    published_at,
    flare_tag,
    title,
    id,
  } = info;
  const name = user.name;
  const profile_image = user.profile_image_90;
  const splitedTime = published_at.split("T")[0];
  const router = useRouter();
  const retrited = () => {
    router.push(`${id}`);
  };

  return (
    <div className="blog_card" onClick={() => retrited()}>
      <img src={social_image} alt="" />
      {/* {flare_tag && <div className="flare_tag">{flare_tag.name}</div>} */}
      <p className="flare_tag">Technology</p>
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <div className="user_date">
        <img className="profile_image" src={profile_image} alt="" />
        <p>{name}</p>
        <p>{splitedTime}</p>
      </div>
    </div>
  );
};

export default BlogCard;
