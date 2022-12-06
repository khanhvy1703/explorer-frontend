import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function RestaurantHomePage() {
  const {restaurantId} = useParams()
  return (
    <Container>
      {restaurantId}
    </Container>
  )
}