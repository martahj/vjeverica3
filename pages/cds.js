import React from 'react';
import Layout from '../containers/Layout';
import cds from '../data/cds';
import CdDisplay from '../components/CdDisplay';

const Cds = () => (
  <Layout>
    {cds.map(cd => (
      <CdDisplay
        key={cd.title}
        cd={cd}
      />
    ))}
  </Layout>
);

export default Cds;
