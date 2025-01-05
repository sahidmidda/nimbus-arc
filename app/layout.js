import { Geist, Geist_Mono, Dancing_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const localDancingScript = Dancing_Script({
  variable: "--font-local-dancingscript",
  subsets: ["latin"],
});
const lcoalPlayfairDisplay = Playfair_Display({
  variable: "--font-local-playfairdisplay",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nimbus Arc",
  description: "Best Free AI Logo Maker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          // color: "white",
          // "background": "rgb(131,58,180)",
          // "background": "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        }}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
