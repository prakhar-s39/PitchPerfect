// app/layout.tsx
import './globals.css';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Event Website',
  description: 'An event website built with Next.js, TailwindCSS, and Daisy UI.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-white min-h-screen">
        {/* Header */}
        <header className="p-4 bg-gray-900">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Event Name</h1>
            <nav>
              <a href="/about" className="btn btn-outline mr-4">
                About Us
              </a>
              <a href="/register" className="btn btn-outline">
                Register
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 p-4 mt-10">
          <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} Event Website. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
