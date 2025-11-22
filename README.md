# 🚀 PulseChain Marketplace

A decentralized community marketplace for PulseChain users to discover and offer services. Built with Next.js 14, TypeScript, and Tailwind CSS.

![PulseChain Marketplace](https://img.shields.io/badge/PulseChain-Marketplace-9f7aea?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjOWY3YWVhIi8+Cjwvc3ZnPgo=)

## ✨ Features

- **🔍 Universal Search**: Find services by name, location, skills, or contact methods
- **⚡ Instant Profile Addition**: Direct GitHub editing - no approval needed
- **📱 Multi-Platform Contact**: Telegram, X (Twitter), Instagram, LinkedIn, Email, Linktree support
- **🎨 Modern UI**: Beautiful gradient design with PulseChain branding
- **📊 Real-time Updates**: Profiles appear instantly after GitHub commits
- **🌍 Global Community**: Connect with PulseChain users worldwide

## 🚀 How to Add Your Profile

Visit the [Join Page](https://pulsechainmarketplace.vercel.app/join) and follow the simple 4-step process:

### GitHub Direct Edit Method ⚡
1. **Click the GitHub link** - Opens the marketplace data file directly
2. **Edit the file** - Scroll to the bottom and add a comma after the last entry
3. **Add your profile** - Copy the template and fill in your information
4. **Commit changes** - Select "Commit directly to main branch" and click "Commit changes"

**Your profile appears instantly - no waiting for approval!**

### Profile Template
```json
{
  "emoji": "🤝",
  "services": "Your services here",
  "name": "Your Name",
  "location": "Your Location", 
  "telegram_handle": "@yourtelegram",
  "telegram_link": "https://t.me/yourtelegram",
  "contact_link": "your-email@example.com or https://linktr.ee/yourname",
  "twitter": "https://twitter.com/yourhandle",
  "instagram": "https://instagram.com/yourhandle"
}
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript  
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG icons for social platforms
- **Deployment**: Vercel-ready
- **Data Storage**: JSON file with GitHub as CMS

## 💻 Development

### Prerequisites
- Node.js 18+
- npm or yarn
- GitHub account

### Quick Start
```bash
# Clone the repository
git clone https://github.com/Lefgk/PulsechainMarketplace.git
cd PulsechainMarketplace

# Install dependencies
npm install

# Run development server  
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main marketplace page
│   ├── join/page.tsx     # Profile submission page
│   └── layout.tsx        # Root layout
├── components/           # Reusable components (if any)
└── styles/              # Global styles

public/
├── favicon.svg          # PulseChain-branded favicon
└── ...

marketplace_data.json    # Community profiles database
```

## � Supported Contact Methods

The marketplace automatically detects and displays appropriate icons for:

- 📱 **Telegram**: Primary communication method
- 📧 **Email**: Direct email contact  
- 🌳 **Linktree**: Link aggregation profiles
- 💼 **LinkedIn**: Professional networking
- 𝕏 **X (Twitter)**: Social media presence
- 📷 **Instagram**: Visual content and lifestyle
- 🔗 **Website**: Personal or business websites

## 📊 Community Stats

- **19+ Active Profiles** across various industries
- **Global Reach** with members from multiple countries  
- **Diverse Services** from fitness training to blockchain consulting
- **Growing Community** with new members joining daily

## � Deployment

### Vercel (Recommended)
1. Fork this repository
2. Connect to Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Lefgk/PulsechainMarketplace)

### Other Platforms
- **Build command**: `npm run build`
- **Output directory**: `out`  
- **Node.js version**: 18+

## 🤝 Contributing

### Adding Your Profile
Follow the [profile addition guide](#-how-to-add-your-profile) above.

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)  
7. Open a Pull Request

### Reporting Issues
- Use GitHub Issues for bug reports
- Include reproduction steps
- Add screenshots if applicable

## 📞 Support

Need help? Contact the maintainer:

- **Telegram**: [@Lefkk](https://t.me/Lefkk)
- **GitHub**: [Lefgk](https://github.com/Lefgk)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Acknowledgments

- **PulseChain Community** for inspiration and support
- **Next.js Team** for the amazing framework  
- **Tailwind CSS** for beautiful styling utilities
- **Vercel** for seamless deployment

---

**⚡ Built for the PulseChain Community | 🚀 Deploy Your Own Version**
