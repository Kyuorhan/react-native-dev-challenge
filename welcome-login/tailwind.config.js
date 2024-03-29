/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F41BB',
        secondary: '#F8F9FF',
        input: '#0A0A0A',
      },
      height: {'75': '75%'},
      width: {'85': '85%'},
      fontFamily: {
        'poppins-bold': 'Poppins_700Bold',
        'poppins-semibold': 'Poppins_600SemiBold',
        'poppins-medium': 'Poppins_500Medium',
        'poppins-regular': 'Poppins_400Regular',
      }
    },
  },
  plugins: [],
}

