/* eslint-disable */
import type { Preview, Decorator } from '@storybook/react';
import './styles.css';
import React from 'react';

const withDirection: Decorator = (Story, context) => {
  const direction = context.globals.direction || 'ltr';
  return (
    <div dir={direction}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withDirection],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    direction: {
      name: 'Direction',
      description: 'Text direction',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'ltr', title: 'LTR' },
          { value: 'rtl', title: 'RTL' },
        ],
      },
    },
  },
};

export default preview;
