import React, { useState, useEffect } from 'react';

const ImageComponent = () => {
  const [base64Image, setBase64Image] = useState('');

  useEffect(() => {
    const imageUrl = 'https://cdn.airfuture.com/img/air-sg/TK.svg';


    const fetchImageAsBase64 = async () => {
      try {
        const response = await fetch(imageUrl);

        const base64data = await response.text();
        setBase64Image(`data:image/svg+xml;base64,${base64data}`);
        // const blob = await response.blob();
        // const reader = new FileReader();

        // reader.onload = () => {
        //   const base64data = reader.result;
        //   setBase64Image(base64data);
        // };

        // reader.readAsDataURL(blob);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImageAsBase64();
  }, []);

  return (
    <div>
      {base64Image && <img src={base64Image} alt="Dynamic SVG" />}
    </div>
  );
};

export default ImageComponent;
