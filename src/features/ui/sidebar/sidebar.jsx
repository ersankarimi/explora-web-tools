import React from 'react'
import './Sidebar.style.css'
import { Dropdown } from './components'

const Sidebar = () => {
    return (
        <aside className={'sidebar'}>
            <div className="sidebar__nav">
                <h1 className={'sidebar__header'}>Explora Web Tools</h1>

                <Dropdown />
            </div>
            <div className="sidebar__overlay min-w-[50%]"></div>
        </aside>
    )
}

export default Sidebar
