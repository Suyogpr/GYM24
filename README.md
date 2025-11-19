This project is a React + TypeScript app that I set up using Vite. My goal was to have a fast, modern development environment with good tooling out of the box. Along the way, I customized the setup to improve developer experience, code quality, and performance.

Key Things I Did in This Project
Set up React + TypeScript with Vite
I bootstrapped the project using Vite, which gives me super-fast HMR and a lightweight dev environment. TypeScript is included for better type safety and cleaner code.

Chose Between Babel and SWC:
Vite offers two plugins for React:

@vitejs/plugin-react (Babel/oxc)
@vitejs/plugin-react-swc (SWC)
I left both options available so I can switch depending on performance needs or preference.

Decided Not to Enable the React Compiler:
The new React Compiler is cool, but right now it slows down dev/build a bit, so I didn’t enable it by default. I can always add it later following the official docs.

Improved ESLint Configuration:
I expanded the default ESLint config to use type-aware rules, which catch more bugs and enforce cleaner TypeScript:
Enabled recommendedTypeChecked (or strictTypeChecked if I want stricter rules)

Added optional stylistic rules:
Configured parser options to point at my tsconfig files
This helps keep the project consistent and reduces runtime bugs.

Added Better React Linting:
To make the codebase more reliable when writing React components, I included:
eslint-plugin-react-x → React lint rules for TypeScript
eslint-plugin-react-dom → DOM-specific React rules
These plugins help catch common React mistakes early.

Organized Project Structure:
I created separate tsconfig.app.json and tsconfig.node.json files to keep both the client and tooling TypeScript configs clean and organized.