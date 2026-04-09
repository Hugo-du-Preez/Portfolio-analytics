# 📊 Portfolio Analytics Dashboard

[![Azure Static Web Apps](https://img.shields.io/badge/Azure%20Static%20Web%20Apps-Free%20Tier-blue?style=for-the-badge&logo=microsoft-azure)](https://your-app-name.azurestaticapps.net)
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
| **Power BI** | Power BI Embedded | Live report embedding and visualization |
| **Excel** | Excel Online / OneDrive | Data source and spreadsheet embedding |
| **Hosting** | Azure Static Web Apps | Cloud deployment and CDN |
| **Authentication** | Microsoft Account | Secure access to reports and data |
| **APIs** | Power BI REST API | Report embedding and data access |

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

2. **Configure Microsoft Services**
   ```javascript
   // Update config in src/js/config.js
   const config = {
     powerBI: {
       clientId: 'your-powerbi-client-id',
       authority: 'https://login.microsoftonline.com/your-tenant-id',
       reportId: 'your-report-id',
       groupId: 'your-workspace-id'
     },
     oneDrive: {
       clientId: 'your-onedrive-client-id',
       fileId: 'your-excel-file-id'
     }
   };
   ```

3. **Run locally**
   ```bash
   # Start local server
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

## 📊 Power BI Report Embedding

### Setup Process

1. **Create Power BI Report**
   - Design your dashboard in Power BI Desktop
   - Publish to Power BI Service workspace

2. **Configure Embedding**
   ```javascript
   // Power BI embedding configuration
   const embedConfig = {
     type: 'report',
     id: 'your-report-id',
     embedUrl: 'https://app.powerbi.com/reportEmbed',
     accessToken: 'your-access-token',
     settings: {
       filterPaneEnabled: true,
       navContentPaneEnabled: true
     }
   };
   ```

3. **Authentication Setup**
   - Register Azure AD application
   - Configure API permissions
   - Generate access tokens

### Embedding Features
- **Interactive Filters** - Dynamic data exploration
- **Responsive Layout** - Adapts to container size
- **Export Options** - PDF, PowerPoint, Excel export
- **Mobile Optimization** - Touch-friendly interactions

## 📋 Excel OneDrive Integration

### OneDrive Excel Embedding

1. **Upload Excel File**
   - Store your Excel file in OneDrive
   - Ensure sharing permissions are set

2. **Generate Embed Code**
   ```html
   <!-- Excel Online embed code -->
   <iframe
     src="https://onedrive.live.com/embed?resid=YOUR_FILE_ID&authkey=!YOUR_AUTH_KEY&em=2&wdAllowInteractivity=False"
     width="100%"
     height="600px"
     frameborder="0">
   </iframe>
   ```

3. **Live Data Updates**
   - Changes in OneDrive reflect immediately
   - Real-time data synchronization
   - Collaborative editing support

### Excel Features
- **Live Data Binding** - Real-time updates from OneDrive
- **Interactive Charts** - Embedded Excel charts and graphs
- **Formula Calculations** - Live computation and updates
- **Data Validation** - Form controls and validation rules

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

3. **Environment Variables**
   ```bash
   # Set in Azure Portal or CLI
   az staticwebapp environment-variables set \
     --name "portfolio-analytics" \
     --environment-variables \
     POWERBI_CLIENT_ID="your-client-id" \
     ONEDRIVE_CLIENT_ID="your-onedrive-id"
   ```

### Free Tier Benefits
- **100 GB Bandwidth** per month
- **0.5 GB Storage** included
- **Custom Domains** support
- **Global CDN** distribution
- **SSL Certificates** included

## 🔧 Configuration Guide

### Power BI Setup

1. **Register Application**
   ```bash
   # Azure AD App Registration
   az ad app create --display-name "Portfolio Analytics"
   ```

2. **Configure Permissions**
   - Power BI Service: Report.ReadWrite.All
   - Azure AD: User.Read

3. **Embed Token Generation**
   ```javascript
   // Generate embed token
   const embedToken = await powerbi.getEmbedToken(reportId, datasets);
   ```

### OneDrive Setup

1. **File Permissions**
   - Set OneDrive file to "Anyone with link can view"
   - Generate embed URL from OneDrive

2. **Excel Online Integration**
   ```javascript
   // OneDrive Excel API integration
   const excelUrl = `https://graph.microsoft.com/v1.0/me/drive/items/${fileId}/workbook/worksheets`;
   ```

## 📁 Project Structure

```
Portfolio-analytics/
├── index.html                    # Main dashboard page
├── src/
│   ├── css/
│   │   ├── styles.css           # Dashboard styling
│   │   └── responsive.css       # Mobile optimizations
│   └── js/
│       ├── config.js            # API configurations
│       ├── powerbi.js           # Power BI embedding logic
│       ├── onedrive.js          # Excel integration
│       └── dashboard.js         # Main dashboard controller
├── assets/
│   ├── images/                  # Dashboard images
│   └── icons/                   # UI icons
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
├── README.md                    # This documentation
└── package.json                 # Dependencies (if any)
```

## 🎨 Customization

### Dashboard Themes
```css
/* Custom theme variables */
:root {
  --primary-color: #0078d4;
  --secondary-color: #106ebe;
  --background-color: #f8f9fa;
  --text-color: #323130;
}
```

### Report Configuration
```javascript
// Customize embedded reports
const reportConfig = {
  filters: [
    {
      $schema: "http://powerbi.com/product/schema#basic",
      target: { table: "Sales", column: "Region" },
      operator: "In",
      values: ["North", "South"]
    }
  ],
  settings: {
    panes: {
      filters: { visible: true },
      pageNavigation: { visible: true }
    }
  }
};
```

## 🔐 Security Considerations

### Power BI Security
- **Row-level Security (RLS)** - User-specific data access
- **Embed Tokens** - Time-limited access tokens
- **Azure AD Integration** - Secure authentication

### OneDrive Security
- **Sharing Permissions** - Controlled access levels
- **Link Expiration** - Time-limited sharing links
- **Audit Logging** - Access tracking and monitoring

## 📊 Performance Optimization

### Loading Strategies
- **Lazy Loading** - Load reports on demand
- **Caching** - Cache embed tokens and configurations
- **Compression** - Optimize assets for faster loading

### Monitoring
- **Azure Application Insights** - Performance monitoring
- **Power BI Usage Metrics** - Report interaction analytics
- **CDN Analytics** - Global performance insights

## 🤝 Contributing

1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/new-dashboard`)
3. **Commit** changes (`git commit -m 'Add new dashboard component'`)
4. **Push** branch (`git push origin feature/new-dashboard`)
5. **Open** Pull Request

### Development Guidelines
- Test embedding on multiple devices
- Ensure responsive design compliance
- Validate Power BI and OneDrive integrations
- Follow security best practices
- Document new features thoroughly

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

- **📧 Email**: [your.email@example.com]
- **🐙 GitHub**: https://github.com/Hugo-du-Preez
- **📊 Live Dashboard**: [Update with Azure URL when deployed]
- **📋 Documentation**: [Link to detailed setup guide]

### Troubleshooting
- **Power BI Issues**: Check embed token expiration
- **OneDrive Issues**: Verify sharing permissions
- **Azure Issues**: Check deployment logs

## 🙏 Acknowledgments

- **Microsoft Power BI** - Embedded analytics platform
- **Microsoft Excel Online** - Cloud spreadsheet integration
- **Azure Static Web Apps** - Reliable hosting infrastructure
- **OneDrive API** - File storage and sharing
- **Open Source Community** - Libraries and best practices

---

<div align="center">

**Portfolio Analytics Dashboard**  
*Live Power BI Reports + Excel Data Integration*

*Hosted on Azure Static Web Apps Free Tier*

⭐ **Star this repository** to support the project!

</div>