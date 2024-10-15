import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ExampleTransition } from './ExampleTransition';

const Wrapper = () => {
  return (
    <>
      <ExampleTransition />
    </>
  );
};

const meta: Meta<typeof ExampleTransition> = {
  title: 'ExampleTransition',
  component: Wrapper,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {};
