import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <App />
);