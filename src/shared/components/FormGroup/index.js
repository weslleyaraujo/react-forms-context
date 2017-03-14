import React, { PropTypes } from 'react';
import { withContext, compose } from 'recompose';
import { Flex, Box, withReflex } from 'reflexbox';

const enhancer = compose(
  withContext(
    {
      id: PropTypes.string,
      children: PropTypes.node,
      state: PropTypes.oneOf(['warning', 'danger', 'success']),
    },
    props => props
  ),
);

const FormGroup = ({
  children,
}) => (
  <div>
    {children}
  </div>
);

export default enhancer(FormGroup);
