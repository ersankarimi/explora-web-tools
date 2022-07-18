/**
 * @type {Object} childVariants - object of the child variants motion.
 */
export const childVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: (i + 1) / 5, duration: 0.5, ease: 'easeInOut' }
  })
}
