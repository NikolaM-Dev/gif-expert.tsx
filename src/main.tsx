import React from 'react';
import { createRoot } from 'react-dom/client';

import { GifExpertApp } from './GifExpertApp';

import './styles.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Gif Expert</h1>
  </React.StrictMode>,
);
