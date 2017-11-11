import React from 'react';
import Link from 'next/link';
import FlatButton from 'material-ui/FlatButton';

const pages = [
  {
    link: '/',
    text: 'main',
  },
  {
    link: '/about',
    text: 'about',
  },
  {
    link: '/cds',
    text: 'cds',
  },
  {
    link: '/contact',
    text: 'contact',
  },
  {
    link: '/events',
    text: 'events',
  },
  {
    link: '/experience',
    text: 'experience',
  },
  {
    link: '/faq',
    text: 'faq',
  },
  {
    link: '/lessons',
    text: 'lessons',
  },
  {
    link: '/performances',
    text: 'performances',
  },
];

const barStyle = {
  width: '100%',
};

const Navigation = () => (
  <div style={barStyle}>
    {pages.map(page => (
      <Link
        href={page.link}
        key={`Nav_Item_${page.link}`}
      >
        <FlatButton label={page.text} />
      </Link>
    ))}
  </div>
);

export default Navigation;
