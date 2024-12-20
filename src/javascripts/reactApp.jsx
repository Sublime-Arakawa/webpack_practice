import { createRoot } from 'react-dom/client';
import * as React from 'react';

import Aler from './Alert.tsx';

const App = (props) => {
  return (
    <div style={{ color: '#000' }}>
      Hello, React App!
      <Aler message="Success!" />
    </div>
  );
};

const reactRoot = document.getElementById('react-root');
if (reactRoot) {
  const root = createRoot(reactRoot);
  root.render(<App />);
} else {
  console.log('No root element found');
}
