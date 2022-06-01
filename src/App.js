import React from 'react';
import { Container } from 'react-bootstrap';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container fluid className='mt-4 mb-2'>
      <SortingVisualizer />
    </Container>
  );
}

export default App;
