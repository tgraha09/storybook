import React from 'react';

import { TestButton } from './test-bttn';

export default {
    title: 'Example/TestButton',
    component: TestButton,
    //👇 Creates specific argTypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => TestButton(args)

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  size: 'small',
  label: 'TestButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'small',
  label: 'TestButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'TestButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'TestButton',
};