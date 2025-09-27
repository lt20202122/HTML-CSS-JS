/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateAreas: {
        // Beispiel: Layout mit Header, Sidebar, Content und Footer
        layout: [
          "header header",
          "sidebar content",
          "footer footer"
        ]
      },
      gridArea: {
        header: "header",
        sidebar: "sidebar",
        content: "content",
        footer: "footer"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".area-header": { gridArea: "header" },
        ".area-sidebar": { gridArea: "sidebar" },
        ".area-content": { gridArea: "content" },
        ".area-footer": { gridArea: "footer" }
      };
      addUtilities(newUtilities, ["responsive"]);
    }
  ]
};
