import React, { useState, useEffect } from 'react';

import { FaDog, FaPlus } from 'react-icons/fa';
import api from './services/api';

// Icons

// Styles
import GlobalStyle from './styles/global';
import { Container, Form, SubmitButton, List } from './styles/App';

function App() {
  const [dogs, setDogs] = useState([]);

  const [breeds, setBreeds] = useState([]);

  // List all Breeds
  useEffect(() => {
    api.get('/breeds/list').then(res => {
      setBreeds(res.data.message);
    });
  }, []);

  // Handle Submit
  const handleSubmit = async e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const breed = e.target.elements.breed.value;
    const color = e.target.elements.color.value;
    const font = e.target.elements.font.value;

    const image = await api.get(`/breed/${breed}/images/random`);

    const data = {
      name,
      breed,
      color,
      font,
      url: image.data.message,
    };

    setDogs([...dogs, data]);

    console.log(dogs);
  };

  const colors = [
    { name: 'Purple', color: '#7C4DFF' },
    { name: 'Green', color: '#00796B' },
    { name: 'Orange', color: '#FFA000' },
    { name: 'Brown', color: '#795548' },
    { name: 'Pink', color: '#C2185B' },
  ];

  const fonts = ['Roboto', 'Lato', 'Raleway', 'Lobster', 'Lusitana'];

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>
          <FaDog />
          Dogs
        </h1>

        <Form onSubmit={handleSubmit}>
          <input placeholder="Dog's name" id="name" />
          <select id="breed">
            <option value="">What is the breed?</option>
            {breeds.map(b => (
              <option value={b} key={b}>
                {b}
              </option>
            ))}
          </select>
          <select id="color">
            <option value="">Choose a color</option>
            {colors.map(c => (
              <option key={c.color} value={c.color}>
                {c.name}
              </option>
            ))}
          </select>
          <select id="font">
            <option value="">Choose a Font</option>
            {fonts.map(f => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          <SubmitButton>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
        <List />
      </Container>
    </>
  );
}

export default App;
