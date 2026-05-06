import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "XcelTrade.ai | AI-Enabled Modernization",
  description:
    "XcelTrade helps regulated enterprises modernize legacy platforms with AI, cloud, and workflow automation."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
