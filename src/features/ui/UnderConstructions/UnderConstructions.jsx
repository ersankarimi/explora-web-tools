import React from 'react'
import './UnderConstructions.style.css'
import { AlertIcon } from './components/'

const UnderConstructions = () => {
    return (
        <div className="under-construction">
            <div className="under-construction_icon">
                <AlertIcon />
            </div>
            <div className="under-construction_message">
                <h2>This site is still under construction</h2>
            </div>
        </div>
    )
}

export default UnderConstructions
