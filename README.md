# 🚀 Portfolio Project - Oskar Nordin

A modern, interactive portfolio website showcasing my journey as a JavaScript Developer. Built with React and styled-components, featuring smooth animations, keyboard navigation, and a professional, employer-ready design.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://js-portfoliotwo.netlify.app/)

## ✨ Features

- **🎨 Modern Design** - Clean, professional interface with smooth animations and transitions
- **⌨️ Keyboard Navigation** - Navigate between sections using arrow keys (←/→)
- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop
- **🎭 Interactive Blob Animation** - Custom canvas-based ASCII art blob on the home page
- **📬 Contact Form** - Integrated with Formspree for seamless message handling
- **🎯 Smooth Scrolling** - Polished user experience with intersection observers
- **♿ Accessible** - Built with semantic HTML and ARIA attributes
- **⚡ Fast Performance** - Lazy-loaded components and optimized rendering

## 🛠️ Tech Stack

### Core

- **React** 18.3.1 - UI library
- **React Router DOM** 6.30.1 - Client-side routing
- **Styled Components** 6.1.17 - CSS-in-JS styling
- **Vite** 6.2.6 - Build tool and dev server

### UI & Animations

- **@lottiefiles/dotlottie-react** - Lottie animations
- **@heroui/react** - UI components
- **Hamburgers** - Animated hamburger menu icons
- **React Avatar** - Profile image component

### Forms & Communication

- **@formspree/react** - Contact form backend
- **React Icons** - Icon library

### Development

- **Prettier** 3.7.4 - Code formatting
- **ESLint** - Code linting (via Vite)

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/oskarnordin/testing-repo.git
   cd testing-repo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Formspree form ID to `.env.local`:

   ```env
   VITE_FORMSPREE_FORM_ID=your_form_id_here
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start development server with hot reload |
| `npm run build`        | Build production-ready bundle            |
| `npm run preview`      | Preview production build locally         |
| `npm run format`       | Format all files with Prettier           |
| `npm run format:check` | Check if files are properly formatted    |

## 📁 Project Structure

```
js-portfolio-project/
├── components/
│   ├── Cards/              # Card components (About, Contact, Project, etc.)
│   ├── Sections/           # Page sections (Home, CV, Showroom, etc.)
│   ├── Blob.jsx            # Interactive canvas blob animation
│   ├── Navbar.jsx          # Main navigation with keyboard support
│   ├── ProgressBar.jsx     # Scroll progress indicator
│   ├── Spinner.jsx         # Loading spinner component
│   ├── SharedComponents.js # Reusable styled components
│   └── theme.js            # Theme configuration
├── hooks/
│   └── useIntersectionObserver.js  # Custom hook for scroll animations
├── public/
│   └── img/                # Images and assets
├── App.jsx                 # Main app component with routing
├── main.jsx                # Application entry point
├── style.css               # Global styles and CSS variables
├── index.html              # HTML template
└── vite.config.js          # Vite configuration

```

## 🎯 Key Sections

- **Home** - Interactive landing page with animated blob
- **About Me** - Personal journey and background
- **CV** - Work experience, education, and certifications
- **Tech Stack** - Technologies and tools I work with
- **Showroom** - Featured projects with live demos
- **Moodboard** - Pinterest board of tech inspiration
- **Contact** - Get in touch via contact form

## 🌐 Deployment

This project is optimized for deployment on:

- **Netlify** (recommended)
- Vercel
- GitHub Pages
- Any static hosting service

### Build for production:

```bash
npm run build
```

The `dist/` folder will contain your production-ready files.

## 🎨 Customization

### Styling

- **CSS Variables**: Modify `style.css` for global theme changes
- **Styled Components**: Component-specific styles in each `.jsx` file
- **Responsive**: All breakpoints defined in styled-components

### Content

- Update project data in `components/Sections/Showroom.jsx`
- Modify tech stack in `components/Sections/Techstack.jsx`
- Change contact info in `components/Cards/ContactCard.jsx`

## 👤 Author

**Oskar Nordin**

- GitHub: [@oskarnordin](https://github.com/oskarnordin)
- LinkedIn: [Oskar Nordin](https://linkedin.com/in/oskarnordin)
- Portfolio: [js-portfoliotwo.netlify.app](https://js-portfoliotwo.netlify.app/)

## 🙏 Acknowledgments

- Built as part of [Technigo's JavaScript Development Bootcamp](https://www.technigo.io/)
- Inspired by modern web design trends and best practices
