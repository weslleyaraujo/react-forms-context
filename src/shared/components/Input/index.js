import React, { PropTypes } from 'react';
import { Flex } from 'reflexbox';
import { getContext, compose } from 'recompose';
import classnames from 'classnames';

import './styles.css';

const enhancer = compose(
  getContext(
    {
      id: PropTypes.string,
      state: PropTypes.oneOf(['warning', 'danger', 'success']) 
    },
    props => props
  )
);

const Input = ({
  type = 'text',
  id = '',
  state = '',
  ...props,
}) => (
  <Flex my={1} px={1}>
    <input
      type={type}
      id={id}
      className={classnames({
        [`input--${state}`]: state,
      })}
      {...props}
    />
  </Flex>
);

export default enhancer(Input);
