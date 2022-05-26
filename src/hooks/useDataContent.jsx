import { useContext } from 'react'
import { DataContentContext } from '@context'

/**
 *
 * @returns {Array} DataContentContext- the value is data of content.
 */
export const useDataContent = () => {
    return useContext(DataContentContext)
}
