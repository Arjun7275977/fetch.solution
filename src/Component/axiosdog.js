import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function RandomDogImage() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        setDogImage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <img src={dogImage} alt="Random Dog" />
    </div>
  );
}


