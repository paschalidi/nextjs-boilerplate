/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import Layout from '../components/Layout/index';

function About() {
  return (
    <Layout title="About us">
      <style jsx>{`
          p {
            color: red;
          }
        `}</style>
      <p>Hello about!!</p>
    </Layout>
  );
}

export default withRedux(initStore)(About);
