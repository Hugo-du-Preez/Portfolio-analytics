# 📊 Portfolio Analytics Dashboard

[![Azure Static Web Apps](https://img.shields.io/badge/Azure%20Static%20Web%20Apps-Free%20Tier-blue?style=for-the-badge&logo=microsoft-azure)](https://white-meadow-022a87d10.1.azurestaticapps.net/#contact)
[![Power BI](https://img.shields.io/badge/Power%20BI-Embedded-orange?style=for-the-badge&logo=power-bi)](https://powerbi.microsoft.com/)
[![Excel Online](https://img.shields.io/badge/Excel-Online-green?style=for-the-badge&logo=microsoft-excel)](https://www.microsoft.com/en-us/microsoft-365/excel)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A modern web dashboard featuring **embedded live Power BI reports** and **interactive Excel data from OneDrive**, deployed on Azure Static Web Apps Free Tier. Built with vanilla JavaScript for optimal performance and seamless integration.

## 🌟 Key Features

- **📊 Live Power BI Reports** - Embedded, interactive business intelligence dashboards
- **📈 Excel Data Integration** - Real-time Excel data from OneDrive with live updates
- **☁️ Cloud-Hosted** - Azure Static Web Apps Free Tier deployment
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Loading** - Lightweight vanilla JavaScript implementation
- **🔄 Real-time Updates** - Live data synchronization with Microsoft services
- **🎨 Modern UI** - Clean, professional dashboard interface

## 🏗️ Architecture Overview

```
Portfolio Analytics Dashboard
├── 📊 Power BI Embedded Reports
│   ├── Live Dashboard Views
│   ├── Interactive Filters
│   └── Real-time Data Updates
├── 📋 Excel Online Integration
│   ├── OneDrive Data Sources
│   ├── Embedded Spreadsheets
│   └── Live Data Synchronization
└── ☁️ Azure Static Web Apps
    ├── Free Tier Hosting
    ├── Global CDN
    └── Automatic Scaling
```

## 🛠️ Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Frontend** | HTML5, CSS3, JavaScript | Dashboard interface and interactions |
| **Power BI** | Power BI Service | Live embedded reports via iframe |
| **Excel** | OneDrive / Excel Online | Embedded spreadsheets via iframe |
| **Hosting** | Azure Static Web Apps | Cloud deployment and CDN |
| **Version Control** | Git & GitHub | Code management and deployment |
| **Build Process** | None (Static Site) | Direct deployment without compilation |

## 🚀 Quick Start

### Prerequisites
- ✅ Microsoft Account (for Power BI and OneDrive access)
- ✅ Power BI Pro license (for report embedding)
- ✅ OneDrive account with Excel files
- ✅ Modern web browser
- ✅ Azure account (for deployment)

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hugo-du-Preez/Portfolio-analytics.git
   cd Portfolio-analytics
   ```

2. **Run locally**
   ```bash
   # Simple method - open directly
   # Double-click index.html or open in browser

   # Or use local server
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

3. **View embedded content**
   - Power BI report loads automatically
   - Excel data from OneDrive displays interactively
   - All embeds work without additional configuration

## 📊 Power BI Report Embedding

### Current Implementation
The dashboard features a **live embedded Power BI report** using a public embed URL:

```html
<iframe 
    title="Project Management Dashboard" 
    src="https://app.powerbi.com/view?r=eyJrIjoiZGIwMTQ0NWQtYTQ4Yy00NGViLTgwYzMtYjY5MDg2NDdjODA2IiwidCI6ImVhMWE5MDliLTY2MDAtNGEyNS04MmE1LTBjNmVkN2QwNTEzYiIsImMiOjl9" 
    allowfullscreen
    loading="lazy">
</iframe>
```

### Features
- **Interactive Dashboard** - Full Power BI interactivity
- **Real-time Data** - Live updates from data source
- **Responsive Design** - Adapts to different screen sizes
- **Public Access** - No authentication required for viewing

## 📋 Excel OneDrive Integration

### Current Implementation
The dashboard includes an **embedded Excel workbook** from OneDrive:

```html
<iframe 
    src="https://1drv.ms/x/c/d35fa6b00a45c75e/IQR7jFtolxMTT5YrMZIQpX9qAdht1NdJexXldgBYzreMo4s" 
    width="100%" 
    height="100%" 
    frameborder="0" 
    scrolling="no"
    allowfullscreen>
</iframe>
```

### Features
- **Interactive Excel** - Full spreadsheet functionality
- **Live Data** - Real-time updates from OneDrive
- **Embedded View** - Seamless integration in dashboard
- **Public Access** - Viewable without OneDrive account

## ☁️ Azure Static Web Apps Deployment

### Free Tier Setup

1. **Create Azure Static Web App**
   ```bash
   # Via Azure CLI
   az staticwebapp create \
     --name "portfolio-analytics" \
     --resource-group "your-resource-group" \
     --source "https://github.com/Hugo-du-Preez/Portfolio-analytics" \
     --location "Central US" \
     --sku "Free"
   ```

2. **Configure Build Settings**
   ```json
   {
     "buildCommand": "echo 'No build required'",
     "outputLocation": ".",
     "apiLocation": "",
     "appLocation": "/"
   }
   ```

### Free Tier Benefits
- **100 GB Bandwidth** per month
- **0.5 GB Storage** included
- **Custom Domains** support
- **Global CDN** distribution
- **SSL Certificates** included

### No Environment Variables Required
- All embeds use public URLs
- No API keys or secrets needed
- No authentication configuration required

## 🔧 Configuration Guide

### Power BI Setup

**Current Implementation**: Uses public embed URLs - no API configuration required.

1. **Publish Report to Power BI Service**
2. **Generate Public Embed Link**
3. **Copy iframe code** (already implemented in `index.html`)

### OneDrive Setup

**Current Implementation**: Uses public sharing links - no API configuration required.

1. **Upload Excel file to OneDrive**
2. **Set sharing to "Anyone with link can view"**
3. **Generate embed iframe** (already implemented in `index.html`)

### No API Keys Required
- All embeds use public URLs
- No authentication needed for viewers
- No Azure AD app registration required
- No client IDs or secrets needed

## 📁 Project Structure

```
Portfolio-analytics/
├── index.html                    # Main dashboard with embedded reports
├── src/
│   └── css/
│       ├── styles.css           # Dashboard styling and responsive design
│       └── js/
│           └── app.js           # Navigation and interaction logic
├── reports/
│   ├── ProjectAnalytics_Portfolio.pbix.pbix  # Power BI report file
│   └── README.md              # Report documentation
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml  # CI/CD deployment
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT license
└── README.md                   # This documentation
```

## 🎨 Customization

### Dashboard Themes
```css
/* Custom theme variables in styles.css */
:root {
  --primary-color: #0078d4;
  --secondary-color: #106ebe;
  --background-color: #f8f9fa;
  --text-color: #323130;
}
```

### Report Updates
To update embedded reports:
1. **Power BI**: Publish new version to Power BI Service, update iframe URL in `index.html`
2. **Excel**: Upload new version to OneDrive, update iframe URL in `index.html`

### No JavaScript Configuration Required
- All embeds use static iframe URLs
- No dynamic token generation needed
- No API calls or authentication required

## 🔐 Security Considerations

### Current Implementation
- **Public Access**: All embeds use public URLs - no authentication required
- **Read-Only**: Embedded content is view-only, no data modification possible
- **No API Keys**: No sensitive credentials stored in code
- **HTTPS Only**: All embeds load over secure HTTPS connections

### Power BI Security
- Content is publicly shared via Power BI Service
- No embed tokens or authentication needed
- Data access controlled at Power BI Service level

### OneDrive Security
- Files shared with "Anyone with link can view" permission
- No sensitive data should be included in shared Excel files
- Link sharing can be revoked if needed

## 📊 Performance Optimization

### Current Implementation
- **Static Site**: No server-side processing or API calls
- **CDN Delivery**: Azure Static Web Apps provides global CDN
- **Lazy Loading**: Iframes load content on demand
- **Minimal JavaScript**: Only essential interactivity code

### Loading Strategies
- **Direct iframe embeds**: No additional loading logic needed
- **Browser caching**: Static assets cached automatically
- **HTTPS optimization**: Secure connections for all embeds

### Monitoring
- **Azure Portal**: View usage statistics and performance metrics
- **Browser DevTools**: Monitor iframe loading and performance
- **Simple deployment**: No build process to optimize

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/new-dashboard`)
3. **Commit** changes (`git commit -m 'Add new dashboard component'`)
4. **Push** branch (`git push origin feature/new-dashboard`)
5. **Open** Pull Request

### Development Guidelines
- Test iframe embeds on multiple devices and browsers
- Ensure responsive design works on mobile devices
- Update iframe URLs when reports or Excel files change
- Keep the project structure simple (no build tools needed)
- Document any new embedded content in README

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

## 📞 Support & Contact

**Hugo du Preez**  
*Portfolio Analytics Dashboard*

- **📧 Email**: hugo777dupreez@gmail.com
- **💼 LinkedIn**: https://www.linkedin.com/in/hugo-du-preez/
- **🐙 GitHub**: https://github.com/Hugo-du-Preez/
- **📊 Live Dashboard**: https://white-meadow-022a87d10.1.azurestaticapps.net/

### Troubleshooting
- **Power BI Issues**: Verify the embed URL is still valid and report is published
- **OneDrive Issues**: Check that sharing link is still active and file permissions allow viewing
- **Azure Issues**: Check deployment status in Azure portal
- **Loading Issues**: Ensure stable internet connection for iframe content

## 🙏 Acknowledgments

- **Microsoft Power BI** - Embedded analytics platform
- **Microsoft Excel Online** - Cloud spreadsheet integration
- **Azure Static Web Apps** - Reliable hosting infrastructure
- **OneDrive** - File storage and sharing platform
- **Open Source Community** - Libraries and best practices

---

<div align="center">

**Portfolio Analytics Dashboard**  
*Live Power BI Reports + Excel Data Integration*

*Hosted on Azure Static Web Apps Free Tier*

⭐ **Star this repository** to support the project!

</div>
