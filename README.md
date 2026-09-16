# Romiz Khan

**Software Engineer | Full Stack Developer | Flutter Developer**

A modern, responsive personal portfolio website showcasing software development projects, technical expertise, and professional experience. Specialized in building scalable web and mobile applications with modern technologies.

## 🚀 Features

- **Modern UI/UX Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging scroll animations
- **Skills Slider**: Interactive carousel for showcasing technical skills
- **Project Gallery**: Grid-based project showcase with hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Performance Optimized**: Efficient CSS and JavaScript with error handling

## 💻 Technical Skills

### Frontend Development
- **React.js**: Component-based UI development with hooks and state management
- **Next.js**: Server-side rendering, static site generation, and full-stack React framework
- **JavaScript (ES6+)**: Modern JavaScript with async/await, promises, and modular architecture
- **TypeScript**: Type-safe development with interfaces, generics, and advanced typing
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **HTML5**: Semantic markup and accessibility best practices
- **CSS3**: Advanced styling with Flexbox, Grid, animations, and responsive design
- **Elementor (WordPress)**: WordPress page builder for CMS-based websites

### Backend Development
- **Next.js API Routes**: Serverless API endpoints and middleware
- **Node.js**: Server-side JavaScript runtime with Express.js
- **RESTful APIs**: Design and implementation of REST APIs
- **Authentication & Authorization**: JWT, OAuth, and session management

### Database & Storage
- **MySQL**: Relational database design, optimization, and complex queries
- **PostgreSQL**: Advanced relational database with JSON support and indexing
- **Supabase**: Open-source Firebase alternative with real-time database and auth
- **Firebase**: NoSQL database, real-time sync, and cloud functions

### Mobile Development
- **Flutter**: Cross-platform mobile app development with Dart
- **Dart**: Programming language for Flutter applications
- **State Management**: Provider, Riverpod, and BLoC patterns

### Design & Prototyping
- **Figma**: UI/UX design, prototyping, and design system creation
- **Canva**: Graphic design and visual content creation

### Development Tools
- **Visual Studio Code**: Primary IDE with extensions and custom configurations
- **IntelliJ IDEA**: Advanced IDE for Java and enterprise development
- **Android Studio**: Mobile development environment for Flutter and Android
- **Git**: Version control with branching strategies and collaboration workflows
- **GitHub**: Code hosting, CI/CD, and project management

## �‍💻 About Me

I am a passionate Software Engineer and Full Stack Developer with expertise in building modern web and mobile applications. With a strong foundation in both frontend and backend technologies, I specialize in creating scalable, performant, and user-centric solutions.

My technical journey spans across multiple domains:
- **Web Development**: Building responsive and interactive web applications using React, Next.js, and modern CSS frameworks
- **Mobile Development**: Creating cross-platform mobile apps with Flutter and Dart
- **Backend Development**: Designing robust APIs and server-side solutions with Node.js and Next.js
- **Database Management**: Working with both SQL (MySQL, PostgreSQL) and NoSQL (Firebase, Supabase) databases
- **UI/UX Design**: Crafting intuitive user experiences using Figma and implementing them with pixel-perfect code

I am committed to writing clean, maintainable code and staying updated with the latest industry trends and best practices.

## 🌟 Portfolio Website Features

- **Modern UI/UX Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging scroll animations
- **Skills Slider**: Interactive carousel for showcasing technical skills
- **Project Gallery**: Grid-based project showcase with hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Performance Optimized**: Efficient CSS and JavaScript with error handling

## 📁 Project Structure

```
Romiz-Portfolio/
├── index.html              # Main HTML file
├── src/
│   ├── css/
│   │   └── style.css      # Custom styles
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   └── images/
│       └── projects/      # Project screenshots
├── public/                # Public assets (for future expansion)
├── assets/                # Legacy assets (deprecated)
└── README.md             # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: #38bdf8 (Sky Blue)
- **Secondary**: #818cf8 (Indigo)
- **Accent**: #f472b6 (Pink)
- **Background**: #0f172a (Dark Slate)
- **Card Background**: #1e293b (Slate)

### Typography
- **Font Family**: Libertinus Sans, Helvetica Neue, sans-serif
- **Responsive Typography**: Clamp-based sizing for scalability
- **Line Height**: 1.7 for improved readability

### UI Components
- Glassmorphism effects
- Gradient buttons
- Smooth hover transitions
- Card-based layouts
- Custom scrollbar styling

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RomizKhan31/Romiz-Portfolio.git
   cd Romiz-Portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

3. **Deploy**
   - Upload to any static hosting service (Netlify, Vercel, GitHub Pages)
   - No build process required

## 📝 Customization

### Updating Content

1. **Personal Information**: Edit `index.html` to update name, title, and descriptions
2. **Projects**: Update project cards in the Projects section
3. **Skills**: Modify skill cards in the Skills section
4. **Experience**: Update experience cards in the Experience section
5. **Contact**: Update contact form and social links in the Footer

### Styling

1. **Colors**: Modify CSS variables in `src/css/style.css`:
   ```css
   :root {
       --primary-color: #38bdf8;
       --secondary-color: #818cf8;
       /* ... other variables */
   }
   ```

2. **Fonts**: Change Google Fonts link in `index.html`

3. **Animations**: Adjust AOS settings in `src/js/script.js`

### Adding Projects

To add a new project:

1. Add project image to `src/images/projects/`
2. Copy a project card in `index.html`
3. Update image path, title, description, and link

## 🔧 JavaScript Modules

The JavaScript is organized into modular functions:

- `initAOS()`: Initialize scroll animations
- `initNavbarScroll()`: Handle navbar scroll behavior
- `initSmoothScroll()`: Smooth scrolling for navigation
- `initSkillsSlider()`: Skills carousel functionality
- `initContactForm()`: Contact form validation and handling

## 🐛 Bug Fixes Implemented

- ✅ Fixed image path issues (backslashes to forward slashes)
- ✅ Removed duplicate CSS styles
- ✅ Added proper error handling in JavaScript
- ✅ Fixed CSS compatibility issues (background-clip)
- ✅ Removed testimonial section as requested
- ✅ Improved responsive typography with clamp()
- ✅ Added proper meta tags and SEO optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

### Netlify
1. Connect repository to Netlify
2. Deploy automatically on push

### Vercel
1. Import project in Vercel
2. Deploy with zero configuration

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Select main branch as source

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Romiz Khan**
- GitHub: [@RomizKhan31](https://github.com/RomizKhan31)
- LinkedIn: [Romiz Khan](https://www.linkedin.com/in/romiz-khan-501723350/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please reach out through the contact form on the website or social media links.

---

**Built with ❤️ by Romiz Khan**
