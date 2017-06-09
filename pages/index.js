/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../client/store';

import Layout from '../client/components/Layout/index';

class Index extends React.Component {
  render() {
    return (
      <Layout title="Vimcar">
        <div className="hello">
          <p>Hello Vimcar</p>
          <style jsx>{`
            .hello {
              font: 15px Helvetica, Arial, sans-serif;
              background: #eee;
              padding: 100px;
              text-align: center;
              transition: 100ms ease-in background;
            }
            .hello:hover {
              background: #ccc;
            }
          `}
          </style>
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);