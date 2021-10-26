import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import defaultPubImage from '../../assets/img/default-pub-image.jpg';

export default function VenueList({ pubApiResponse }) {
  const venuesArray = pubApiResponse.map((venue) => {
    console.log(venue);
    const {
      photo: {
        images: {
          medium: {
            url: venueImageUrl,
          },
        },
      } = {
        images: {
          medium: {
            url: false,
          },
        },
      },
      name,
      address,
      location_id: venueId,
      price_level: priceLevel,
      rating,
      description,
    } = venue;
    console.log(venueImageUrl);

    return (
      <Col lg={6} key={venueId}>
        <Card>
          <div className="venue-list-image-container">
            { venueImageUrl
              ? <Card.Img variant="top" className="venue-list-image" src={venueImageUrl} />
              : (
                <>
                  <Card.Img variant="top" className="venue-list-image opacity-50" src={defaultPubImage} />
                  <Card.Subtitle>No Image available</Card.Subtitle>
                </>
              )}
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
            <Card.Text>{rating}</Card.Text>
            <Card.Text>{priceLevel}</Card.Text>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  const splitToRows = () => {
    const venueRows = [];
    let index = 0;
    while (venuesArray.length) {
      const thisRow = venuesArray.splice(0, 2);
      venueRows.push(<Row key={index}>{thisRow}</Row>);
      index += 1;
    }
    return venueRows;
  };
  return (
    <Container fluid>
      {splitToRows()}
    </Container>
  );
}

VenueList.propTypes = {
  pubApiResponse: PropTypes.arrayOf.isRequired,
};
