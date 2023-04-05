/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: {
          "intro-email": "hsl(217, 28%, 15%)",
          background: "hsl(218, 28%, 13%)",
          footer: "hsl(216, 53%, 9%)",
          testimonials: "hsl(219, 30%, 18%)",
        },
        accent: {
          cyan: "hsl(176, 68%, 64%)",
          blue: "hsl(198, 60%, 50%)",
          "light-red": "hsl(0, 100%, 63%)",
        },
        neutral: {
          snow: "hsl(0, 0%, 100%)",
        },
      },

      gradientColorStops: {
        gradient1: ["#63E1D9 -42.11%", "#34A0CD 100%"],
      },

      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        nunito: ["Nunito\\ Sans", "sans-serif"],
      },
    },
    plugins: [],
  },
};
