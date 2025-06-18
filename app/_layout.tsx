// app/_layout.tsx
import { Stack, usePathname, useRouter } from "expo-router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import './globals.css';

function LayoutWrapper() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isOnLoginPage = pathname === '/login';
    if (!isLoggedIn && !isOnLoginPage) {
      router.replace('/login');
    }
  }, [isLoggedIn, pathname]);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <LayoutWrapper />
    </AuthProvider>
  );
}
