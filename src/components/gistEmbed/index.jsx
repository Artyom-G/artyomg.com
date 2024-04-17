import React, { useState, useEffect } from 'react';

const GistEmbed = () => {
  const [gistContent, setGistContent] = useState('');

  useEffect(() => {
    const fetchGist = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/Artyom-G/519520ef6283f91e8915d9ec26c5a9b8/raw');
        const data = await response.text();
        setGistContent(data);
      } catch (error) {
        console.error('Error fetching Gist:', error);
      }
    };

    fetchGist();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: gistContent }} />
  );
};

export default GistEmbed;