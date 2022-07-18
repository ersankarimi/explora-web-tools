import React from 'react'

/**
 * * Return a component which represents the box preview.
 * @param {String} boxShadowCode - string of the css box shadow code.
 * @returns {JSX.Element} BoxPreview - JSX Element of the BoxPreview component.
 */
const BoxPreview = ({ boxShadowCode }) => {
  return (
    <div
      className="m-auto my-4 h-[289px] max-h-[289px] w-[60%] rounded-md bg-slate-400"
      style={{
        boxShadow: boxShadowCode
      }}></div>
  )
}

export default BoxPreview
