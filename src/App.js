import React, { useState, useEffect } from 'react';

// Icons
import { FaDog, FaPlus, FaSpinner } from 'react-icons/fa';

// Dogs API
import api from './services/api';

// Styles
import GlobalStyle from './styles/global';

import {
  Container,
  Form,
  SubmitButton,
  List,
  Title,
  SubTitle,
  Info,
  SavedIn,
  Message,
} from './styles/App';

function App() {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  // List all Breeds
  useEffect(() => {
    api.get('/breeds/list').then(res => {
      setBreeds(res.data.message);
    });
  }, []);

  // Get LocalStorage List
  useEffect(() => {
    const data = localStorage.getItem('dog-list');
    if (data) {
      setDogs(JSON.parse(data));
    }
  }, []);

  // Set LocalStorage List
  useEffect(() => {
    localStorage.setItem('dog-list', JSON.stringify(dogs));
  }, [dogs]);

  // Handle Submit a new Dog
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    const name = e.target.elements.name.value;
    const breed = e.target.elements.breed.value;
    const color = e.target.elements.color.value;
    const font = e.target.elements.font.value;

    const image = await api.get(`/breed/${breed}/images/random`);

    const date = Date('M D YYYY \n/ HH:MM');

    const data = {
      name,
      breed,
      color,
      font,
      url: image.data.message,
      date,
    };

    setDogs([data, ...dogs]);
    setLoading(false);
    setMessage(true);
  }

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
        {message && (
          <Message>Your new dog has been successfully registered!</Message>
        )}
        <h1>
          <FaDog />
          Register dog
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
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
        <List>
          <h1>
            <FaDog /> Dog List
          </h1>
          {dogs ? (
            dogs.map(dog => (
              <li key={dog.name}>
                <img alt={dog.name} src={dog.url} />
                <Info color={dog.color} font={dog.font}>
                  <Title>{dog.name}</Title>
                  <SubTitle>{dog.breed}</SubTitle>
                  <SavedIn>Saved in: {dog.date}</SavedIn>
                </Info>
              </li>
            ))
          ) : (
            <h4>Not found</h4>
          )}
        </List>
      </Container>
    </>
  );
}

export default App;
