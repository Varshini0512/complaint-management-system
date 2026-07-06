# Complaint Management System

A modern, feature-rich complaint management system with voice assistant support, dark mode, and multilingual capabilities.

## 🌟 Features

- **User Authentication**: Secure login and signup functionality
- **Multi-Role Support**: 
  - User Dashboard: Submit and track complaints
  - In-charge Dashboard: Manage and respond to complaints
  - Admin Dashboard: System administration and oversight
- **Voice Assistant**: AI-powered voice-based complaint submission
- **Dark Mode**: Comfortable viewing experience with dark theme toggle
- **Multilingual Support**: English and Tamil language support
- **Real-time Notifications**: Toast notifications for user feedback
- **Progress Tracking**: Visual progress indicators for complaint status
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 📋 Project Structure

```
src/
├── client/
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Application entry point
│   ├── index.html              # HTML template
│   ├── styles.css              # Global styles
│   │
│   ├── components/             # Reusable React components
│   │   ├── ComplaintCard.tsx    # Complaint display component
│   │   ├── ComplaintForm.tsx    # Complaint submission form
│   │   ├── DarkModeToggle.tsx   # Dark mode toggle button
│   │   ├── LanguageSelector.tsx # Language selection dropdown
│   │   ├── Modal.tsx            # Modal dialog component
│   │   ├── ProgressBar.tsx      # Progress indicator
│   │   ├── Toast.tsx            # Notification component
│   │   └── VoiceAssistant.tsx   # Voice assistant component
│   │
│   ├── pages/                  # Page components
│   │   ├── AdminDashboard.tsx   # Administrator dashboard
│   │   ├── InchargeDashboard.tsx # In-charge officer dashboard
│   │   ├── Login.tsx            # Login page
│   │   ├── Signup.tsx           # User registration page
│   │   └── UserDashboard.tsx    # User complaint dashboard
│   │
│   └── i18n/                   # Internationalization
│       ├── en.json             # English translations
│       ├── ta.json             # Tamil translations
│       └── index.js            # i18n configuration
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS3
- **Internationalization**: Custom i18n implementation
- **Voice Recognition**: Web Speech API

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Varshini0512/complaint-management-system.git
   cd complaint-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Usage

### User Dashboard
- Submit new complaints with detailed descriptions
- Use voice assistant for hands-free complaint submission
- Track complaint status in real-time
- View complaint history

### In-charge Dashboard
- View all pending complaints
- Update complaint status
- Add remarks and resolution notes
- Prioritize complaints

### Admin Dashboard
- System-wide analytics and reports
- User and complaint management
- System configuration and settings

## 🌐 Language Support

The application supports multiple languages:
- **English** (en)
- **Tamil** (ta)

Switch languages using the language selector in the navigation bar.

## 🌙 Dark Mode

Toggle dark mode using the theme switch button in the header. Your preference is saved locally.

## 🎤 Voice Assistant

- Click the microphone icon to activate voice assistant
- Speak your complaint clearly
- The system will transcribe and submit your complaint
- Works in all supported languages

## 🔐 Security Features

- User authentication and authorization
- Role-based access control
- Secure session management
- Data validation on client and server side

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interface
- Cross-browser compatibility

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Varshini Palaniyandi**

## 📞 Support

For support, email support@complaintmgmt.com or create an issue in the repository.

## 🎯 Roadmap

- [ ] Backend API integration
- [ ] Database implementation
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Advanced analytics dashboard
- [ ] Export reports (PDF, Excel)
- [ ] Integration with third-party services
- [ ] Mobile app (React Native)

## 🙏 Acknowledgments

- React and Vite communities
- TypeScript team
- Contributors and users

---

**Made with ❤️ for better complaint management**
