import React from 'react'
import './MenuCard.style.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * * Returns a MenuCard component.
 * @param {title} title - title of the menu card
 * @param {items} items - items of the menu card
 * @param {path} path - path of the menu card
 * @param {codeColor} codeColor - color code of the menu card
 * @returns {JSX.Element} - JSX element of the MenuCard component
 */

const MenuCard = ({ title, path, codeColor, i }) => {
    /**
     * @type {array} represents code colors for the menu card
     */
    const codeColors = codeColor.split(' ')

    /**
     * @type {object} childVariants - object of the child variants motion.
     */
    const childVariants = {
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

    return (
        <motion.div
            className="menu__card-item"
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 }
            }}
            variants={childVariants}
            custom={i}
            initial="hidden"
            animate="visible">
            <Link
                to={`/${path}/${title.split(' ').join('').toLowerCase()}/`}
                className={`menu__card-item-link`}>
                {title}
            </Link>
            <svg width={83} height={90} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M115.97-17.493c10.028 4.578 13.186 23.955 13.468 38.662.248 12.895-8.334 22.073-12.072 33.909-2.994 9.479-3.019 20.224-7.603 28.387-5.585 9.945-12.207 19.629-21.013 22.566-9.711 3.24-20.941 2.461-28.85-5.934-7.77-8.248-6.87-24.46-11.246-36.629-5.183-14.415-17.436-24.926-16.685-41.055.771-16.55 8.96-34.938 20.435-39.471 11.8-4.661 21.034 18.336 33.281 18.252 11.296-.077 19.57-23.578 30.285-18.687z"
                    fill={codeColors[0]}
                />
                <path
                    opacity={0.25}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M105-17.493c10.028 4.578 13.185 23.955 13.468 38.662.248 12.895-8.334 22.073-12.072 33.909-2.994 9.479-3.019 20.224-7.603 28.388-5.585 9.944-12.207 19.628-21.013 22.566-9.711 3.239-20.941 2.46-28.85-5.935-7.77-8.248-6.87-24.46-11.246-36.629C32.501 49.053 20.248 38.542 21 22.413c.771-16.55 8.96-34.938 20.435-39.471 11.8-4.661 21.034 18.336 33.281 18.252C86.011 1.117 94.285-22.384 105-17.493z"
                    fill={codeColors[1]}
                />
            </svg>
        </motion.div>
    )
}

export default MenuCard
