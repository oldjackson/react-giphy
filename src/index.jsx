import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import '../assets/stylesheets/application.scss';

function Hello({ name }) {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Hello name=" World" />);
}
