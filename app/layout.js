import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./GlobalState/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Notunuzu Oluşturun",
  description:
    "Web üzerindeki notlarınızı oluşturun. Web üzerindeki ajandanız.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
