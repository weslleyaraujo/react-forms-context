import React, { PropTypes } from 'react';
import { Flex, Box } from 'reflexbox';
import { storiesOf, action } from '@kadira/storybook';

import FormGroup from './index.js';
import Input from '../Input/index.js';
import Label from '../Label/index.js';

storiesOf('FormGroup', module)
  .add('default', () => (
    <FormGroup
      id="foo"
    >
      <Label>Example</Label>
      <Input />
    </FormGroup>
  ))
  .add('validation state', () => (
    <FormGroup
      state="success"
      id="bar"
    >
      <Label>Lorem</Label>
      <Input />
    </FormGroup>
  ))
