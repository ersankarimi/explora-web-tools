import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { SidebarContextProvider } from '@context'
import App from './App'
import { Home, MenuSection, CssContent } from '@pages'
import { DataContentContextProvider } from '@context'

ReactDOM.render(
    <SidebarContextProvider>
        <DataContentContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />

                        {/* CSS */}
                        <Route path="css" element={<MenuSection />}></Route>
                        <Route path="css/:section" element={<CssContent />}></Route>

                        {/* HTML */}
                        <Route path="html" element={<MenuSection />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </DataContentContextProvider>
    </SidebarContextProvider>,
    document.getElementById('root')
)
