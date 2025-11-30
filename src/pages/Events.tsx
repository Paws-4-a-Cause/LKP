import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./Events.css"; // Import the external CSS file
import eventData from "../data/events.json";
import event1Img from "../assets/events/SMUPaw.jpg";
import event2Img from "../assets/events/Brickland.jpg";
import event3Img from "../assets/events/NanHuaTalk.jpg";
import event4Img from "../assets/events/PurrsaMalam.jpg";
import event5Img from "../assets/events/NeeSoonPets.png";
import event6Img from "../assets/events/CashewPetsDay.png";
import event7Img from "../assets/events/SingaporeCatFestival.jpg";

const imageMap: { [key: string]: string } = {
  "SMUPaw.jpg": event1Img,
  "Brickland.jpg": event2Img,
  "NanHuaTalk.jpg": event3Img,
  "PurrsaMalam.jpg": event4Img,
  "NeeSoonPets.png": event5Img,
  "CashewPetsDay.png": event6Img,
  "SingaporeCatFestival.jpg": event7Img,
};

const Events = () => {
  return (
    <div className="events-page">
      <div className="carousel-container">
        <Carousel className="carousel">
          <CarouselContent>
            {eventData.map((event) => (
              <CarouselItem key={event.slug} className="carousel-item">
                <div className="event-description">
                  <h1 className="event-heading">{event.name}</h1>
                  <img className="event-image" src={imageMap[event.image]} alt={event.name} loading="lazy" />
                  <div className="event-details">
                    <p><strong>📅 Date:</strong> {event.date}</p>
                    <p><strong>🕒 Time:</strong> {event.time}</p>
                    <p><strong>📍 Location:</strong> {event.location}</p>
                    <p>{event.description}</p>
                    <p>✨ <strong>What to Expect:</strong></p>
                    <ul>
                      {event.whatToExpect.map((item, index) => (
                        <li key={index}>✔️ {item}</li>
                      ))}
                    </ul>
                    <p dangerouslySetInnerHTML={{ __html: event.cta }}></p>
                  </div>
                  <a href="https://www.instagram.com/luvkuching/?hl=en" className="register-button" target="_blank" rel="noopener noreferrer">
                    📸 View Details on Instagram
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Events;