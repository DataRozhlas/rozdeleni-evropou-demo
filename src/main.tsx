import React from 'react'
import ReactDOM from 'react-dom/client'
import Graf from './Graf'
import './index.css'

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

ReactDOM.createRoot(document.getElementById('graf')!).render(
  <React.StrictMode>
    <Graf id={id || '1'} />
  </React.StrictMode>,
)