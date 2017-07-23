import { configure } from '@storybook/react';

const req = require.context(`../components`, true, /\.stories\.js$/);

function loadStories() {
  req.keys().map(path => req(path));
}

configure(loadStories, module);
