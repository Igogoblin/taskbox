/** @type { import('@storybook/react').Preview } */
import "../src/index.css";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ["autodocs"],
  loaders: [mswLoader],
};

export default preview;
