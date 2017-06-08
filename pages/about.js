/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import Layout from '../client/components/Layout';

export default () => (
  <Layout title="About us">
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>Hello about!!</p>
  </Layout>
);
