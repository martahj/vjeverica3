// @flow
import React from 'react';
// import selectn from 'selectn';
import { CloudinaryContext } from 'cloudinary-react';

const appStyle = {
  // width: '100%',
  // height: '100%',
  // display: 'flex',
};

const cloudinaryContextStyle = {
  // width: '100%',
  // height: '100%',
};

// const w = window ? window.innerWidth : 600;
// const w = selectn('innerWidth', window || {}) || 600;
// const h = selectn('innerHeight', window || {}) || 600;

//
// const w = window.innerWidth;
// console.log('w', w);
// const h = window.innerHeight;
// console.log('h', h);

const backgroundStyle = {
  backgroundImage: 'url(/static/nature-field-flowers-yellow.jpg)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
};

const Layout = props => (
  <div style={appStyle}>
    <CloudinaryContext cloudName="dfts7qlgf" style={cloudinaryContextStyle}>
      <div style={backgroundStyle}>
        {props.children}
      </div>
    </CloudinaryContext>
  </div>
);

export default Layout;
