import React from 'react';
// import { Image } from 'cloudinary-react';
import Layout from '../containers/Layout';

// const backgroundStyle = {
//   backgroundImage: 'url(/static/cdcover1.jpg)',
//   backgroundSize: 'cover',
//   height: '100%',
//   width: '100%',
// };

const imageStyle = {
  height: 500,
};

const Index = () => (
  <Layout>
    <img src="/static/cdcoverart-004.jpg" style={imageStyle} />
    {/* <div style={backgroundStyle}> */}
    {/* <img src={'/static/cdcover1.jpg'} /> */}
    {/* <Image publicId="vjeverica/dev/Pillar_Bluff_Vineyards_cropped_fixed" /> */}
    <div>whoa there world</div>
    {/* </div> */}
  </Layout>
);

export default Index;
