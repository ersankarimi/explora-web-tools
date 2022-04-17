import React from 'react'

/**
 *
 * * Retunrs a GithubIcon components.
 * @returns {any} of the GithubIcon component.
 */

const GithubIcon = () => {
    return (
        <a href="https://github.com/ersankarimi/explora-web-tools">
            <svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer">
                <path
                    d="M7.503 15.833c-4.267 1.25-4.267-2.083-5.974-2.5m11.947 5v-3.225a2.748 2.748 0 00-.16-1.171 2.799 2.799 0 00-.642-1.004c2.68-.291 5.496-1.283 5.496-5.833a4.477 4.477 0 00-1.28-3.125 4.133 4.133 0 00-.077-3.142s-1.007-.291-3.337 1.234a11.683 11.683 0 00-5.973 0C5.173.542 4.166.833 4.166.833a4.133 4.133 0 00-.077 3.142 4.477 4.477 0 00-1.28 3.15c0 4.517 2.816 5.508 5.496 5.833-.28.284-.497.621-.636.992-.138.37-.195.765-.166 1.158v3.225"
                    stroke="#FAFAFA"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    )
}

export default GithubIcon
