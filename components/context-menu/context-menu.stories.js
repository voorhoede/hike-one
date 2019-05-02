import React from 'react';
import { storiesOf } from '@storybook/react';
import ContextMenu from './context-menu';

const ContextMenuDecorator = (storyFn) => (
  <div style={{ margin: '20px' }}>
    { storyFn() }
  </div>
);


storiesOf('Context Menu', module)
  .addDecorator(ContextMenuDecorator)
  .add('context menu', () => (
    <ContextMenu />
  ));
