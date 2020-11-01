module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.gray.100"),
          a: {
            color: theme("colors.blue.500"),
            "&:hover": {
              color: theme("colors.blue.300"),
            },
          },
        },
      },

      dark: {
        css: {
          color: theme("colors.gray.300"),
          a: {
            color: theme("colors.green.500"),
            "&:hover": {
              color: theme("colors.green.500"),
            },
          },

          h1: {
            color: theme("colors.gray.300"),
          },
          h2: {
            color: theme("colors.gray.300"),
          },
          h3: {
            color: theme("colors.gray.300"),
          },
          h4: {
            color: theme("colors.gray.300"),
          },
          h5: {
            color: theme("colors.gray.300"),
          },
          h6: {
            color: theme("colors.gray.300"),
          },

          strong: {
            color: theme("colors.gray.300"),
          },

          code: {
            color: theme("colors.gray.900"),
            backgroundColor: theme("colors.gray.300"),
          },

          "code::before": {
            content: "",
            display: "none",
            paddingLeft: theme("spacing.2"),
            paddingRight: theme("spacing.2"),
          },
          "code::after": {
            content: "",
            display: "none",
            paddingLeft: theme("spacing.2"),
            paddingRight: theme("spacing.2"),
          },

          figcaption: {
            color: theme("colors.gray.500"),
          },

          blockquote: {
            color: theme("colors.gray.300"),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
