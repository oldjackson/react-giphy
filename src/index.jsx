import React from 'react';
import { createRoot } from 'react-dom/client';
import { StatelessHello, StatefulHello } from './components/hello';

import '../assets/stylesheets/application.scss';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <>
      <StatefulHello name=" Stateful World" />
      <StatelessHello name=" Stateless World" />
    </>
  );
}
