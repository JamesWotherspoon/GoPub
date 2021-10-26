import React from 'react';
import {
  Container,
} from 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import pubBar from '../../assets/img/empty-pub-bar.jpg';
import HandleForm from './HandleForm';

export default function Showcase() {
  return (
    <section className="linear-gradient-dark">
      <Container className="h-100 d-flex align-items-center">
        <HandleForm />
      </Container>
      <img src={pubBar} alt="" className="showcase-image" />
    </section>
  );
}
