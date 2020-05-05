import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  excludeStories: /.*Data$/,    // Exclude taskData and actionsData from appearing as stories
};

/**
 * Data
 */
export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

/**
 * Actions
 *  + action() allows us to create a callback that appears in the actions panel of the Storybook UI when clicked
 */
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

/**
 * Stories
 *  Export a function for each of our test states to generate a story
 */
export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => (
  <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
);

export const Archived = () => <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />;
