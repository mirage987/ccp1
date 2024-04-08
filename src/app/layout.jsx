import { Montserrat } from "next/font/google";
import "./globals.scss";
// components
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Rural Web Factory",
  description: "Coded by Narii Teriipaia for an evaluation",
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
