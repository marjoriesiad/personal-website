import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './components/Sidebar'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Sidebar />
    </React.StrictMode>
)
