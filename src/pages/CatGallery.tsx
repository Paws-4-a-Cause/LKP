import { Link } from "react-router-dom";
import cats from "../data/cats.json"; // Import cat data
import "./CatGallery.css"; // Import CSS file

export default function CatGallery() {
  return (
    <div className="cat-gallery">
      <h1>🐱 Meet Our Cats</h1>
      <div className="cat-list">
        {cats.map((cat) => (
          <div key={cat.slug} className="cat-card">
            <h3>{cat.name}</h3>
            <Link to={`/cats/${cat.slug}`} className="cat-link">View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
}



