import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App'; // Your main app component

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root

root.render(<App />); // Render your app inside the root
