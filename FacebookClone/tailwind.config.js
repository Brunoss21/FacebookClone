/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
          'gray-facebook' :'#F0F2F5',
          'blue-facebook' : '#1877F2',
          'green-facebook' : '#36A420',
          'texto-facebook' : '#8a8d91',
        },
        spacing: {
          '580' : '580px',
          '380' : '380px',
          '800': '800px',
          '590' : '590px'
        }
    },
  },
  plugins: [],
}
