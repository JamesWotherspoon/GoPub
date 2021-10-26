import React, { useState, useEffect } from 'react';
import {
  Container, Form, Button,
} from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchQueries } from '../../redux/actions/venueActions';

export default function HandleForm() {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const passParamToApi = () => {
    dispatch(setSearchQueries(formData));
    history.push('/listing');
  };
  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData(
      (prev) => ({ ...prev, [inputName]: inputValue }),
    );
  };
  useEffect(() => {
    fetch('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=lond&components=country:uk&types=regions&key=AIzaSyAkZJ5HVVvRwaIDFp23ChmIFV6pyVBFu-0')
      .then();
    return () => {
      console.log('cleanup;');
    };
  }, [formData.location]);
  return (
    <Container fluid>
      <Form className="showcase-form px-0">
        <Form.Group controlId="formLocation">
          <Form.Label className="text-light ps-4 h4">Where do you want to go?</Form.Label>
          <div className="showcase-location-container d-flex">
            <Form.Control onChange={handleChange} name="location" className="showcase-location-input rounded-top-pill ps-4 py-2 me-2" type="text" placeholder="Location" />
            <Button type="button" onClick={passParamToApi} className="showcase-location-button d-flex align-items-center">
              <GoSearch className="me-2 ms-1" />
            </Button>
          </div>
        </Form.Group>
        <Form.Group />
      </Form>
    </Container>
  );
}
