import { Link, useNavigate } from "react-router-dom";
import cats from "../data/cats.json"; // Import cat data
import "./CatGallery.css"; // Import CSS file
import { Button } from "@/components/ui/button";

export default function CatGallery() {
  const navigate = useNavigate();
  return (
    <div className="cat-gallery">
      <div className="cat-gallery-header">
      <h1> 
      🐾 
        Meet Our Cats</h1>
      <p className="cat-gallery-description">
      To support our cats, we rely on donations to
keep the cattery running. Our beloved team
of Cat Angels are our monthly donors. Their
generosity goes a long way, providing for food
and medical care for their chosen cats.
      </p>
      <Button className="bg-[rgba(239,121,115,1)] hover:bg-[rgba(239,121,115,0.8)] text-white">
        <Link to="/donate" className="donate-link">Become a Cat Angel</Link>
      </Button>
      </div>


      <div className="cat-list">
  {cats.map((cat) => {
    // Get correct paths for images
    const catImage = new URL(`../assets/cats/${cat.slug}.jpg`, import.meta.url).href;
    return (
      <div key={cat.slug} className="cat-card" 
      onClick={() => navigate(`/cats/${cat.slug}`)}
      style={{ cursor: "pointer" }}>
        <img src={catImage} alt={cat.name} className="cat-image" />
        <h3>{cat.name}</h3>
        {/* <Link to={`/cats/${cat.slug}`} className="cat-link">View Profile</Link> */}
      </div>
    );
  })}
</div>

    </div>
  );
}



