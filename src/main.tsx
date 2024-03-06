import React from 'react'
import ReactDOM from 'react-dom/client'
import Graf from './Graf'
import './index.css'

ReactDOM.createRoot(document.getElementById('graf1')!).render(
  <React.StrictMode>
    <Graf id={"1"} />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('graf2')!).render(
  <React.StrictMode>
    <Graf id={"2"} />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('graf3')!).render(
  <React.StrictMode>
    <Graf id={"3"} />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('graf4')!).render(
  <React.StrictMode>
    <Graf id={"4"} />
  </React.StrictMode>,
)