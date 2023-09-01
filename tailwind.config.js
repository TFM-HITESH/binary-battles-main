/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*',
    './src/components/**/*',
    './src/app/**/*',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'frontpage' : "url('../src/components/layerbase.png')"
      },
    },
  },
  plugins: [],
}
