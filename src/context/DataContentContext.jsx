import React, { createContext, useState } from 'react'

/**
 * @type {function} DataContentContext - the context of the component.
 */
const DataContentContext = createContext()

/**
 *
 * @param {children} children - the children of the component.
 * @returns {any} DataContentContext.Provider - the provider of the context,
 */
const DataContentContextProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            title: 'CSS Tools',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
            items: ['Relative Length Units', 'CSS Box Shadow'],
            path: 'css',
            extraClass: 'bg-gradient-to-tr from-[#8E2DE2] to-[#4A00E0]',
            codeColor: '#6CACE4 #93CAEE'
        },
        {
            title: 'HTML Tools',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
            items: [],
            path: 'html',
            extraClass: 'bg-gradient-to-tr from-[#f46b45] to-[#eea849]'
        }
    ])

    return <DataContentContext.Provider value={data}>{children}</DataContentContext.Provider>
}

export { DataContentContext, DataContentContextProvider }
