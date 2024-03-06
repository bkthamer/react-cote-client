import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { editEvent, getallEvents } from '../service/api';

const UpdateEvent = () => {
  const [eventItem, setEventItem] = useState({
    name: '',
    description: '',
    price: 0,
    nbTickets: 0,
    img: '',
  });

  const { id } = useParams(); 
  

  useEffect(() => {
    const fetchEvent = async () => {
      const response = await getallEvents(id);
      setEventItem(response.data);
    };
    fetchEvent();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventItem({ ...eventItem, [name]: value });
  };

  const handleFileChange = (e) => {
   
    console.log("File upload handling needs to be implemented based on your backend");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editEvent(id, eventItem);

    
  };

  return (
    <Container style={{ marginTop: '30px' }}>
      <h2>Edit Event</h2>
      <Form onSubmit={handleSubmit}>
       
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter a Name"
            value={eventItem.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            name="description"
            value={eventItem.description}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={eventItem.price}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
            value={eventItem.nbTickets}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
        <Button variant="secondary" onClick={() => history.goBack()}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateEvent;
