import { inter} from "@/app/ui/fonts/fonts";
import "./globals.css";
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <title>
          Сорвижи село Арбажский район Кировской области
        </title>
        <meta
          name="description"
          content="Сорвижи село Арбажский район Кировской области"
          key="desc"
        />
        <link rel="icon" href="/village.svg" type="image/svg+xml"/>    
      </Head>
      <body className={inter.className}>
          <Header/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}
