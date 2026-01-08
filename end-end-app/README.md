# End-to-End Todo Application

A full-stack React application with authentication, authorization, and complete CRUD operations for managing todos. Built with React, Firebase, Tailwind CSS, and following clean architecture principles.

## 🚀 Features

### Authentication & Authorization
- **Auth Context API**: Global authentication state management
- **Protected Routes**: Route-level authorization using React Router
- **Persistent Authentication**: Auth state persists across browser refreshes
- **Sign Up / Login / Logout**: Complete authentication flow

### Todo Management
- **Create**: Add new todos
- **Read**: View all todos with filtering options
- **Update**: Edit todo titles via modal
- **Delete**: Remove todos with confirmation
- **Toggle Status**: Mark todos as completed or pending

### UI/UX Features
- **Navbar**: Application title, filter options, and user info
- **Sidebar**: List of all todos with selection highlighting
- **Main Content**: Detailed todo view with actions
- **Footer**: Application footer
- **Modal**: Update todo modal for editing
- **Filters**: View all, completed, or pending todos

## 🏗️ Architecture

### Clean Code Principles
- **Service Layer**: All Firebase/API interactions abstracted in service files
- **No Direct Firebase Calls**: Components never interact with Firebase directly
- **Separation of Concerns**: Clear separation between UI, business logic, and data
- **Modular Structure**: Reusable components and organized folder structure

### Folder Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, Modal)
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   ├── TodoForm.jsx
│   ├── TodoDetail.jsx
│   ├── UpdateTodoModal.jsx
│   └── ProtectedRoute.jsx
├── context/            # React Context providers
│   └── AuthContext.jsx
├── pages/              # Page components
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Todos.jsx
├── services/           # Service layer for API/Firebase
│   ├── auth.service.js
│   └── todo.service.js
├── config/             # Configuration files
│   ├── firebase.config.js
│   └── axios.config.js
├── App.jsx            # Main app with routing
└── main.jsx           # App entry point
```

## 🛠️ Tech Stack

- **React 19.2.0**: UI library with functional components and hooks
- **React Router DOM**: Client-side routing and navigation
- **Firebase**: Authentication and Firestore database
- **Axios**: HTTP client for API calls
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and dev server

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn
- A Firebase project (for authentication and Firestore)

## 🔧 Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable **Authentication** with Email/Password provider
4. Enable **Firestore Database**
5. Get your Firebase configuration from Project Settings

### 3. Environment Variables

1. Copy the `.env.example` file to `.env`
2. Update `.env` with your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

⚠️ **Important**: Never commit `.env` file to version control.

### 4. Run the Application

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 🧭 Application Routes

| Route | Description | Protection |
|-------|-------------|------------|
| `/` | Redirects to `/todos` if authenticated, else `/login` | Public |
| `/signup` | User registration page | Public |
| `/login` | User login page | Public |
| `/todos` | Todo dashboard with full CRUD | Protected |

## 🔐 Authentication Flow

1. **Sign Up**: New users create an account with email/password
2. **Login**: Existing users sign in
3. **Auth Persistence**: User state is stored in localStorage and Firebase auth
4. **Protected Routes**: Unauthenticated users are redirected to `/login`
5. **Logout**: Clears user session and redirects to login

## 📝 Todo Operations

- **Create Todo**: Enter title and click "Add Todo"
- **View Todos**: All todos displayed in sidebar
- **Update Todo**: Click "Edit Title" to open modal
- **Toggle Status**: Mark as completed or pending
- **Delete Todo**: Remove with confirmation
- **Filter**: View all, completed, or pending todos

## 🎨 Styling

- **Tailwind CSS**: All styling uses Tailwind utility classes
- **Custom Components**: shadcn/ui inspired components
- **Responsive Design**: Works on desktop and mobile
- **Clean UI**: Modern, functional, and consistent

## 🔒 Security Best Practices

- ✅ Environment variables for sensitive data
- ✅ Firebase security rules for data access
- ✅ Protected routes for authenticated pages
- ✅ Input validation on forms
- ✅ .env file excluded from Git

## 🐛 Troubleshooting

### Firebase Connection Issues
- Verify `.env` file has correct Firebase credentials
- Check Firebase console for enabled services
- Ensure Firestore security rules allow authenticated access

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be v16+)

---

**Note**: Remember to configure your Firebase project and update the `.env` file before running the application!
