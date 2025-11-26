# React + Vite + TypeScript Project

A modern React application bootstrapped with Vite, TypeScript, ESLint, and Prettier.

## 🚀 Features

- ⚡ **Vite** - Lightning fast development server and build tool
- ⚛️ **React 19** - Latest version of React with the new JSX runtime
- 🔷 **TypeScript** - Type-safe code with full TypeScript support
- 📏 **ESLint** - Code linting with recommended rules for React and TypeScript
- 🎨 **Prettier** - Consistent code formatting
- 🎭 **CSS Variables** - Global stylesheet with CSS custom properties for easy theming
- 📁 **Organized Structure** - Clean project structure with dedicated folders for components, hooks, assets, and styles

## 📦 Project Structure

```
project/
├── public/              # Static assets
│   └── vite.svg         # Favicon
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styles and CSS modules
│   │   └── global.css   # Global styles with CSS variables
│   ├── App.tsx          # Main App component
│   ├── App.css          # App component styles
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── .prettierrc          # Prettier configuration
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## 🎯 Available Scripts

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will open automatically at [http://localhost:3000](http://localhost:3000)

### Building

Build the application for production:

```bash
npm run build
```

This will:
1. Run TypeScript compiler to check for type errors
2. Bundle the application using Vite
3. Output optimized files to the `dist` directory

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting & Formatting

**Run ESLint**:
```bash
npm run lint
```

**Fix ESLint issues automatically**:
```bash
npm run lint:fix
```

**Format code with Prettier**:
```bash
npm run format
```

**Check code formatting**:
```bash
npm run format:check
```

**Type checking**:
```bash
npm run type-check
```

## 🎨 Theming

The application includes a global stylesheet (`src/styles/global.css`) with CSS custom properties for easy theming. The theme automatically adapts to the user's system preference (light/dark mode).

### Available CSS Variables

```css
--color-primary           # Primary brand color
--color-primary-hover     # Primary color hover state
--color-background        # Background color
--color-text              # Main text color
--color-text-secondary    # Secondary text color
--color-border            # Border color
--color-shadow            # Shadow color

--font-family             # Primary font stack
--font-size-base          # Base font size
--line-height             # Base line height

--spacing-xs              # Extra small spacing (0.25rem)
--spacing-sm              # Small spacing (0.5rem)
--spacing-md              # Medium spacing (1rem)
--spacing-lg              # Large spacing (1.5rem)
--spacing-xl              # Extra large spacing (2rem)

--border-radius           # Default border radius
--transition              # Default transition
```

To customize the theme, edit the CSS variables in `src/styles/global.css`.

## 📝 Code Style Guidelines

- **TypeScript**: Use TypeScript for all new components and modules
- **Components**: Create functional components with TypeScript interfaces for props
- **Hooks**: Place custom hooks in the `src/hooks` directory
- **Styling**: Use CSS modules or styled-components for component-specific styles
- **Imports**: Follow the import order: React → Third-party → Local components → Styles

## 🔧 Configuration

### TypeScript

TypeScript is configured with strict mode enabled. See `tsconfig.json` for the full configuration.

### ESLint

ESLint is configured with:
- Recommended rules for JavaScript and TypeScript
- React specific rules (including hooks)
- React Refresh plugin for fast refresh support
- Prettier integration to avoid conflicts

### Prettier

Prettier is configured with sensible defaults:
- Single quotes
- 2 space indentation
- Semicolons enabled
- Trailing commas (ES5)
- 80 character line width

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run linting and formatting: `npm run lint:fix && npm run format`
4. Ensure TypeScript compiles: `npm run type-check`
5. Test the build: `npm run build`
6. Submit a pull request

## 📄 License

ISC

## 🆘 Troubleshooting

### Port already in use

If port 3000 is already in use, you can change it in `vite.config.ts`:

```typescript
server: {
  port: 3001, // Change to your preferred port
}
```

### Module not found errors

Try deleting `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors

Run type checking to see all TypeScript errors:

```bash
npm run type-check
```

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
