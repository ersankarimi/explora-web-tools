import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import { SidebarContextProvider } from '@context'
import { Home, MenuSection, CssContent, ErrorPage } from '@pages'
import { DataContentContextProvider } from '@context'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
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
                        <Route path="*" element={<ErrorPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </DataContentContextProvider>
    </SidebarContextProvider>
)
