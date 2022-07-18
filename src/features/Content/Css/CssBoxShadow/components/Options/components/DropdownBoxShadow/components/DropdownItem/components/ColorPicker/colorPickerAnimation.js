/**
 * * colorPickerVariants contains rules for animation.
 * @constant
 * @type {Object} colorPickerVariants - represents the color picker variants.
 */
export const colorPickerVariants = {
  hidden: {
    opacity: 0,
    display: 'none',
    scale: 0,
    transition: {
      duration: 0.5
    }
  },
  visible: {
    opacity: 1,
    display: 'block',
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
}
