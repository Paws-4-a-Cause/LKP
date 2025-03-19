import { useParams, Link } from "react-router-dom";
import cats from "../data/cats.json";
import "./CatProfile.css";

export default function CatProfile() {
  const { slug } = useParams();
  const cat = cats.find((c) => c.slug === slug);

  if (!cat) return <h1 className="not-found">Cat not found!</h1>;

  // Get correct paths for images
  const catImage = new URL(`../assets/cats/${cat.slug}.jpg`, import.meta.url).href;

  return (
    <div className="cat-profile">
      {/* Left Section - Background Color + Paws Image */}
      <div
        className="profile-left"
        style={{
          backgroundColor: cat.colour,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          backgroundSize: "100px",
        }}
      >
        <h1>{cat.name}</h1>
        <p className="bio">{cat.bio}</p>
      </div>

      {/* Right Section - Cat Image Background */}
      <div className="profile-right" style={{ backgroundImage: `url(${catImage})` }}>
        <div className="details-box">
          <p><strong>Age:</strong> {cat.age} years</p>
          <p><strong>Sex:</strong> {cat.sex}</p>
          <p><strong>FIV Status:</strong> {cat.FIV_status}</p>
          <p><strong>Likes:</strong> {cat.likes.join(", ")}</p>
          <p><strong>Dislikes:</strong> {cat.dislikes.join(", ")}</p>
          {/* <p className="quirks"><strong>Quirks:</strong> {cat.quirks}</p> */}
        </div>
      </div>

      <Link to="/cat-gallery" className="back-button">← Back to Cats</Link>
    </div>
  );
}






