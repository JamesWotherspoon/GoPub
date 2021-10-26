import React from 'react';
import {
  Button,
} from 'react-bootstrap';

export default function Sidebar() {
  return (
    <div className="sidebar bg-secondary w-25">
      <Button type="button">
        Clear
      </Button>
      <Button type="button">
        Refine Search
      </Button>

    </div>
  );
}
