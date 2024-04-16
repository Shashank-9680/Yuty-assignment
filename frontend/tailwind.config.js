/* eslint-disable global-require */
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: {
        DEFAULT: "#EBECEC",
        pure: "#FFFFFF",
      },
      black: {
        DEFAULT: "#211A2A",
        light: "#2A2136",
        dark: "#1A1520",
        pure: "rgba(0, 0, 0)",
        transparent: "rgba(0, 0, 0, 0.5)",
      },
      grey: {
        DEFAULT: "#EBECEC4D",
        dark: "#646464",
        light: "rgba(245, 245, 245, 0.5)",
      },
      green: {
        DEFAULT: "#03AA69",
      },
      red: {
        DEFAULT: "#FF5863",
        light: "#FF586333",
        dark: "#4D2635",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-dm-serif-display)", "serif"],
      },
    },
  },
};
