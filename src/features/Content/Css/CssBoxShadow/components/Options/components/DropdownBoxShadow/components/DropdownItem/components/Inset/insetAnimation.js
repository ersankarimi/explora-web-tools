/**
 * * insetVariants contains rules for animation.
 * @constant
 * @type {Object} insetVariants - represents the color inset variants.
 */
export const insetVariants = {
  hidden: {
    opacity: 0,
    scale: [1, 2, 0],
    transition: {
      duration: 0.5
    }
  },
  visible: {
    opacity: 1,
    scale: [1, 2, 1],
    transition: {
      duration: 0.5
    }
  }
}
