/** @jsxImportSource react */
import { Inter } from "next/font/google";
import "./globals.css";
import { StylesProvider } from "../styles-provider.web";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  );
}
