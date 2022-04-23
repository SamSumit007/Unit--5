import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {CartContextProvider} from "./Contexts/CartContext"
ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </React.StrictMode>,
  
  document.getElementById('root'))
;




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