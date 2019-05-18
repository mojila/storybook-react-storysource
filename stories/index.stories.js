// Component Start
import React from 'react';
import { Button } from '@storybook/react/demo';

const Component = () => {
  return (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  )
}

export default Component
// Component End

// ===========================================================

// Ignore this
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('Component example', () => <Component/>, {
    notes: 'A very simple example of addon notes',
  });
