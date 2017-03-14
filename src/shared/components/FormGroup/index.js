import React, { PropTypes } from 'react';
import { withContext, compose } from 'recompose';
import { Flex, Box } from 'reflexbox';

const enhancer = compose(
  withContext(
    {
      id: PropTypes.string,
      children: PropTypes.node
    },
    props => props
  )
);

const FormGroup = ({
  children,
}) => (
  <Flex my={2}>
    {children}
  </Flex>
);

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
};

export default enhancer(FormGroup);
