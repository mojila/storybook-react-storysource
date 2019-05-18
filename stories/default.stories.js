// Component Start
import React from 'react';
import { Button } from 'element-react';
import 'element-theme-default';

const Component = (props) => {
  const show_alert = () => window.alert('Hello')

  return (
    <Button onClick={() => show_alert()}>
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

storiesOf('Default Example', module)
  .add('Component example', () => <Component/>, {
    notes: 'A very simple example of addon notes',
  });
