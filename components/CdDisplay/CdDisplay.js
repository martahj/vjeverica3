// @flow
import React from 'react';
import { Image } from 'cloudinary-react';

type CdDisplayProps = {
  cd: {
    image: string,
    title: string,
    tracks: Array<{
      main: string,
      finePrint?: string
    }>,
    artists: Array<string>,
    payment: string
  }
};

const displayWrapperStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const displayBox1Style = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '300px',
  flexWrap: 'wrap',
};

const displayBox2Style = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '300px',
  flexWrap: 'wrap',
  flexBasis: '50%',
};

const finePrintTextStyle = {
  fontSize: 12,
};

const artistListStyle = {
  listStyleType: 'none',
  margin: 0,
  fontSize: 14,
};

const CdDisplay = ({ cd }: CdDisplayProps) => (
  <div style={displayWrapperStyle}>
    <div style={displayBox1Style}>
      <h3>{cd.title}</h3>
      <Image publicId={cd.image} width="300" crop="scale" />
      <p>
        {cd.payment.cost}
      </p>
    </div>
    <div style={displayBox2Style}>
      <div style={{ minWidth: 300 }}>
        <ol>
          {cd.tracks.map(track => (
            <li key={track.main}>
              {track.main}
              <br />
              <span style={finePrintTextStyle}>{track.finePrint}</span>
            </li>
          ))}
        </ol>
        <ul style={artistListStyle}>
          {cd.artists.map(artist => (
            <li key={artist}>{artist}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default CdDisplay;
