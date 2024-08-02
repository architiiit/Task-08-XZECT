import Image from "next/image";
import Script from 'next/script';
import Head from 'next/head';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <Head>
    <link rel="icon" href="favicon.ico" />
    </Head>
    <main className="page-wrapper relative z-[1] bg-white">

    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
   
    <Script src="https://kit.fontawesome.com/9c2246b493.js" crossorigin="anonymous"></Script>
    </main>
    </>
  );
}
