import React, {useState} from 'react';

import {Container, Loader} from 'semantic-ui-react';

const ImageLoading = ({images, callback}) => {
  const [loadedImages, setLoadedImages] = useState([]);
  if (loadedImages.length >= images.length) {
    callback();
  }
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container>
        <Loader active inverted />
      </Container>
      <div style={{visibility: 'hidden'}}>
        {images.map((src, i) => {
          return (
            <img
              src={src}
              key={i}
              onLoad={setLoadedImages([...loadedImages, src])}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageLoading;
