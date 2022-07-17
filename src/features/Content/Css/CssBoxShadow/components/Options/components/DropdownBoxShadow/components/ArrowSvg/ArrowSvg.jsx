import React from 'react'
import { motion } from 'framer-motion'

const ArrowSvg = ({ isOpen }) => {
  return (
    <motion.svg
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: isOpen ? '90deg' : '0deg'
      }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.244006 8.73616C0.0877692 8.56718 0 8.33801 0 8.09907C0 7.86012 0.0877692 7.63096 0.244006 7.46197L2.98837 4.49456L0.244006 1.52715C0.092197 1.3572 0.00819535 1.12957 0.0100942 0.893296C0.011993 0.657024 0.0996402 0.43101 0.254158 0.263934C0.408676 0.096858 0.617701 0.00208721 0.836214 3.40648e-05C1.05473 -0.00201908 1.26524 0.0888098 1.42242 0.252957L4.75599 3.85746C4.91223 4.02645 5 4.25561 5 4.49456C5 4.73351 4.91223 4.96267 4.75599 5.13166L1.42242 8.73616C1.26614 8.9051 1.0542 9 0.833215 9C0.612229 9 0.40029 8.9051 0.244006 8.73616Z"
        fill="#FAFAFA"
        fillOpacity="0.65"
      />
    </motion.svg>
  )
}

export default ArrowSvg
