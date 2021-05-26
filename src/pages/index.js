import React from 'react';

import { graphql } from 'gatsby';

const IndexPage = ({
  data: {
    built: { timestamp }
  }
}) => {
  console.log(timestamp);
  return (
    <main>
      <h1>Index Page</h1>
      <p>
        Site last built @{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>{timestamp}</span>
      </p>
    </main>
  );
};

export const query = graphql`
  {
    built {
      timestamp
    }
  }
`;

export default IndexPage;
