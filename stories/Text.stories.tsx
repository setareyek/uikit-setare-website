import { Text } from '../src/components/text/Text';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Text',
  parameters: {
    componentSubtitle: 'A text that could is used in showing titles and descriptions.',
  },
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Text',
    fullWidth: false,
    variant: 'body1',
    weight: 'regular',
    textAlign: 'justify',
    letterSpacing: 'normal',
    decoration: 'noUnderline',
    textWrap: 'balance',
    whiteSpace: 'normal',
  },
  argTypes: {
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Body1: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in Body1 style.',
    variant: 'body1',
  },
};

export const Body2: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in Body2 style.',
    variant: 'body2',
  },
};

export const Description1: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in Description1 style.',
    variant: 'Description1',
  },
};

export const Description2: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in Description2 style.',
    variant: 'Description2',
  },
};

export const Description3: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in Description3 style.',
    variant: 'Description3',
  },
};

export const Title1: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in title1 style.',
    variant: 'title1',
  },
};

export const Title2: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in title2 style.',
    variant: 'title2',
  },
};

export const HeadLine1: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in headLine1 style.',
    variant: 'headLine1',
  },
};

export const HeadLine2: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in headLine2 style.',
    variant: 'headLine2',
  },
};

export const HeadLine3: Story = {
  args: {
    children: 'This is a sample text demonstrating the Text component in headLine3 style.',
    variant: 'headLine3',
  },
};
