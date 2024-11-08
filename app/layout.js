"use client";

import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </head>
    <body>
      <ThemeProvider>
        <div className="min-h-screen bg-dark-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-200">
          {children}
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
