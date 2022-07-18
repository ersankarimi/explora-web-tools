/**
 * @type {Object} parentVariants - object of the parent variants motion.
 */
export const parentVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 2,
      delay: 2,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.15,
      ease: 'easeInOut',
      when: 'beforeChildren'
    }
  }
}
