# 📊 Portfolio Analytics

[![Azure Static Web Apps](https://img.shields.io/badge/Azure%20Static%20Web%20Apps-Deployed-blue?style=for-the-badge&logo=microsoft-azure)](https://your-app-name.azurestaticapps.net)
[![GitHub Actions Workflow](https://img.shields.io/github/actions/workflow/status/Hugo-du-Preez/Portfolio-analytics/azure-static-web-apps.yml?branch=main&style=for-the-badge&logo=github)](https://github.com/Hugo-du-Preez/Portfolio-analytics/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Design-green?style=for-the-badge&logo=device)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks)

> A modern, responsive portfolio website showcasing data analytics projects and methodologies. Built with vanilla HTML, CSS, and JavaScript, and deployed on Azure Static Web Apps.

## 🌟 Features

- **📱 Responsive Design**: Mobile-first approach with adaptive navigation
- **📊 Interactive Dashboard**: Visual analytics portfolio showcase
- **🔬 Methodology Section**: Detailed approach to data analysis
- **🏗️ Architecture Overview**: System design and data flow diagrams
- **📈 Data Insights**: Sample datasets and analysis techniques
- **📞 Contact Integration**: Professional contact information
- **⚡ Fast Loading**: Optimized static site with minimal dependencies
- **🎨 Modern UI**: Clean, professional design with smooth animations

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Styling** | Custom CSS with mobile-responsive design |
| **Deployment** | Azure Static Web Apps |
| **CI/CD** | GitHub Actions |
| **Analytics Tools** | Power BI (sample reports included) |
| **Version Control** | Git, GitHub |

## 🚀 Quick Start

### Prerequisites

- ✅ Modern web browser (Chrome, Firefox, Safari, Edge)
- ✅ Git (for cloning the repository)
- ✅ Internet connection (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hugo-du-Preez/Portfolio-analytics.git
   cd Portfolio-analytics
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   start index.html  # Windows
   open index.html   # macOS
   xdg-open index.html  # Linux

   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Navigate the site**
   - Use the navigation menu to explore different sections
   - Mobile menu available on smaller screens
   - All links and interactions are fully functional

## 📁 Project Structure

```
Portfolio-analytics/
├── 📄 index.html              # Main portfolio page
├── 📁 src/
│   └── 📁 css/
│       ├── 📄 styles.css      # Main stylesheet
│       └── 📁 js/
│           └── 📄 app.js      # Non-critical JavaScript
├── 📁 reports/
│   ├── 📄 README.md           # Power BI report documentation
│   └── 📄 *.pbix              # Power BI report files
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 azure-static-web-apps.yml  # CI/CD pipeline
├── 📄 .gitignore              # Git ignore rules
├── 📄 LICENSE                 # MIT License
└── 📄 README.md               # This file
```

## 🌐 Deployment

This project is configured for automatic deployment to Azure Static Web Apps via GitHub Actions.

### Azure Static Web Apps Setup

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Search for "Static Web Apps" → Create
   - Choose your subscription and resource group

2. **Connect GitHub Repository**
   - **Source**: GitHub
   - **Organization**: Hugo-du-Preez
   - **Repository**: Portfolio-analytics
   - **Branch**: main

3. **Build Configuration**
   - **Build Preset**: Custom
   - **App location**: `/`
   - **API location**: (leave empty)
   - **Output location**: `.`

4. **Review & Create**
   - Azure will automatically set up CI/CD
   - Your site will be live in minutes!

### Environment Variables

The deployment uses `AZURE_STATIC_WEB_APPS_API_TOKEN` which is automatically configured when connecting the repository.

## 📊 Analytics Reports

The `reports/` directory contains sample Power BI reports:

### 📈 ProjectManagementDashboard.pbix
**Interactive project management dashboard featuring:**
- 📊 Task progress tracking with visual indicators
- 👥 Resource allocation visualization
- ⏰ Overdue task monitoring with color-coded alerts
- 🎯 Priority-based filtering and slicers
- 📅 Custom calendar table for date intelligence
- 🔄 Role-playing dimensions (Due Date, Created Date, Completed Date)

**Key Metrics:**
- Task completion rates
- Resource utilization
- Project timelines
- Performance indicators

## 🎨 Customization

### Styling
- Main styles in `src/css/styles.css`
- CSS custom properties (variables) for theming
- Mobile breakpoints: 768px and 1024px
- Smooth animations and transitions

### Content
- Update sections directly in `index.html`
- Modify navigation in the header
- Add new sections following existing structure

### JavaScript
- Critical JS inline in HTML for guaranteed execution
- Non-critical JS in `src/css/js/app.js`
- Vanilla JavaScript with modern ES6+ features

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- ✅ Maintain responsive design principles
- ✅ Test on multiple devices and browsers
- ✅ Keep JavaScript vanilla (no frameworks)
- ✅ Follow semantic HTML practices
- ✅ Optimize images and assets

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

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

- **📧 Email**: [your.email@example.com]
- **🐙 GitHub**: [https://github.com/Hugo-du-Preez](https://github.com/Hugo-du-Preez)
- **💼 LinkedIn**: [Your LinkedIn Profile]
- **🌐 Portfolio**: [Your Live Site URL - Update when deployed]

## 🙏 Acknowledgments

- **Azure Static Web Apps** for reliable hosting
- **Power BI** for analytics capabilities
- **GitHub Actions** for seamless CI/CD
- **Modern CSS** techniques and best practices
- **Open source community** for inspiration

---

<div align="center">

**Built with ❤️ by [Hugo du Preez](https://github.com/Hugo-du-Preez) for data analytics professionals**

⭐ **Star this repository** if you found it helpful!

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