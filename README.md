# MobiusEngine

A modern, responsive landing page built with React, TypeScript, and Vite. This project showcases a professional website layout with sections for hero content, features, about information, pricing, contact form, and footer.

## Features

- **Modern Tech Stack**: Built with React 19.2, TypeScript, and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modular Components**: Clean, reusable component architecture
- **Type Safety**: Full TypeScript support for better code quality and developer experience
- **Fast Development**: Hot Module Replacement (HMR) with Vite for instant updates
- **ESLint Integration**: Code quality enforcement with modern ESLint configuration

## Project Structure

```
my-react-app/
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navigation.tsx  # Main navigation bar
│   │   ├── Hero.tsx        # Hero section with CTA
│   │   ├── Features.tsx    # Features showcase
│   │   ├── AboutSection.tsx # About information
│   │   ├── PricingSection.tsx # Pricing plans
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer with links
│   ├── assets/            # Static assets (images, etc.)
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Public static files
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Technologies

- **React 19.2** - Modern UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.2** - Next-generation frontend tooling
- **ESLint** - Code linting and quality
- **CSS3** - Styling and animations

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd my-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

Build the application for production:

```bash
npm run build
```

The optimized build will be output to the `dist` folder.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on the codebase |

## Component Overview

### Navigation
Top navigation bar with logo and menu items for easy site navigation.

### Hero
Eye-catching hero section with headline, description, and call-to-action buttons.

### Features
Showcase of key features or services with icons and descriptions.

### About Section
Information about the company, product, or service.

### Pricing Section
Display of pricing tiers and plans with feature comparisons.

### Contact
Contact form for user inquiries and communication.

### Footer
Footer with additional links, social media, and copyright information.

## Configuration Files

- **vite.config.ts** - Vite build tool configuration
- **tsconfig.json** - TypeScript compiler options
- **tsconfig.app.json** - App-specific TypeScript settings
- **tsconfig.node.json** - Node environment TypeScript settings
- **eslint.config.js** - ESLint rules and configuration

## Browser Support

This application supports all modern browsers that support ES6+ features:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and not licensed for public use.

## Contributing

This is a private project. If you're a team member, please follow the established coding standards and submit pull requests for review.

---

Built with React, TypeScript, and Vite
