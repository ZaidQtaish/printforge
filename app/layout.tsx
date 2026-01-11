import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import Header from "./header";

const albertSans = Albert_Sans({ subsets: ["latin"] });

const montserratAlternates = Montserrat_Alternates({ subsets: ["latin"], weight: ["400", "700"], variable: "--montserrat" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

