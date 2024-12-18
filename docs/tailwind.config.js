/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './examples/**/*.{js,ts,vue}',
    './guide/**/*.{js,ts,vue}',
    '../packages/ui/src/**/*.{js,ts,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
