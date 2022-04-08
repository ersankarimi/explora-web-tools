import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '@pages'

const App = () => {
    return (
        <div className="container min-h-screen min-w-full max-w-full bg-gradient-to-b from-main-bg-dark-1 to-main-bg-dark-2">
            <Routes>
                <Route path={'/'} element={<Home />}></Route>
            </Routes>
        </div>
    )
}

export default App
