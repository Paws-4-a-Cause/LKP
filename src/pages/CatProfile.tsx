import { useParams, Link } from "react-router-dom";
import cats from "../data/cats.json";
import "./CatProfile.css";
import paws from "@/assets/paws.png";
import { Button } from "@/components/ui/button";

export default function CatProfile() {
  const { slug } = useParams();
  const cat = cats.find((c) => c.slug === slug);
  if (!cat) return <h1 className="not-found">Cat not found!</h1>;

  const catImage = new URL(`../assets/cats/${cat.slug}.jpg`, import.meta.url)
    .href;

  return (
    <div className="cat-profile">
      {/* Left Section */}
      <div className="profile-left">
        <div className="name-with-paws">
          <img src={paws} alt="paws icon" className="paws-icon" />
          <h1 className="cat-name">{cat.name.toUpperCase()}</h1>
        </div>
        <p className="bio">{cat.bio}</p>
              <div className="mt-6">
        <Link to="/cat-gallery">
          <Button
            variant="outline"
            className="bg-[#67BAA7] hover:bg-[#67BAA7] text-white"
          >
            ← Back to Our Cats
          </Button>
        </Link>
      </div>
      </div>

      {/* Right Section */}
      <div
        className="profile-right"
        style={{ backgroundImage: `url(${catImage})` }}
      >
        <div className="details-box">
          <p>
            <strong>Age:</strong> {cat.age} years
          </p>
          <p>
            <strong>Sex:</strong> {cat.sex}
          </p>
          <p>
            <strong>FIV Status:</strong> {cat.FIV_status}
          </p>
          <p>
            <strong>Likes:</strong> {cat.likes.join(", ")}
          </p>
          <p>
            <strong>Dislikes:</strong> {cat.dislikes.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
