# Modern Website Environment

Welcome to your premium web development environment. This project is configured with a modern stack designed for performance, aesthetics, and scalability.

## 🚀 Tech Stack

- **Core**: HTML5, Modern JavaScript (ES Modules)
- **Styling**: Vanilla CSS with a comprehensive Custom Property (Variable) system.
- **Tooling**: [Vite](https://vitejs.dev/) for lightning-fast development and optimized production builds.
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) (UI) and [Outfit](https://fonts.google.com/specimen/Outfit) (Headings).

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

## 🎨 Design System

This environment comes with a pre-configured design system in `src/index.css`.

### Colors
- **Primary**: Indigo (`--color-primary`)
- **Secondary**: Pink (`--color-secondary`)
- **Accent**: Violet (`--color-accent`)
- **Background**: Slate 900 (`--color-background`) - Deep, rich dark mode.
- **Surface**: Slate 800 (`--color-surface`) - For cards and panels.

### Typography
- **Headings**: `Outfit` - Bold, modern, and geometric.
- **Body**: `Inter` - Clean, legible, and standard for UI.

### Utilities
- `.text-gradient`: Applies a premium gradient text effect.
- `.container`: Centered layout with responsive padding.
- Glassmorphism variables (`--glass-bg`, `--glass-border`, `--glass-blur`) are ready for use.

## 📁 Project Structure

```
/
├── index.html        # Entry point
├── package.json      # Project configuration and scripts
├── vite.config.js    # Vite configuration
├── public/           # Static assets
└── src/
    ├── main.js       # Main JavaScript entry
    └── index.css     # Global styles and Design System
```

## 📝 Next Steps

You can now start building your project by:
1. Creating components in `src/`.
2. Importing them into `main.js`.
3. Utilizing the CSS variables in `index.css` to maintain design consistency.
