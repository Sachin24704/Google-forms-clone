import { AuthUserProvider } from "@/firebase/auth";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthUserProvider } from "@/firebase/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthUserProvider>
        <body className={inter.className}>{children}</body>
      </AuthUserProvider>
    </html>
  );
}
