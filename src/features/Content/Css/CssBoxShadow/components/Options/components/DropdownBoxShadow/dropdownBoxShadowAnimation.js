/**
 * * ulVariants contains rules for animation.
 * @constant
 * @type {Object} UlVariants - represents the ul variants.
 */
export const ulVariants = {
  hidden: {
    y: -10,
    opacity: 0,
    display: 'none'
  },
  visible: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      duration: 0.015,
      when: 'beforeChildren',
      staggerChildren: 0.05
    }
  }
}

/**
 * * liVariants contains rules for animation.
 * @constant
 * @type {Object} liVariants - represents the li variants.
 */
export const liVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}
