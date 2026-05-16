import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <ThemeProvider>

        <ToastContainer />

        <App />

      </ThemeProvider>

    </BrowserRouter>

  </React.StrictMode>,
)