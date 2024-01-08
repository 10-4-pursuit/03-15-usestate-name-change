import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const CurrentName = styled.p`
  font-size: 18px;
  margin-top: 10px;
  color: #800000;
`;

const NameChanger = () => {
    const [name, setName] = useState('DefaultName');
  
    return (
      <Container>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <CurrentName>Current Name: {name}</CurrentName>
      </Container>
    );
  };

export default NameChanger;
