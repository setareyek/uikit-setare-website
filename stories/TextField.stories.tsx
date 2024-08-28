import type { Meta, StoryObj } from '@storybook/react';
import { IconArgType, IconKey } from '../.storybook/arg-types';
import { TextField } from '../src/components/textField/TextField';
import React from 'react';

const meta = {
  title: 'Components/TextField',
  parameters: {
    componentSubtitle:
      'TextField fields play a pivotal role in user interface design by enabling users to input unconventional responses. These essential components find application in diverse contexts, with common instances being the input of personal details and shipping addresses in e-commerce web forms or the submission of online inquiries.',
  },
  component: TextField,
  decorators: [
    Story => (
      <div style={{ maxWidth: '24rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  args: {
    helperText: 'Helper text',
    size: 'medium',
    error: false,
    disabled: false,
  },
  argTypes: {
    containerClassName: {
      table: {
        disable: true,
      },
    },
    endIcon: IconArgType({ stroke: 'inherit' }),
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
    },
    startIcon: IconArgType({ stroke: 'inherit' }, [IconKey.UserIcon]),
    value: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    defaultValue: 'Invalid value',
    error: true,
  },
};

export const Icons: Story = {
  args: {
    label: 'Icons',
    startIcon: IconKey.UserIcon,
    endIcon: IconKey.CloseIcon,
  },
};
