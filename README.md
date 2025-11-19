I put this project together using React, TypeScript, and Vite. It’s a super lightweight setup with fast hot reloads and some solid linting rules to keep things clean.
Vite gives you two official React plugins to choose from:


@vitejs/plugin-react — uses Babel (or oxc with rolldown-vite) for Fast Refresh


@vitejs/plugin-react-swc — uses SWC for Fast Refresh


React Compiler
I didn’t enable the React Compiler out of the box because it currently slows down both dev and build a bit. If I ever need it, I can just follow the guide here: https://react.dev/learn/react-compiler/installation.
ESLint Setup
For better linting (especially with TypeScript), I expanded the ESLint setup so it can catch more issues while I’m working. Here’s the config:
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Moved from tseslint.configs.recommended to these:
      tseslint.configs.recommendedTypeChecked,
      // Or stricter rules if needed:
      tseslint.configs.strictTypeChecked,
      // Optional stylistic rules:
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

React Linting Plugins
I also added eslint-plugin-react-x and eslint-plugin-react-dom for more React-specific lint rules:
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // React rules
      reactX.configs['recommended-typescript'],
      // React DOM rules
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])


If you want, I can make it even more casual, add setup instructions, or help you restructure it completely.