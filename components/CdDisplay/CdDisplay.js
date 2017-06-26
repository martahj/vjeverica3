// @flow
import React from 'react';
import { Image } from 'cloudinary-react';

type CdDisplayProps = {
  cd: {
    image: string,
    title: string,
  }
};

const displayWrapperStyle = {
  // flexWrap: 'nowrap',
  display: 'flex',
};

const displayBoxStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const CdDisplay = ({ cd }: CdDisplayProps) => (
  <div style={displayWrapperStyle}>
    <div style={displayBoxStyle}>
      <h3>{cd.title}</h3>
      <Image publicId={cd.image} width="300" crop="scale" />
      <p>
        {cd.payment.cost}
      </p>
    </div>
    <div style={displayBoxStyle}>
      <ol>
        {cd.tracks.map(track => (
          <li key={track.main}>
            <p>{track.main}</p>
            <p>{track.finePrint}</p>
          </li>
        ))}
      </ol>
      <ul>
        {cd.artists.map(artist => (
          <li key={artist}>{artist}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default CdDisplay;
