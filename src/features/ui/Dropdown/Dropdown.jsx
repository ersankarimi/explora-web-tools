import React, { useState, useEffect } from 'react'

/**
 *
 * @param {Array} items - represents the items of the component.
 * @param {Function} onChange - represents the function to set the data of the component.
 * @param {Any} defaultValue - represents the default value of the component.
 * @param {String} extraClass - represents the extra class of the component.
 * @returns {JSX.Element} - Dropdown component.
 */
const Dropdown = ({ items, defaultValue, onChange, extraClass }) => {
    /**
     * * Initialize the state of the component.
     * @constant
     * @type {Boolean} dropdownIsOpen - represents if the dropdown is open or not.
     * @default false
     */
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    /**
     * * Initialize the default value of the component.
     * @constant
     * @type {String} selectedItem - represents the selected item of the component.
     * @default defaultValue
     */
    const [selectedItem, setSelectedItem] = useState(defaultValue)

    /**
     * * This function toggles the dropdown.
     * @constant
     * @type {Function} toggleDropdown - represents the function to toggle the dropdown.
     */
    const handleClickOpenDropdown = () => {
        setDropdownIsOpen((value) => !value)
    }

    /**
     * * This function used to handle selected item.
     * * Every time the user clicks on a dropdown item, the selected item is updated and when changes the dropdownIsOpen to false (if true).
     * @param {Object} e - Event object.
     */
    const handleSelectedItem = (e) => {
        setSelectedItem(e.target.innerText)
        setDropdownIsOpen(!dropdownIsOpen)
    }

    /**
     * * This hook used to handle the selected item and run when selectedItem changes.
     */
    useEffect(() => {
        onChange(selectedItem)
    }, [selectedItem])

    return (
        <div className={`relative ${extraClass || ''} min-w-max max-w-max`}>
            <button
                type="button"
                id="dropdown-button"
                className={`from-bg-main-bg-dark-1 hover:ring-3 relative flex w-full items-center justify-around rounded-[8px] border-4 border-item-stroke bg-gradient-to-b from-main-card-dark-1 to-main-card-dark-2 py-3 px-4  text-sm font-bold tracking-wide text-white-100 focus:outline-none focus:ring-4 focus:ring-main-card-dark-1 md:text-base`}
                tabIndex={-1}
                onClick={handleClickOpenDropdown}>
                {selectedItem || 'Dropdown Button'}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="dropdown-arrow-icon"
                    className={`relative -right-3 top-[2.5px] h-6 w-6 ${
                        dropdownIsOpen ? 'rotate-[90deg]' : 'rotate-[0deg]'
                    } duration-100 ease-in`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="rgba(250,250,250,.8)"
                    strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <div
                className={`relative mt-4 rounded-[8px] bg-gradient-to-b from-main-card-dark-2 to-main-card-dark-1 p-2 shadow-sidebar-shadow duration-100 ${
                    dropdownIsOpen ? 'block scale-100' : 'hidden scale-0'
                }`}
                id="dropdown-item">
                <ul tabIndex={-1} className={'p-2'}>
                    {items &&
                        items.map((item, index) => (
                            <li
                                key={index + 1}
                                className="my-1 cursor-pointer p-1 text-white-65 hover:text-white-100 focus:text-white-100 focus:outline-none"
                                tabIndex={-1}
                                id={item.replace(' ', '').toLowerCase()}
                                onClick={handleSelectedItem}>
                                {item}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown
