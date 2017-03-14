import React, { PropTypes } from 'react';

import { getContext, compose } from 'recompose';

const enhancer = compose(
  getContext(
    { id: PropTypes.string },
    props => props
  )
);

const Label = ({ id, children }) => (
  <label style={{ fontWeight: 'bold' }} htmlFor={id}>
    {children}
  </label>
);

export default enhancer(Label);
