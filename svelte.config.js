import adapter from "@sveltejs/adapter-static";
const dev = process.env.NODE_ENV === "development";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
    }),
    paths: {
      base: dev ? "" : "",
    },
    prerender: {
      handleHttpError: ({ request, error }) => {
        console.log('Handling HTTP error:', request, error);

        if (error && error.url && request && request.url) {
          console.error(`Error handling request ${request.url}: ${error.message}`);
          return {
            status: 200,
            body: `Error occurred for URL ${error.url}, but handled gracefully.`,
          };
        } else {
          console.error(`Unknown error handling request ${request ? request.url : 'unknown'}`);
          return {
            status: 500,
            body: 'Unknown error occurred, handling it gracefully.',
          };
        }
      },
    },
  },
  preprocess: vitePreprocess(),
};

export default config;
