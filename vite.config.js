/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
base : process.env.VITE_BASE_PATH || "/project",


})
//   base:"/react-firebase-chat"
//   "homepage": "https://ALI-ADAM94.github.io/react-firebase-chat/",
//       "predeploy":"npm run build",
// "deploy":"gh-pages -d dist"
//   