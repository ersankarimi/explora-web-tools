import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

export default defineConfig({
    resolve: {
        alias: [
            {
                find: '@features',
                replacement: path.resolve(__dirname, './src/features/')
            },
            {
                find: '@context',
                replacement: path.resolve(__dirname, './src/context/')
            },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, './src/pages/')
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, './src/hooks/')
            }
        ]
    },
    plugins: [react()]
})
