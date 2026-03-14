// components/VenueCards.js
import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

// Import images directly from src/assets/img
import card1 from "../assets/img/card1.jpg";
import card2 from "../assets/img/card2.jpg";
import card3 from "../assets/img/card3.jpg";

const venues = [
  {
    title: "Banquet",
    description: "Ideal for dinner parties. 5,000+ seater capacity.",
    price: "$4,000",
    image: card1,
  },
  {
    title: "Rose Garden Hall",
    description: "Host your event in a 2,000+ seater Garden-themed hall.",
    price: "$2,000",
    image: card2,
  },
  {
    title: "Customizable Party Tent",
    description: "1,500 seater capacity. Customizable to your taste.",
    price: "$1,500",
    image: card3,
  },
  {
    title: "Banquet",
    description: "Ideal for dinner parties. 5,000+ seater capacity.",
    price: "$4,000",
    image: card1,
  },
  {
    title: "Rose Garden Hall",
    description: "Host your event in a 2,000+ seater Garden-themed hall.",
    price: "$2,000",
    image: card2,
  },
  {
    title: "Customizable Party Tent",
    description: "1,500 seater capacity. Customizable to your taste.",
    price: "$1,500",
    image: card3,
  },
];

const VenueCards = () => {
  return (
    <Container className="my-5">
      <Row>
        {venues.map((venue, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="h-100 shadow-sm card-custom">
              <div className="card-img-wrapper">
                <Card.Img variant="top" src={venue.image} alt={venue.title} />
              </div>
              <Card.Body>
                <Card.Title>{venue.title}</Card.Title>
                <Card.Text>{venue.description}</Card.Text>
                <p><strong>Price:</strong> {venue.price}</p>
                {/* ✅ Updated Book Hall button */}
                <Button
                  className="btn-blue"
                  href="https://safehaven-30228073381.us-west2.run.app/booking/6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK HALL
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VenueCards;