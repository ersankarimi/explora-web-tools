import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { SidebarContextProvider } from '@context'
import App from './App'
import { Home, MenuSection } from '@pages'
import { DataContentContextProvider } from './context'

ReactDOM.render(
    <SidebarContextProvider>
        <DataContentContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<App />}>
                        <Route index element={<Home />} />
                        <Route
                            path={'css/cssboxshadow'}
                            element={<h1 className={' text-white'}>box shadow</h1>}
                        />
                        <Route path={':sectionPath/'} element={<MenuSection />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DataContentContextProvider>
    </SidebarContextProvider>,
    document.getElementById('root')
)
