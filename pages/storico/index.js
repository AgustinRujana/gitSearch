//This is the main storico page.

import Head from 'next/head';

//Components Imports
import Footer from '../../components/general/Footer';
import Navbar from '../../components/general/Navbar';
import ContainerStorico from '../../components/storico/ContainerStorico';

export default function Home() {
  return (
    <>
      <Head>
        <title>Git Search | Agustin Rujana</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='overflow-hidden w-full relative'>
        <ContainerStorico/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
