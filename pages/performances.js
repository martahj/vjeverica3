// @flow
import React from 'react';
import Layout from '../containers/Layout';
import Calendar from '../components/Calendar';
import { getEvents } from '../lib/api';

type PerformancesProps = {
  events: Array<Event>,
};

const Performances = ({ events }: PerformancesProps) => (
  <Layout>
    <Calendar events={events || []} />
  </Layout>
);

Performances.getInitialProps = async function ({ req }) {
  const response = await getEvents();
  console.log('got response', response);

  return {
    events: response.events || [],
  };
};

export default Performances;
