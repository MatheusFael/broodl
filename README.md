# Broodl - Mood Tracking Application 🌟

A modern, intuitive mood tracking application built with Next.js and Firebase that helps users monitor their emotional well-being through an interactive calendar interface.

## 📱 Features

- **User Authentication**: Secure signup/login with Firebase Auth
- **Interactive Calendar**: Visual mood tracking with color-coded days
- **Real-time Data**: Cloud storage with Firebase Firestore
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Mood Analytics**: Track patterns and view statistics
- **Beautiful UI**: Modern interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.3.5, React 18
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Icons**: Font Awesome
- **Fonts**: Fugaz One (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MatheusFael/broodl.git
   cd broodl

npm install

   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
broodl/
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout
│   ├── page.js           # Home page
│   └── dashboard/        # Dashboard pages
├── components/           # React components
│   ├── Button.js         # Reusable button component
│   ├── Calendar.js       # Interactive calendar
│   ├── Dashboard.js      # Main dashboard
│   ├── Login.js          # Authentication form
│   ├── Logout.js         # Logout component
│   └── ...
├── context/             # React context
│   └── authContext.js   # Authentication context
├── utils/               # Utility functions
├── firebase.js          # Firebase configuration
└── ...
```

## 🎯 Key Components

### Authentication Context (`context/authContext.js`)
Manages user authentication state and provides:
- User signup/login/logout functions
- Real-time authentication state
- User data fetching from Firestore

### Calendar Component (`components/Calendar.js`)
Interactive calendar featuring:
- Monthly navigation
- Color-coded mood visualization
- Click-to-select mood functionality
- Responsive grid layout

### Dashboard (`components/Dashboard.js`)
Main application interface with:
- Mood statistics
- Calendar integration
- User greeting and stats display

## 🎨 Mood System

The application uses a 5-point mood scale:
- 😭 **&*@#$** (1) - Red
- 🥲 **Sad** (2) - Orange  
- 😶 **Existing** (3) - Yellow
- 😊 **Good** (4) - Light Blue
- 😍 **Elated** (5) - Blue

## 🔒 Security Features

- Firebase Authentication integration
- Protected routes
- Secure user data storage
- Environment variable protection

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS utility classes
- Smooth transitions and hover effects
- Optimized for all screen sizes

## 🚀 Deployment

The app can be easily deployed to platforms like:

- **Vercel** (recommended)
- **Netlify**
- **Firebase Hosting**

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Firebase for backend services
- Next.js team for the amazing framework
- Tailwind CSS for styling utilities
- Font Awesome for icons

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact [your-email@example.com](mailto:your-email@example.com).

---

**Built with ❤️ using Next.js and Firebase**