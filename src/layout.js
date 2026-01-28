import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <style>{`
        :root {
          --background: 250 250 250;
          --foreground: 15 23 42;
        }
        
        .dark {
          --background: 10 10 15;
          --foreground: 248 250 252;
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(155, 155, 155, 0.3) transparent;
        }
        
        *::-webkit-scrollbar {
          width: 6px;
        }
        
        *::-webkit-scrollbar-track {
          background: transparent;
        }
        
        *::-webkit-scrollbar-thumb {
          background-color: rgba(155, 155, 155, 0.3);
          border-radius: 20px;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}
