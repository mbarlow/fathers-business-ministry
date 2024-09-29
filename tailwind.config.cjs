// const { join } = require("path");
// const { skeleton } = require("@skeletonlabs/skeleton/tailwind/skeleton.cjs");

// module.exports = {
//   content: [
//     "./src/**/*.{html,js,svelte,ts}",
//     join(
//       require.resolve("@skeletonlabs/skeleton"),
//       "../**/*.{html,js,svelte,ts}",
//     ),
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [...skeleton()],
// };

// tailwind.config.cjs

const { skeleton } = require("@skeletonlabs/tw-plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    // Include any other paths that use Tailwind CSS classes
  ],
  darkMode: "class", // or 'media' if you prefer
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
        preset: [
          // Specify the themes you want to use
          "skeleton",
          "modern",
          "hamlindigo",
          // Add other themes as needed
        ],
      },
    }),
    // Include other Tailwind plugins here if needed
  ],
};
