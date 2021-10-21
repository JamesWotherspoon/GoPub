import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import {
  Container, Form, Button,
} from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import pubBar from '../img/empty-pub-bar.jpg';

export default function Showcase() {
  return (
    <section className="linear-gradient-dark">
      <Container className="h-100 d-flex align-items-center">
        <Form className="showcase-form px-0">
          <Form.Group controlId="formLocation">
            <Form.Label className="text-light ps-4 h4">Where do you want to go?</Form.Label>
            <div className="showcase-location-container d-flex">
              <Form.Control className="showcase-location-input rounded-top-pill ps-4 py-2 me-2" type="text" placeholder="Location" />
              <Button type="submit" className="showcase-location-button d-flex align-items-center">
                <GoSearch className="me-2 ms-1" />
              </Button>
            </div>
          </Form.Group>
          <Form.Group />

        </Form>
      </Container>
      <img src={pubBar} alt="" className="showcase-image" />
    </section>
  );
}
