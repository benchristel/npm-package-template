# Preact, TypeScript, Vite, @benchristel/taste

## Setup

1. Click the "Use this template" button on GitHub
2. Clone the created repo
3. If this is your first ever JavaScript project, welcome! See [setting up a JavaScript development environment](https://gist.github.com/benchristel/ede6615bf1c6cf91fd5cda70f02f57d7) to get started.
4. Run the one-time setup script to install dependencies and git hooks:
   ```
   yarn setup
   ```
5. Change the package name and description in `package.json`.

## Development

### Server and Typechecker

```
yarn dev
yarn ts
```

- Opening the project in **Visual Studio Code** automatically starts the dev server and `typescript` typechecker.
- The dev server runs at http://localhost:5173 (the port number is `vite` in 1337... sort of).
- Output appears in the terminal pane (accessed via `ctrl+~`).
- Type errors also show up in the problems pane (`ctrl+shift+M`).
- The server and typechecker stop automatically when VS Code quits.

### Tests

- **Tests** run in the browser. The test report appears at the top of the screen.
- The page will refresh (re-running the tests) whenever you save a file.
- The tests and test report are completely removed from production builds.
- You can write tests in-source, or in files named `*.test.*`, e.g. `example.test.ts`. The test file pattern is configured in `dev/test-results.ts`.

The test framework is `@benchristel/taste`. For more information, see [@benchristel/taste on NPM](https://www.npmjs.com/package/@benchristel/taste).

### Formatting

- Files get auto-formatted when you commit, so you'll never check in inconsistently-formatted code. To disable this behavior, delete `.husky/pre-commit`.
- To format all files, run `yarn format`.
- The code formatter is `prettier`. See `.prettierrc` for configuration.

## Building for release

```
yarn build
```

This outputs files in the `dist` directory.
