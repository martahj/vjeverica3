import React from 'react';
// import { Image } from 'cloudinary-react';
import Layout from '../containers/Layout';

const events = [
  {
    title: 'All Day Event',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },

  {
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },

  {
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },

  {
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 9, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
  {
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
    desc: 'an all day event!',
    link: 'http://www.google.com',
    location: 'starbucks',
  },
];

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
    {}
    {/* <div style={backgroundStyle}> */}
    {/* <img src={'/static/cdcover1.jpg'} /> */}
    {/* <Image publicId="vjeverica/dev/Pillar_Bluff_Vineyards_cropped_fixed" /> */}
    <div>whoa there world</div>
    {/* </div> */}
  </Layout>
);

export default Index;
