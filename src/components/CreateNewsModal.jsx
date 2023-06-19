import {React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaPen} from 'react-icons/fa';

const CreateNewsModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
return (
<div>
    <>
      <Button variant="primary" className='create-btn' onClick={handleShow}>
        Create News <FaPen className='ms-2'/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Create News  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>  </Form.Label>
              <Form.Control
                type="text"
                placeholder="News title "
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> News Description  </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary" onClick={handleClose}>
            Submit 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
</div>
);
};

export default CreateNewsModal;