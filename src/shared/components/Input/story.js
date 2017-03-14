import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { storiesOf, action } from '@kadira/storybook';

import Input from './index.js';

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ))
  .add('success', () => (
    <Input state="success" />
  ))
  .add('warning', () => (
    <Input state="warning" />
  ))
  .add('danger', () => (
    <Input state="danger" />
  ))
