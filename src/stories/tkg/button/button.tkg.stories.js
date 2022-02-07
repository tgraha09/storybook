import React from 'react';

import { Button } from './button.tkg.jsx';

export default {
    title: 'TKG/Button',
    component: Button,
    //👇 Creates specific argTypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => Button(args)

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  size: 'small',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'small',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};