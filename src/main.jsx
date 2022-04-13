import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { SidebarContextProvider } from '@context'
import App from './App'
import { Home } from '@pages'

ReactDOM.render(
    <SidebarContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App />}>
                    <Route index element={<Home />} />
                    <Route
                        path={'css/cssboxshadow'}
                        element={<h1 className={' text-white'}>box shadow</h1>}
                    />
                    <Route
                        path={'css/relativelengthunits'}
                        element={<h1 className={' text-white'}>CSS LEngth</h1>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </SidebarContextProvider>,
    document.getElementById('root')
)
