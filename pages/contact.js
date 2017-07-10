// @flow
import React from 'react';
import Layout from '../containers/Layout';

type ContactOptionProps = {
  type: string,
  info: string
};

const contactTypeStyle = {
  fontWeight: 700,
};

const addressStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  fontWeight: 600,
};

const ContactOption = ({
  type,
  info,
}: ContactOptionProps) => (
  <div>
    <p>
      <span style={contactTypeStyle}>
        {`${type}: `}
      </span>
      {info}
    </p>
  </div>
);

const Contact = () => (
  <Layout>
    <div>
      <h2>Contact Shirley Johnson</h2>
      <ContactOption
        type="Call"
        info="512-680-0422"
      />
      <ContactOption
        type="Email"
        info="ShirleyJ@Vjeverica.com"
      />
      <ContactOption
        type="Fax"
        info="512-258-1147"
      />
      <ol style={addressStyle}>
        <li>Vjeverica Productions</li>
        <li>PO Box 203244</li>
        <li>Austin, TX, US, 78720-3244</li>
      </ol>
    </div>
  </Layout>
);

export default Contact;
