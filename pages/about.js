import React from 'react';
import Layout from '../containers/Layout';
import bioParagraphs from '../data/bioParagraphs';
/*
 * TODO images
 */
const About = () => (
  <Layout>
    {bioParagraphs.map(paragraph => (
      <p key={paragraph.slice(0, 7)}>{paragraph}</p>
    ))}
  </Layout>
);

export default About;
