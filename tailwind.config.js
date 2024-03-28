/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Corrected: Added a comma at the end
  ],
  theme: {
    extend: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
}
