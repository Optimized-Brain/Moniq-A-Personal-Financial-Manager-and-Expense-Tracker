import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Moniq",
  description: "Manage your finances with our tool",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>
        <footer className="bg-green-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made by Shoaib Attar</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
