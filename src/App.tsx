import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ClerkProvider } from '@clerk/clerk-react';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/layout/layout';
import { Home } from '@/pages/home';
import { Dashboard } from '@/pages/dashboard';
import { Profile } from '@/pages/profile';
import { Skills } from '@/pages/skills';
import { Requests } from '@/pages/requests';
import { SignInPage } from '@/pages/auth/sign-in';
import { SignUpPage } from '@/pages/auth/sign-up';
import './App.css';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  // If no Clerk key is provided, show a setup message
  if (!CLERK_PUBLISHABLE_KEY || CLERK_PUBLISHABLE_KEY === 'your_clerk_publishable_key_here') {
    return (
      <ThemeProvider defaultTheme="light" storageKey="skillsathi-theme">
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center space-y-4 p-8">
            <h1 className="text-2xl font-bold">SkillSathi Setup Required</h1>
            <p className="text-muted-foreground max-w-md">
              Please add your Clerk publishable key to the .env.local file to enable authentication.
            </p>
            <p className="text-sm text-muted-foreground">
              Get your key from: <a href="https://dashboard.clerk.com/last-active?path=api-keys" className="text-primary underline">Clerk Dashboard</a>
            </p>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ThemeProvider defaultTheme="light" storageKey="skillsathi-theme">
        <Router>
          <div className="min-h-screen bg-background text-foreground transition-colors">
            <Routes>
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="skills" element={<Skills />} />
                <Route path="requests" element={<Requests />} />
              </Route>
            </Routes>
            <Toaster />
          </div>
        </Router>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default App;