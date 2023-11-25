import Task from '@/components/Task.vue'

import { action } from '@storybook/addon-actions';

export default {
  component: Task,
  title: 'Task',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

export const LongText = {
  args: {
    task: {
      ...Default.args.task,
      title:"べンダhクぺるNさソヰヷキゴパん6ぃきヹサキすミセHぢヲLゑテチぁぞりWでべPがpsAはェヘhド2fホケ1ザづワuNイOぬェWきVqdヱウザパいロュヮfI0ァゕSnてオhゲjセJ7ラu4チポぺサナニS"
    },
  },
};