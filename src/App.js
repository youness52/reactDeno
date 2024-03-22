import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Bootstrap Modal Example</h1>
        <Button variant="primary" onClick={handleShow}>
          Open Modal
        </Button>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Modal Body Content Goes Here</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </header>
    </div>
  );
}

export default App;
