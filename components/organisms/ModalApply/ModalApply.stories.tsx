// YourComponent.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import ModalApply from './ModalApply';
import Modal from '../../molecules/Modal/Modal';
import * as ModalStories from '../../molecules/Modal/Modal.stories';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Organisms/ModalApply',
  component: ModalApply,
  decorators: [withDesign],
} as ComponentMeta<typeof ModalApply>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ModalApply> = () => (
  <Modal title='申し込み'>
    <ModalApply />
  </Modal>
);

export const Default = Template.bind({});

// Default.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/5OKuBHAVTnNvJYr6QbQlu6/LiveNow?node-id=117%3A3',
//   },
// };

Default.args = {};
