import React, { PropTypes } from 'react';
import { Flex } from 'reflexbox';
import { getContext, compose } from 'recompose';

const enhancer = compose(
  getContext(
    { id: PropTypes.string },
    props => props
  )
);

export const Label = ({ id, children }) => (
  <Flex my={1} px={1}>
    <label style={{ fontWeight: 'bold' }} htmlFor={id}>
      {children}
    </label>
  </Flex>
);

export default enhancer(Label);
