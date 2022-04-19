import { useContext } from 'react'
import { DataContentContext } from '@context'

/**
 *
 * @returns {array} Data\ContentContext- the value is data of content.
 */
export const useDataContent = () => {
    return useContext(DataContentContext)
}
