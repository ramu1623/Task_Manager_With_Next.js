import "./globals.css";
export const metadata = {
  title: "Task Manager",
  description: "Simple Task Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}