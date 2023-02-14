import "./globals.css";
import "@fontsource/inter";
import "@fontsource/material-icons-outlined/400.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col sm:flex-row">{children}</body>
    </html>
  );
}
