import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            50: { value: "{colors.sky.50}" },
            100: { value: "{colors.sky.100}" },
            200: { value: "{colors.sky.200}" },
            /* 略 */
            950: { value: "{colors.sky.950}" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
