import {defineConfig} from "vite"
import inject from "@rollup/plugin-inject"
import {resolve} from "node:path"

export default defineConfig({
  // Base path for references to asset files in the built code.
  // Setting this to empty causes assets to be imported from a
  // relative path, which is necessary if your app is deployed
  // to a subdirectory (e.g. https://benchristel.github.io/my-app/)
  base: "",
  plugins: [
    inject({
      include: "src/**/*.{ts,tsx,js,jsx}",
      test: ["@benchristel/taste", "test"],
      expect: ["@benchristel/taste", "expect"],
      is: ["@benchristel/taste", "is"],
      equals: ["@benchristel/taste", "equals"],
      not: ["@benchristel/taste", "not"],
      which: ["@benchristel/taste", "which"],
      debug: ["@benchristel/taste", "debug"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.ts"),
      name: "NPM Package Template",
      fileName: "npm-package-template",
    },
  },
})
