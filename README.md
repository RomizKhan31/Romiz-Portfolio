# Romiz Portfolio Website

A modern, responsive personal portfolio website showcasing software development projects, skills, and professional experience. Built with clean HTML5, CSS3, JavaScript, and Bootstrap 5.

## 🚀 Features

- **Modern UI/UX Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging scroll animations
- **Skills Slider**: Interactive carousel for showcasing technical skills
- **Project Gallery**: Grid-based project showcase with hover effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Performance Optimized**: Efficient CSS and JavaScript with error handling

## �️ Tech Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables
- **JavaScript (ES6+)**: Modern JavaScript with modular functions
- **Bootstrap 5**: Responsive framework
- **AOS**: Scroll animations
- **FontAwesome**: Icon library
- **Google Fonts**: Libertinus Sans typography

### Build Tools
- No build process required (static site)
- Direct browser deployment ready

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

## 🎨 Design Features

### Color Scheme
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
