# 📊 Portfolio Analytics

[![Azure Static Web Apps](https://img.shields.io/badge/Azure%20Static%20Web%20Apps-Deployed-blue?style=for-the-badge&logo=microsoft-azure)](https://your-app-name.azurestaticapps.net)
[![GitHub Actions Workflow](https://img.shields.io/github/actions/workflow/status/Hugo-du-Preez/Portfolio-analytics/azure-static-web-apps.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/Hugo-du-Preez/Portfolio-analytics/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge&logo=device)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)

> A modern, responsive web application for portfolio analytics and data visualization. Built with vanilla HTML, CSS, and JavaScript, featuring interactive dashboards and deployed on Azure Static Web Apps.

## 📋 Project Overview

This project is a **Portfolio Analytics Web Application** that provides:
- Interactive data visualization dashboards
- Responsive design optimized for all devices
- Modern web technologies implementation
- Azure Static Web Apps deployment
- Power BI report integration examples

## 🌟 Features

- **📊 Interactive Dashboard** - Real-time data visualization
- **📱 Mobile Responsive** - Works perfectly on all screen sizes
- **⚡ Fast Performance** - Lightweight vanilla JavaScript implementation
- **🎨 Modern UI** - Clean, professional design
- **🔧 Easy Deployment** - Automated CI/CD with GitHub Actions
- **📈 Analytics Integration** - Power BI report examples

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript | User interface and interactions |
| **Styling** | Custom CSS | Responsive design and animations |
| **Deployment** | Azure Static Web Apps | Cloud hosting and CDN |
| **CI/CD** | GitHub Actions | Automated deployment pipeline |
| **Analytics** | Power BI | Report examples and data visualization |
| **Version Control** | Git & GitHub | Code management and collaboration |

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Git for cloning
- Internet connection for deployment

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hugo-du-Preez/Portfolio-analytics.git
   cd Portfolio-analytics
   ```

2. **Run locally**
   ```bash
   # Simple method - open directly
   # Double-click index.html or drag to browser

   # Or use local server
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

3. **View the application**
   - Navigate through different sections
   - Test responsive design
   - Interact with dashboard elements

## 📁 Project Structure

```
Portfolio-analytics/
├── index.html                 # Main application page
├── src/
│   └── css/
│       ├── styles.css         # Application styles
│       └── js/
│           └── app.js         # Application logic
├── reports/
│   ├── README.md              # Report documentation
│   └── *.pbix                 # Power BI report files
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml  # CI/CD configuration
├── .gitignore                 # Git ignore rules
├── LICENSE                    # MIT license
└── README.md                  # This documentation
```

## 🌐 Deployment on Azure Static Web Apps

### Automated Deployment Setup

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Search for "Static Web Apps"
   - Click "Create"

2. **Configure Application**
   - **Subscription**: Select your subscription
   - **Resource Group**: Create or select existing
   - **Name**: Choose unique app name
   - **Hosting Plan**: Free tier available

3. **Connect GitHub Repository**
   - **Source**: GitHub
   - **Organization**: Hugo-du-Preez
   - **Repository**: Portfolio-analytics
   - **Branch**: main

4. **Build Configuration**
   - **Build Preset**: Custom
   - **App Location**: `/`
   - **API Location**: *(leave empty)*
   - **Output Location**: `.`

5. **Deploy**
   - Azure automatically builds and deploys
   - Get your live URL (e.g., `https://your-app.azurestaticapps.net`)

### Environment Variables
- `AZURE_STATIC_WEB_APPS_API_TOKEN` - Auto-generated during setup

## 📊 Application Features

### Dashboard Components
- **Data Visualization** - Interactive charts and graphs
- **Analytics Metrics** - Key performance indicators
- **Responsive Layout** - Adapts to screen size
- **Modern Interface** - Clean, professional design

### Technical Features
- **Vanilla JavaScript** - No framework dependencies
- **CSS Grid & Flexbox** - Modern layout techniques
- **Mobile-First Design** - Responsive breakpoints
- **Performance Optimized** - Fast loading times

## 🎨 Customization

### Modifying Styles
```css
/* Edit src/css/styles.css */
:root {
  --primary-color: #your-color;
  --font-family: 'Your Font', sans-serif;
}
```

### Adding Features
```javascript
// Edit src/css/js/app.js
function newFeature() {
  // Add your custom functionality
}
```

### Content Updates
- Modify `index.html` for content changes
- Update navigation and sections
- Add new dashboard components

## 🔧 Development

### Local Development
```bash
# Start development server
python -m http.server 8000

# Open browser to http://localhost:8000
```

### Code Quality
- Follow HTML5 semantic structure
- Use CSS custom properties for theming
- Write clean, readable JavaScript
- Test across different browsers

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file.

```
MIT License

Copyright (c) 2026 Hugo du Preez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 📞 Contact

**Hugo du Preez**  
*Portfolio Analytics Project*

- **📧 Email**: [your.email@example.com]
- **🐙 GitHub**: https://github.com/Hugo-du-Preez
- **🌐 Live Demo**: [Update with Azure URL when deployed]

## 🙏 Acknowledgments

- **Azure Static Web Apps** - Hosting platform
- **GitHub Actions** - CI/CD automation
- **Power BI** - Analytics inspiration
- **Open Source Community** - Best practices and tools

---

<div align="center">

**Portfolio Analytics Web Application**  
*Built with modern web technologies for Azure Static Web Apps*

⭐ **Star this repository** if you find it useful!

</div># 📊 Portfolio Analytics

[![Azure Static Web Apps](https://img.shields.io/badge/Azure%20Static%20Web%20Apps-Deployed-blue?style=for-the-badge&logo=microsoft-azure)](https://your-app-name.azurestaticapps.net)
[![GitHub Actions Workflow](https://img.shields.io/github/actions/workflow/status/Hugo-du-Preez/Portfolio-analytics/azure-static-web-apps.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/Hugo-du-Preez/Portfolio-analytics/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge&logo=device)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)

> A professional portfolio website showcasing data analytics expertise, featuring interactive dashboards, methodology documentation, and project case studies. Built with modern web technologies and deployed on Azure Static Web Apps.

## 🌟 Key Features

- **📊 Interactive Analytics Dashboard** - Visual representation of data insights
- **📱 Fully Responsive Design** - Optimized for all devices and screen sizes
- **🔬 Data Analysis Methodology** - Comprehensive approach to analytics projects
- **🏗️ System Architecture** - Technical implementation details
- **📈 Power BI Integration** - Sample reports and dashboard examples
- **⚡ Fast & Lightweight** - No frameworks, pure vanilla implementation
- **🎨 Modern UI/UX** - Clean, professional design with smooth animations

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | HTML5, CSS3, ES6+ JavaScript |
| **Styling** | Custom CSS with CSS Grid & Flexbox |
| **Deployment** | Azure Static Web Apps |
| **CI/CD** | GitHub Actions |
| **Analytics** | Power BI Desktop |
| **Version Control** | Git & GitHub |

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git for version control
- Internet connection for deployment

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hugo-du-Preez/Portfolio-analytics.git
   cd Portfolio-analytics
   ```

2. **Run locally**
   ```bash
   # Option 1: Simple file opening
   # Double-click index.html or open in browser

   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

3. **Explore the site**
   - Navigate through different sections
   - Test responsive design on various screen sizes
   - Interact with dashboard elements

## 📁 Project Structure

```
Portfolio-analytics/
├── index.html                 # Main portfolio page
├── src/
│   └── css/
│       ├── styles.css         # Main stylesheet
│       └── js/
│           └── app.js         # Interactive JavaScript
├── reports/
│   ├── README.md              # Report documentation
│   └── *.pbix                 # Power BI files
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
├── .gitignore                 # Git ignore rules
├── LICENSE                    # MIT License
└── README.md                  # Project documentation
```

## 🌐 Deployment

### Azure Static Web Apps Setup

1. **Create Resource**
   - Azure Portal → Static Web Apps → Create
   - Select subscription and resource group

2. **Connect Repository**
   - Source: GitHub
   - Organization: Hugo-du-Preez
   - Repository: Portfolio-analytics
   - Branch: main

3. **Build Configuration**
   - Build Preset: Custom
   - App location: `/`
   - API location: *(empty)*
   - Output location: `.`

4. **Deploy**
   - Azure handles CI/CD automatically
   - Site goes live in minutes

## 📊 Analytics Showcase

### Power BI Dashboard Features
- **Task Management** - Progress tracking and status monitoring
- **Resource Allocation** - Team utilization visualization
- **Timeline Analysis** - Project scheduling and deadlines
- **Performance Metrics** - KPI tracking and reporting
- **Interactive Filters** - Dynamic data exploration

### Technical Implementation
- Custom calendar tables for date intelligence
- Role-playing dimensions for flexible analysis
- Conditional formatting for visual indicators
- Slicers and filters for user interaction

## 🎨 Customization

### Styling
- Modify `src/css/styles.css` for visual changes
- CSS custom properties for consistent theming
- Responsive breakpoints: 768px, 1024px
- Smooth transitions and hover effects

### Content
- Update portfolio sections in `index.html`
- Modify navigation and contact information
- Add new projects or case studies
- Customize dashboard examples

### Functionality
- Enhance interactions in `src/css/js/app.js`
- Add new features or animations
- Improve accessibility and performance

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/new-feature`)
3. **Commit** changes (`git commit -m 'Add new feature'`)
4. **Push** to branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

### Guidelines
- Maintain responsive design principles
- Test across different browsers and devices
- Follow semantic HTML structure
- Keep code clean and well-documented
- Ensure accessibility compliance

## 📄 License

```
MIT License

Copyright (c) 2026 Hugo du Preez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 📞 Contact

**Hugo du Preez** 👋  
*Data Analytics Professional*

- **📧 Email**: [your.email@example.com]
- **🐙 GitHub**: [https://github.com/Hugo-du-Preez](https://github.com/Hugo-du-Preez)
- **💼 LinkedIn**: [Your LinkedIn Profile]
- **🌐 Live Portfolio**: [Update with Azure URL when deployed]

## 🙏 Acknowledgments

- **Azure Static Web Apps** - Reliable hosting platform
- **Power BI** - Advanced analytics and visualization
- **GitHub Actions** - Automated deployment pipeline
- **Open Source Community** - Inspiration and best practices

---

<div align="center">

**Built with ❤️ by Hugo du Preez**  
*Showcasing the power of data-driven insights*

⭐ **Star this repo** if you find it helpful!

</div></content>
<parameter name="filePath">c:\Users\hugo7\Desktop\Portfolio-analytics\README.md
# 📊 Portfolio Analytics

[![Azure Static Web Apps](https://img.shields.io/badge/Azure%20Static%20Web%20Apps-Deployed-blue?style=for-the-badge&logo=microsoft-azure)](https://your-app-name.azurestaticapps.net)
[![CI](https://img.shields.io/github/actions/workflow/status/Hugo-du-Preez/Portfolio-analytics/azure-static-web-apps.yml)](https://github.com/Hugo-du-Preez/Portfolio-analytics/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge&logo=device)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)

A modern, responsive portfolio website showcasing data analytics projects and methodologies. Built with vanilla HTML, CSS, and JavaScript, and deployed on Azure Static Web Apps.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with adaptive navigation
- **Interactive Dashboard**: Visual analytics portfolio showcase
- **Methodology Section**: Detailed approach to data analysis
- **Architecture Overview**: System design and data flow diagrams
- **Data Insights**: Sample datasets and analysis techniques
- **Contact Integration**: Professional contact information

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with mobile-responsive design
- **Deployment**: Azure Static Web Apps
- **CI/CD**: GitHub Actions
- **Analytics Tools**: Power BI (sample reports included)

## 🚀 Quick Start

### Prerequisites

- A modern web browser
- Git (for cloning the repository)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hugo-du-Preez/portfolio-analytics.git
   cd portfolio-analytics
   ```

2. **Open in browser**
   - Open `index.html` directly in your browser
   - Or use a local server for better development experience:
     ```bash
     # Using Python (if available)
     python -m http.server 8000

     # Using Node.js (if available)
     npx serve .

     # Using PHP (if available)
     php -S localhost:8000
     ```

3. **Navigate the site**
   - Use the navigation menu to explore different sections
   - Mobile menu is available on smaller screens

## 📁 Project Structure

```
portfolio-analytics/
├── index.html              # Main portfolio page
├── src/
│   └── css/
│       ├── styles.css      # Main stylesheet
│       └── js/
│           └── app.js      # Non-critical JavaScript
├── reports/
│   ├── README.md           # Power BI report documentation
│   └── *.pbix              # Power BI report files
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml  # CI/CD pipeline
└── README.md               # This file
```

## 🌐 Deployment

This project is configured for automatic deployment to Azure Static Web Apps via GitHub Actions.

### Azure Static Web Apps Setup

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Create a new Static Web App
   - Connect your GitHub repository
   - Configure build settings:
     - **Source**: GitHub
     - **Branch**: main
     - **Build Preset**: Custom
     - **App location**: `/`
     - **API location**: (leave empty)
     - **Output location**: `.`

2. **Environment Variables**
   - The workflow uses `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - This is automatically set when connecting the repository in Azure Portal

3. **Custom Domain (Optional)**
   - Configure custom domain in Azure Static Web Apps
   - Update DNS records as instructed

### Manual Deployment

If you prefer manual deployment:

1. Build the site (no build step required for static site)
2. Upload files to Azure Storage or any static hosting service
3. Ensure all paths are relative

## 📊 Analytics Reports

The `reports/` directory contains sample Power BI reports:

- **ProjectManagementDashboard.pbix**: Interactive project management dashboard
  - Task progress tracking
  - Resource allocation visualization
  - Overdue task monitoring
  - Priority-based filtering

### Report Features

- Custom calendar table for date intelligence
- Role-playing dimensions (Due Date, Created Date, Completed Date)
- Key performance indicators
- Interactive slicers and filters

## 🎨 Customization

### Styling

- Main styles are in `src/css/styles.css`
- CSS custom properties (variables) are used for theming
- Mobile breakpoints: 768px and 1024px

### Content

- Update section content directly in `index.html`
- Modify navigation links in the header
- Add new sections by following the existing structure

### JavaScript

- Critical JS (menu functionality) is inline in HTML
- Non-critical JS is in `src/css/js/app.js`
- Uses vanilla JavaScript with modern ES6+ features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Maintain responsive design principles
- Test on multiple devices and browsers
- Keep JavaScript vanilla (no frameworks)
- Follow semantic HTML practices
- Optimize images and assets

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Hugo du Preez**

- **Portfolio**: [Your Live Site URL]
- **GitHub**: [https://github.com/Hugo-du-Preez]
- **LinkedIn**: [https://www.linkedin.com/in/hugo-du-preez/]
- **Email**: [hugo777dupreez@gmail.com]

## 🙏 Acknowledgments

- Azure Static Web Apps for hosting
- Power BI for analytics capabilities
- GitHub Actions for CI/CD automation
- Modern CSS techniques and best practices

---

*Built with ❤️ by Hugo du Preez for data analytics professionals*