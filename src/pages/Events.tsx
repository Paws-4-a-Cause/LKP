import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "./Events.css"; // Import the external CSS file
import eventData from "../data/events.json";
import event1Img from "../assets/events/event1_image.jpg";
import event2Img from "../assets/events/event2_image.jpg";
import event3Img from "../assets/events/event3_image.jpeg";

const imageMap: { [key: string]: string } = {
  "event1_image.jpg": event1Img,
  "event2_image.jpg": event2Img,
  "event3_image.jpeg": event3Img,
};

const Events = () => {
  return (
    <div className="events-page">
      <h1 className="heading-events">Our FAKE Events</h1>
      <div className="carousel-container">
        <Carousel className="carousel">
          <CarouselContent>
            {eventData.map((event) => (
              <CarouselItem key={event.slug} className="carousel-item">
                <div className="event-description">
                  <h1 className="event-heading">{event.name}</h1>
                  <img className="event-image" src={imageMap[event.image]} alt={event.name} />
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
                  <a href="#" className="register-button">📩 Register here</a>
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