import React from 'react';
import {
  Spinner,
} from 'react-bootstrap';

export default function LoadingSpinner() {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
