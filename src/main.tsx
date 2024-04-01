import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Layer } from '@/components/Layer.tsx';
import Router from '@/Routes';
import '@/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
    <ToastContainer />
    <Layer />
  </React.StrictMode>,
);
