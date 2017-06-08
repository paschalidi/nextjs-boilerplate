/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */


import Layout from '../components/Layout';

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
