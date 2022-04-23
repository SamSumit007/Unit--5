import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToggleContextProvider } from './contexts/Toggle';

ReactDOM.render(
  <React.StrictMode>
    <ToggleContextProvider>
    <App />
    </ToggleContextProvider>
  </React.StrictMode>,
   document.getElementById('root')
);

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import { AuthContextProvider } from './contexts/AuthContext'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthContextProvider>

//     <App />
//     </AuthContextProvider>
//   </React.StrictMode>
// )