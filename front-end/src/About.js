import { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css'

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then((response) => {
        setAboutUsData(response.data);
      })
      .catch((err) => {
        setError('Failed to fetch data from the server');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {
        <>
          <h1>ABOUT</h1>
          <p> My name is {aboutUsData.name}, and I am a student at NYU, double-majoring in Interactive Media Arts and Computer Science.</p>
          <p>{aboutUsData.first_paragraph}</p>
          <p>Here is my favorite quote: </p>
          <blockquote> {aboutUsData.quote}</blockquote>
          <img src={aboutUsData.imageUrl} alt="stars" />
        </>
      }
    </div>
  );
};

export default AboutUs;



