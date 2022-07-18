import React, { useMemo } from 'react'
import { BoxPreview } from './components/BoxPreview'

/**
 * * Return a component which represents the container of the preview component.
 * @param {Array} shadowOptionItems - array of all shadow option items.
 * @returns {JSX.Element} Preview - JSX Element of the Preview component.
 */
const Preview = ({ shadowOptionItems }) => {
  /**
   * * Return a string which represents the css box shadow code from all box shadow items.
   * * Using a memo hook to avoid re-rendering the component and just re-render when shadowOptionsItems changed.
   * @returns {String} boxShadowCode - string of the css box shadow code.
   */
  const boxShadowCode = useMemo(() => {
    return shadowOptionItems.reduce((acc, item, index) => {
      const { hOffset, vOffset, blur, spread, color, inset } = item.dataShadowValues
      acc += `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color} ${inset ? 'inset' : ''}${
        shadowOptionItems.length - 1 !== index && shadowOptionItems.length > 1 ? ', ' : ''
      }`

      return acc
    }, '')
  }, [shadowOptionItems])

  return (
    <div className="min-w-xs xl:min-w-lg flex min-h-[313px] w-full max-w-xs flex-col justify-center rounded-lg bg-table-color-1 pb-7 text-center shadow-item-shadow md:max-w-sm xl:max-w-3xl">
      <div className="flex w-full items-center justify-center rounded-lg bg-main-card-dark-2 py-3 font-poppins text-sm font-semibold text-white-80 shadow-table-header-shadow xl:text-base">
        Preview
      </div>
      <BoxPreview boxShadowCode={boxShadowCode} />
    </div>
  )
}

export default Preview
