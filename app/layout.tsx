import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "./header";

const albertSans = Albert_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={albertSans.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

