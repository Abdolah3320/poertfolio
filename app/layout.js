import Footer from "@/app/components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow mb-7">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
