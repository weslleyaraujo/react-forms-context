import React, { PropTypes } from 'react';

import { getContext, compose } from 'recompose';

import './styles.css';

const enhancer = compose(
  getContext(
    { id: PropTypes.string },
    props => props
  )
);

const Input = ({
  type = 'text',
  id = '',
  ...props,
}) => (
  <div>
    <input type={type} {...props} id={id} />
  </div>
);

export default enhancer(Input);
