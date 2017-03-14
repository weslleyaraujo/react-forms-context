import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { storiesOf, action } from '@kadira/storybook';

import Input from './index.js';

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
